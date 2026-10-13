// Copy check for docs/MESSAGE.md (Stage 1 and gate 1). Run: node scripts/check-message.mjs docs/MESSAGE.md
// It reads the tables between the copy:start and copy:end markers. Stage 3 adds check-copy.mjs and check-claims.mjs for the built site.
import { readFileSync } from "node:fs";
import { BANNED as banned, CONTRACTION as contraction, X_OF_Y as xOfY } from "./rules.mjs";
const file = process.argv[2];
const all = readFileSync(file, "utf8");
const m = all.match(/<!-- copy:start -->([\s\S]*?)<!-- copy:end -->/);
if (!m) { console.error("no copy markers"); process.exit(1); }
const SHORT = /^(Heading|Subheading|Button|Role button|Prompt|Label|Name|Link|Group|Step \d title|Page title|Question)$/;
const findings = []; let jake = 0; let rows = 0; let basisCount = 0;
for (const line of m[1].split("\n")) {
  const r = line.match(/^\|\s*([^|]+?)\s*\|\s*([^|]*?)\s*\|$/);
  if (!r || r[1] === "Element" || /^-+$/.test(r[1])) continue;
  rows++;
  const [ , el, copy0] = r;
  jake += (copy0.match(/\[JAKE:[^\]]*\]/g) || []).length;
  const copy = copy0.replace(/\[JAKE:[^\]]*\]/g, "X");
  const where = `${el}: "${copy0.slice(0, 60)}"`;
  if (/;/.test(copy)) findings.push(`semicolon  ${where}`);
  if (/[—–]|\s-\s/.test(copy)) findings.push(`dash  ${where}`);
  if (contraction.test(copy)) findings.push(`contraction  ${where}`);
  if (/%/.test(copy)) findings.push(`percent  ${where}`);
  if (xOfY.test(copy)) findings.push(`X of Y  ${where}`);
  for (const d of copy.match(/\d+(?:[-\s]\w+)?/g) || []) if (!/^30-minute$/.test(d) && !/^Last updated:/.test(copy)) findings.push(`number "${d}"  ${where}`);
  // Gate 1 (Jake, 2026-10-12): no personal name on the site. BASIS appears once, in an Answer row only.
  if (/\bJake\b/.test(copy)) findings.push(`name "Jake" in page copy  ${where}`);
  const basis = (copy.match(/\bBASIS\b/g) || []).length;
  basisCount += basis;
  if (basis && el !== "Answer") findings.push(`"BASIS" outside an Answer row  ${where}`);
  const low = copy.toLowerCase();
  for (const b of banned) if (new RegExp(`(^|[^a-z])${b.replace(/[-]/g, "[- ]?")}([^a-z]|$)`).test(low)) findings.push(`banned "${b}"  ${where}`);
  const words = (s) => s.split(/\s+/).filter((w) => /[A-Za-z0-9]/.test(w)).length;
  if (SHORT.test(el) && words(copy) > 20) findings.push(`heading/button over 20 words (${words(copy)})  ${where}`);
  for (const s of copy.split(/(?<=[.?!])\s+/)) if (words(s) > 25) findings.push(`sentence over 25 words (${words(s)})  "${s}"`);
}
if (basisCount > 1) findings.push(`"BASIS" appears ${basisCount} times. The limit is once.`);
const ids = all.match(/\b(PDS|APS)-W\d+-T\d+\b/g);
if (ids) findings.push(`task IDs in file: ${ids.join(", ")}`);
console.log(`rows checked: ${rows}, [JAKE:] slots: ${jake}`);
console.log(findings.length ? findings.join("\n") : "no findings");
process.exit(findings.length ? 2 : 0);
