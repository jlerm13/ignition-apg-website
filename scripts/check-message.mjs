// Copy check for docs/MESSAGE.md (Stage 1 and gate 1). Run: node scripts/check-message.mjs docs/MESSAGE.md
// It reads the tables between the copy:start and copy:end markers. Stage 3 adds check-copy.mjs and check-claims.mjs for the built site.
import { readFileSync } from "node:fs";
const file = process.argv[2];
const all = readFileSync(file, "utf8");
const m = all.match(/<!-- copy:start -->([\s\S]*?)<!-- copy:end -->/);
if (!m) { console.error("no copy markers"); process.exit(1); }
const SHORT = /^(Heading|Button|Label|Name|Link|Group|Step \d title|Page title|Question)$/;
const banned = ["unlock","revolutionize","revolutionise","cutting-edge","seamless","seamlessly","game-changer","elevate","empower","next-level","world-class","best-in-class","powerful","robust","leverage","insights","insight","ai-powered","dedicated",
  "readiness score","predict","predicts","prediction","injury prevention","optimize load","optimise load","real-time","real time","integrates with","automatic sync","automatic","automatically",
  "athena","palantir","ferpa","hipaa","soc 2","gdpr","compliant","compliance","wellness","questionnaire","custom report","custom reports","trusted by","testimonial"];
const contraction = /\b(\w+n['’]t|\w+['’](re|ve|ll|d|m)|(it|that|there|what|here|let|he|she|who|where|how)['’]s)\b/i;
const numWord = "(\\d+|one|two|three|four|five|six|seven|eight|nine|ten)";
const xOfY = new RegExp(`\\b${numWord}\\s+(of|in|out of)\\s+${numWord}\\b`, "i");
const findings = []; let jake = 0; let rows = 0;
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
  for (const d of copy.match(/\d+(?:[-\s]\w+)?/g) || []) if (!/^20-minute$/.test(d)) findings.push(`number "${d}"  ${where}`);
  // Gate 1 (Jake, 2026-10-12): no software name and no personal name on the site.
  for (const name of ["BASIS", "Jake"]) if (new RegExp(`\\b${name}\\b`).test(copy)) findings.push(`name "${name}" in page copy  ${where}`);
  const low = copy.toLowerCase();
  for (const b of banned) if (new RegExp(`(^|[^a-z])${b.replace(/[-]/g, "[- ]?")}([^a-z]|$)`).test(low)) findings.push(`banned "${b}"  ${where}`);
  const words = (s) => s.split(/\s+/).filter((w) => /[A-Za-z0-9]/.test(w)).length;
  if (SHORT.test(el) && words(copy) > 20) findings.push(`heading/button over 20 words (${words(copy)})  ${where}`);
  for (const s of copy.split(/(?<=[.?!])\s+/)) if (words(s) > 25) findings.push(`sentence over 25 words (${words(s)})  "${s}"`);
}
const ids = all.match(/\b(PDS|APS)-W\d+-T\d+\b/g);
if (ids) findings.push(`task IDs in file: ${ids.join(", ")}`);
console.log(`rows checked: ${rows}, [JAKE:] slots: ${jake}`);
console.log(findings.length ? findings.join("\n") : "no findings");
process.exit(findings.length ? 2 : 0);
