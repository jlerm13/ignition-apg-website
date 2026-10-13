// Checks the copy rules on the built site (dist/). Run after `npm run build`.
// Exit code 2 means findings.
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { styleFindings } from "./rules.mjs";

const DIST = "dist";
const files = [];
(function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) { walk(p); }
    else if (name.endsWith(".html")) files.push(p);
  }
})(DIST);

const decode = (s) => s
  .replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
  .replace(/&quot;/g, '"').replace(/&#39;|&#x27;/g, "'").replace(/&#(\d+);/g, (_, n) => String.fromCharCode(n));
const text = (html) => decode(html.replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();

/** Pull the visible copy blocks out of one page. */
export function copyBlocks(html) {
  const body = html.replace(/<script[\s\S]*?<\/script>/g, "").replace(/<style[\s\S]*?<\/style>/g, "");
  const blocks = [];
  const title = body.match(/<title>([\s\S]*?)<\/title>/);
  if (title) blocks.push({ tag: "title", text: text(title[1]), short: true });
  const desc = body.match(/<meta name="description" content="([^"]*)"/);
  if (desc) blocks.push({ tag: "meta description", text: decode(desc[1]) });
  const re = /<(h[1-6]|p|li|summary|a)\b([^>]*)>([\s\S]*?)<\/\1>/g;
  let m;
  while ((m = re.exec(body))) {
    const t = text(m[3]);
    if (!t) continue;
    const short = /^h[1-6]$/.test(m[1]) || m[1] === "summary" || (m[1] === "a" && /\bbtn\b/.test(m[2]));
    blocks.push({ tag: m[1], text: t, short });
  }
  return blocks;
}

const findings = [];
let basis = 0;
let checked = 0;
for (const f of files) {
  const seen = new Set();
  for (const b of copyBlocks(readFileSync(f, "utf8"))) {
    if (seen.has(b.text)) continue; // nested tags repeat text (an a inside a p)
    seen.add(b.text);
    checked++;
    basis += (b.text.match(/\bBASIS\b/g) || []).length;
    for (const problem of styleFindings(b.text, { short: b.short })) findings.push(`${relative(DIST, f)} <${b.tag}> ${problem}: "${b.text.slice(0, 70)}"`);
  }
}
if (basis > 1) findings.push(`"BASIS" appears ${basis} times on the site. The limit is once.`);
console.log(`check-copy: ${files.length} pages, ${checked} copy blocks checked.`);
console.log(findings.length ? findings.join("\n") : "check-copy: no findings.");
process.exit(findings.length ? 2 : 0);
