// Renders the share image (public/og.png, 1200x630) from real copy in the Spec sheet design.
// Run: node scripts/make-og.mjs   (uses the preinstalled Chromium; no network needed)
import { readFile } from "node:fs/promises";
import { chromium } from "playwright-core";

const src = await readFile("src/content/site.ts", "utf8");
const pick = (re) => (src.match(re) || [])[1];
const name = pick(/name: "([^"]+)"/);
const heading = pick(/heading: "(Athlete data[^"]+)"/);
const label = pick(/label: "([^"]+)"/);
const font = (await readFile("node_modules/@fontsource-variable/archivo/files/archivo-latin-wght-normal.woff2")).toString("base64");

const html = `<!doctype html><html><head><style>
@font-face{font-family:Archivo;src:url(data:font/woff2;base64,${font}) format("woff2");font-weight:100 900}
*{box-sizing:border-box;margin:0}
body{width:1200px;height:630px;background:oklch(99% 0.003 255);color:oklch(16% 0.010 255);font-family:Archivo,sans-serif;padding:56px 64px;display:flex;flex-direction:column}
.ruler{display:grid;grid-template-columns:repeat(12,1fr);gap:16px;height:12px}
.ruler span{border-left:1px solid oklch(72% 0.005 255);border-top:1px solid oklch(72% 0.005 255)}
.ruler span:last-child{border-right:1px solid oklch(72% 0.005 255)}
.label{margin-top:56px;font-weight:700;font-size:26px;display:flex;align-items:center;gap:14px}
.label:before{content:"";width:16px;height:16px;background:oklch(55% 0.21 28)}
h1{margin-top:28px;font-weight:800;font-size:112px;line-height:.96;letter-spacing:-.035em;max-width:1000px}
.foot{margin-top:auto;border-top:3px solid oklch(16% 0.010 255);padding-top:18px;font-weight:800;font-size:30px;letter-spacing:-.01em}
</style></head><body>
<div class="ruler">${"<span></span>".repeat(12)}</div>
<p class="label">${label}</p>
<h1>${heading}</h1>
<p class="foot">${name}</p>
</body></html>`;

const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || "/opt/pw-browsers/chromium" });
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.setContent(html, { waitUntil: "load" });
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: "public/og.png" });
await browser.close();
console.log("Saved public/og.png");
