// Stage 4 audit of the built site (dist/). Run after `npm run build`: node scripts/audit.mjs
// Serves dist/ locally (no network needed) and checks, for every public page:
//   axe-core (WCAG 2.2 A and AA, includes colour contrast) at 375 px and 1440 px
//   keyboard: every link, button, and question is reachable with Tab and shows a visible focus ring
//   375 px: no horizontal scroll, tap targets 44 px or taller, text 16 px or larger
//   reduced motion: no transitions or animations remain
//   weight: first-load bytes and JavaScript bytes for the home page
//   Lighthouse (mobile profile): Performance, Accessibility, Best Practices, SEO
// Writes a summary to docs/final/audit.json. Exit code 2 means a check failed.
import { createServer } from "node:http";
import { readFile, mkdir, writeFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { createRequire } from "node:module";
import { chromium } from "playwright-core";

const require = createRequire(import.meta.url);
const AXE = await readFile(require.resolve("axe-core/axe.min.js"), "utf8");
const CHROME = process.env.CHROMIUM_PATH || "/opt/pw-browsers/chromium";
const PAGES = { home: "/", privacy: "/privacy/", "thank-you": "/thank-you/", "404": "/404.html" };
const TYPES = { ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript", ".woff2": "font/woff2", ".svg": "image/svg+xml", ".png": "image/png", ".xml": "application/xml", ".txt": "text/plain" };

// Local server. Vercel's analytics script only exists on Vercel, so serve an empty stand-in locally.
const server = createServer(async (req, res) => {
  let path = normalize(decodeURIComponent(new URL(req.url, "http://x").pathname)).replace(/^(\.\.[/\\])+/, "");
  if (path === "/_vercel/insights/script.js") { res.writeHead(200, { "content-type": "text/javascript" }); return res.end(""); }
  if (path.endsWith("/")) path += "index.html";
  try {
    const body = await readFile(join("dist", path));
    res.writeHead(200, { "content-type": TYPES[extname(path)] || "application/octet-stream", "cache-control": "public, max-age=31536000" });
    res.end(body);
  } catch {
    const body = await readFile("dist/404.html");
    res.writeHead(404, { "content-type": TYPES[".html"] });
    res.end(body);
  }
});
await new Promise((r) => server.listen(0, "127.0.0.1", r));
const base = `http://127.0.0.1:${server.address().port}`;

const results = { axe: {}, keyboard: {}, phone: {}, reducedMotion: {}, weight: {}, lighthouse: {} };
const failures = [];
const browser = await chromium.launch({ executablePath: CHROME });

for (const [name, path] of Object.entries(PAGES)) {
  // axe-core at two widths.
  for (const width of [375, 1440]) {
    const page = await browser.newPage({ viewport: { width, height: 900 } });
    await page.goto(base + path, { waitUntil: "networkidle" });
    await page.evaluate(() => document.querySelectorAll("details").forEach((d) => (d.open = true)));
    await page.addScriptTag({ content: AXE });
    const axe = await page.evaluate(() => window.axe.run(document, { runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"] } }));
    const v = axe.violations.map((x) => `${x.id}: ${x.help} (${x.nodes.length})`);
    results.axe[`${name}@${width}`] = v;
    if (v.length) failures.push(`axe ${name}@${width}: ${v.join("; ")}`);
    await page.close();
  }

  // Keyboard: tab through the page.
  {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await page.goto(base + path, { waitUntil: "networkidle" });
    const expected = await page.evaluate(() => [...document.querySelectorAll("a[href], button, summary")].filter((e) => e.offsetParent !== null).length);
    const seen = new Set();
    const noRing = [];
    for (let i = 0; i < expected + 3; i++) {
      await page.keyboard.press("Tab");
      const info = await page.evaluate(() => {
        const el = document.activeElement;
        if (!el || el === document.body) return null;
        const all = [...document.querySelectorAll("a[href], button, summary")];
        const cs = getComputedStyle(el);
        const ring = cs.outlineStyle !== "none" && parseFloat(cs.outlineWidth) >= 2;
        return { key: all.indexOf(el), ring, label: (el.textContent || "").trim().slice(0, 40) };
      });
      if (!info) continue;
      seen.add(info.key);
      if (!info.ring) noRing.push(info.label);
    }
    results.keyboard[name] = { focusable: expected, reached: seen.size, missingRing: noRing };
    if (seen.size < expected) failures.push(`keyboard ${name}: reached ${seen.size} of ${expected} controls`);
    if (noRing.length) failures.push(`keyboard ${name}: no visible focus ring on ${noRing.join(", ")}`);
    await page.close();
  }

  // Phone at 375 px.
  {
    const page = await browser.newPage({ viewport: { width: 375, height: 812 } });
    await page.goto(base + path, { waitUntil: "networkidle" });
    await page.evaluate(() => document.querySelectorAll("details").forEach((d) => (d.open = true)));
    const phone = await page.evaluate(() => {
      const overflow = document.documentElement.scrollWidth - window.innerWidth;
      const small = [];
      for (const el of document.querySelectorAll("a[href], button, summary")) {
        const r = el.getBoundingClientRect();
        if (!r.width || el.classList.contains("sr-only")) continue;
        // Inline links inside a sentence are exempt under WCAG 2.5.8; ours also get a 44 px hit area in CSS.
        const inline = el.classList.contains("link--inline");
        const hit = inline ? r.height + 28 : r.height;
        if (hit < 44) small.push(`"${el.textContent.trim().slice(0, 30)}" ${Math.round(hit)}px`);
      }
      const tiny = [];
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      let n;
      while ((n = walker.nextNode())) {
        if (!n.textContent.trim()) continue;
        const el = n.parentElement;
        if (el.closest(".sr-only") || !el.getClientRects().length) continue;
        const fs = parseFloat(getComputedStyle(el).fontSize);
        if (fs < 16) tiny.push(`${fs}px "${n.textContent.trim().slice(0, 30)}"`);
      }
      return { overflow, small, tiny };
    });
    results.phone[name] = phone;
    if (phone.overflow > 0) failures.push(`375 px ${name}: horizontal scroll ${phone.overflow}px`);
    if (phone.small.length) failures.push(`375 px ${name}: small tap targets ${phone.small.join(", ")}`);
    if (phone.tiny.length) failures.push(`375 px ${name}: text under 16 px ${phone.tiny.join(", ")}`);
    await page.close();
  }

  // Reduced motion.
  {
    const context = await browser.newContext({ reducedMotion: "reduce", viewport: { width: 1440, height: 900 } });
    const page = await context.newPage();
    await page.goto(base + path, { waitUntil: "networkidle" });
    const moving = await page.evaluate(() =>
      [...document.querySelectorAll("*")].filter((el) => {
        const cs = getComputedStyle(el);
        const t = cs.transitionDuration.split(",").some((d) => parseFloat(d) > 0);
        const a = cs.animationName !== "none" && cs.animationDuration.split(",").some((d) => parseFloat(d) > 0);
        return t || a;
      }).map((el) => el.className || el.tagName),
    );
    results.reducedMotion[name] = moving;
    if (moving.length) failures.push(`reduced motion ${name}: still moving: ${moving.slice(0, 5).join(", ")}`);
    await context.close();
  }
}

// Page weight for the home page, as a phone loads it.
{
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  let total = 0;
  let js = 0;
  const files = [];
  page.on("response", async (res) => {
    try {
      const body = await res.body();
      total += body.length;
      const type = res.headers()["content-type"] || "";
      if (type.includes("javascript")) js += body.length;
      files.push(`${new URL(res.url()).pathname} ${body.length}`);
    } catch {}
  });
  await page.goto(base + "/", { waitUntil: "networkidle" });
  await page.waitForTimeout(300);
  const html = await page.content();
  const inlineJs = [...html.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/g)].reduce((n, m) => n + m[1].length, 0);
  results.weight = { firstLoadKB: +(total / 1024).toFixed(1), jsKB: +((js + inlineJs) / 1024).toFixed(1), files };
  if (total > 500 * 1024) failures.push(`weight: first load ${results.weight.firstLoadKB} KB is over 500 KB`);
  if (js + inlineJs > 50 * 1024) failures.push(`weight: JavaScript ${results.weight.jsKB} KB is over 50 KB`);
  await page.close();
}
await browser.close();

// Lighthouse, mobile profile (its default).
const run = promisify(execFile);
const TARGET = { performance: 95, accessibility: 100, "best-practices": 95, seo: 100 };
for (const [name, path] of Object.entries(PAGES)) {
  if (name === "404") continue;
  const { stdout } = await run("npx", ["lighthouse", base + path, "--quiet", "--output=json", "--output-path=stdout", `--chrome-flags=--headless=new --no-sandbox`, "--only-categories=performance,accessibility,best-practices,seo"], { env: { ...process.env, CHROME_PATH: CHROME }, maxBuffer: 64 * 1024 * 1024 });
  const lh = JSON.parse(stdout);
  const scores = Object.fromEntries(Object.entries(lh.categories).map(([k, v]) => [k, Math.round(v.score * 100)]));
  const failed = Object.values(lh.audits).filter((a) => a.score !== null && a.score < 1 && a.scoreDisplayMode === "binary").map((a) => a.id);
  results.lighthouse[name] = { ...scores, failedAudits: failed };
  for (const [k, min] of Object.entries(TARGET)) {
    // Thank-you is noindex on purpose, so its SEO score is not held to 100.
    if (name === "thank-you" && k === "seo") continue;
    if (scores[k] < min) failures.push(`lighthouse ${name}: ${k} ${scores[k]} (target ${min}). Failed audits: ${failed.join(", ")}`);
  }
}
server.close();

await mkdir("docs/final", { recursive: true });
await writeFile("docs/final/audit.json", JSON.stringify({ date: new Date().toISOString().slice(0, 10), results, failures }, null, 2) + "\n");
console.log(JSON.stringify(results.lighthouse, null, 1));
console.log(`weight: first load ${results.weight.firstLoadKB} KB, JavaScript ${results.weight.jsKB} KB`);
console.log(failures.length ? `FAILURES (${failures.length}):\n` + failures.join("\n") : "All audit checks passed.");
process.exit(failures.length ? 2 : 0);
