// Screenshots of the Stage 2 directions at 1440 px and 390 px wide.
// Run after `npm run build`: node scripts/screenshot-directions.mjs
// Serves dist/ locally, so no network access is needed. Saves to docs/directions/.
import { createServer } from "node:http";
import { readFile, mkdir } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { chromium } from "playwright-core";

const DIST = "dist";
const OUT = "docs/directions";
const DIRECTIONS = ["ledger", "briefing", "spec-sheet", "service"];
const WIDTHS = [
  { name: "1440", width: 1440, height: 900 },
  { name: "390", width: 390, height: 844 },
];
const TYPES = { ".html": "text/html", ".css": "text/css", ".js": "text/javascript", ".woff2": "font/woff2", ".woff": "font/woff", ".svg": "image/svg+xml", ".png": "image/png" };

const server = createServer(async (req, res) => {
  let path = normalize(decodeURIComponent(new URL(req.url, "http://x").pathname)).replace(/^(\.\.[/\\])+/, "");
  if (path.endsWith("/")) path += "index.html";
  try {
    const body = await readFile(join(DIST, path));
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
await mkdir(OUT, { recursive: true });
const problems = [];
for (const d of DIRECTIONS) {
  for (const w of WIDTHS) {
    const page = await browser.newPage({ viewport: { width: w.width, height: w.height }, deviceScaleFactor: w.width < 500 ? 2 : 1 });
    await page.goto(`${base}/directions/${d}/`, { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    if (overflow > 0) problems.push(`${d} @ ${w.name}px: horizontal scroll of ${overflow}px`);
    await page.screenshot({ path: `${OUT}/${d}-${w.name}.png`, fullPage: true });
    await page.close();
  }
}
await browser.close();
server.close();
console.log(`Saved ${DIRECTIONS.length * WIDTHS.length} screenshots to ${OUT}/`);
console.log(problems.length ? problems.join("\n") : "No horizontal scroll at any width.");
