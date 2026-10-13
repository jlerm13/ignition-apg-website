// Full-page screenshots of the built site. Run after `npm run build`.
//   node scripts/screenshots.mjs -> site pages to docs/final/
// Serves dist/ locally (no network needed) and reports any horizontal scroll.
import { createServer } from "node:http";
import { readFile, mkdir } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { chromium } from "playwright-core";

const SETS = {
  build: {
    out: "docs/final",
    pages: { home: "/", privacy: "/privacy/", "thank-you": "/thank-you/", "404": "/404.html" },
    widths: [1440, 390, 375],
  },
};
const set = SETS[process.argv[2] || "build"];
const TYPES = { ".html": "text/html", ".css": "text/css", ".js": "text/javascript", ".woff2": "font/woff2", ".svg": "image/svg+xml", ".png": "image/png", ".xml": "application/xml", ".txt": "text/plain" };

const server = createServer(async (req, res) => {
  let path = normalize(decodeURIComponent(new URL(req.url, "http://x").pathname)).replace(/^(\.\.[/\\])+/, "");
  if (path.endsWith("/")) path += "index.html";
  try {
    const body = await readFile(join("dist", path));
    res.writeHead(200, { "content-type": TYPES[extname(path)] || "application/octet-stream" });
    res.end(body);
  } catch {
    res.writeHead(404);
    res.end("not found");
  }
});
await new Promise((r) => server.listen(0, "127.0.0.1", r));
const base = `http://127.0.0.1:${server.address().port}`;

const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || "/opt/pw-browsers/chromium" });
await mkdir(set.out, { recursive: true });
const problems = [];
let count = 0;
for (const [name, path] of Object.entries(set.pages)) {
  for (const width of set.widths) {
    const page = await browser.newPage({ viewport: { width, height: width < 500 ? 844 : 900 }, deviceScaleFactor: width < 500 ? 2 : 1 });
    await page.goto(base + path, { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);
    // Show one question open, as it looks after a tap.
    await page.evaluate(() => { const d = document.querySelector(".faq details"); if (d) d.open = true; });
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    if (overflow > 0) problems.push(`${name} @ ${width}px: horizontal scroll of ${overflow}px`);
    if (width !== 375) {
      await page.screenshot({ path: `${set.out}/${name}-${width}.png`, fullPage: true });
      count++;
    }
    await page.close();
  }
}
await browser.close();
server.close();
console.log(`Saved ${count} screenshots to ${set.out}/`);
console.log(problems.length ? problems.join("\n") : `No horizontal scroll at ${set.widths.join(", ")} px.`);
process.exit(problems.length ? 2 : 0);
