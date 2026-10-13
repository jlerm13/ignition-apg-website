// Checks claims on the built site (dist/). Run after `npm run build`.
// 1. No percentages and no "X of Y" figures.
// 2. No digits except "30-minute" and the privacy page's "Last updated" date.
// 3. Every "What you can hand us" line on the page matches an approved Item in docs/MESSAGE.md section 3.
// 4. Every "What stays with your staff" line matches the confirmed rows in docs/BRIEF.md section 3.6, and all six appear.
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { X_OF_Y, TASK_ID } from "./rules.mjs";

const DIST = "dist";
const files = [];
(function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) { if (name !== "directions") walk(p); }
    else if (name.endsWith(".html")) files.push(p);
  }
})(DIST);

const decode = (s) => s.replace(/&amp;/g, "&").replace(/&#39;|&#x27;/g, "'").replace(/&quot;/g, '"').replace(/&nbsp;/g, " ");
const visible = (html) => decode(html.replace(/<script[\s\S]*?<\/script>/g, "").replace(/<style[\s\S]*?<\/style>/g, "").replace(/<[^>]+>/g, "\n"))
  .split("\n").map((l) => l.replace(/\s+/g, " ").trim()).filter(Boolean);
const claims = (html, kind) => [...html.matchAll(new RegExp(`<li[^>]*data-claim="${kind}"[^>]*>([\\s\\S]*?)</li>`, "g"))].map((m) => decode(m[1].replace(/<[^>]+>/g, "")).trim());

// Approved lines.
const message = readFileSync("docs/MESSAGE.md", "utf8");
const section3 = message.slice(message.indexOf("## 3. What you can hand us"), message.indexOf("## 4. What stays with your staff"));
const approvedHandUs = [...section3.matchAll(/^\| Item \| (.+?) \|$/gm)].map((m) => m[1]);
const brief = readFileSync("docs/BRIEF.md", "utf8");
const staysTable = brief.slice(brief.indexOf("What stays with your staff:"), brief.indexOf("Do not add items."));
const approvedStays = [...staysTable.matchAll(/^\| ([^|]+?) \| (?:APS|PDS)-/gm)].map((m) => m[1]);

const findings = [];
let handUsSeen = [];
let staysSeen = [];
for (const f of files) {
  const html = readFileSync(f, "utf8");
  const page = relative(DIST, f);
  for (const line of visible(html)) {
    if (/%/.test(line)) findings.push(`${page}: percentage: "${line}"`);
    if (X_OF_Y.test(line)) findings.push(`${page}: "X of Y" figure: "${line}"`);
    if (TASK_ID.test(line)) findings.push(`${page}: task ID on the page: "${line}"`);
    // Jake, 2026-10-13: we never say we "fix" a value. "Your staff should coach, not fix spreadsheets." is about staff, so it is allowed.
    for (const sentence of line.split(/(?<=[.?!])\s+/)) {
      if (/\b(we|our|your specialist|they)\b/i.test(sentence) && /\bfix(es|ing)?\b|\bfixed\b(?! monthly)/i.test(sentence)) findings.push(`${page}: says we "fix" a value: "${sentence}"`);
    }
    const digits = line.replace(/30-minute/g, "").replace(/ja\.lerman@ignitionapg\.com/g, "");
    if (/\d/.test(digits) && !/^Last updated: [A-Z][a-z]+ \d{1,2}, \d{4}$/.test(line)) findings.push(`${page}: number not allowed: "${line}"`);
  }
  handUsSeen = handUsSeen.concat(claims(html, "hand-us"));
  staysSeen = staysSeen.concat(claims(html, "stays"));
}

for (const line of handUsSeen) if (!approvedHandUs.includes(line)) findings.push(`"What you can hand us" line not in the approved sheet: "${line}"`);
for (const line of approvedHandUs) if (!handUsSeen.includes(line)) findings.push(`Approved "What you can hand us" line missing from the page: "${line}"`);
for (const line of staysSeen) if (!approvedStays.includes(line)) findings.push(`"What stays with your staff" line not in the brief: "${line}"`);
for (const line of approvedStays) if (!staysSeen.includes(line)) findings.push(`Confirmed "stays" line missing from the page: "${line}"`);
if (!approvedHandUs.length || approvedStays.length !== 6) findings.push(`Could not read the approved lists (hand us: ${approvedHandUs.length}, stays: ${approvedStays.length}).`);

console.log(`check-claims: ${files.length} pages. Hand-us lines: ${handUsSeen.length} of ${approvedHandUs.length} approved. Stays lines: ${staysSeen.length} of ${approvedStays.length} confirmed.`);
console.log(findings.length ? findings.join("\n") : "check-claims: no findings.");
process.exit(findings.length ? 2 : 0);
