// Copy and claim rules shared by check-message.mjs, check-copy.mjs, and check-claims.mjs.
// Source: CLAUDE.md (hard rules, copy rules, Jake's gate 1 changes).

export const BANNED = [
  "unlock", "revolutionize", "revolutionise", "cutting-edge", "seamless", "seamlessly", "game-changer", "elevate", "empower",
  "next-level", "world-class", "best-in-class", "powerful", "robust", "leverage", "insights", "insight", "ai-powered", "dedicated",
  "readiness score", "predict", "predicts", "prediction", "injury prevention", "optimize load", "optimise load", "real-time", "real time",
  "integrates with", "automatic sync", "automatic", "automatically",
  "athena", "palantir", "ferpa", "hipaa", "soc 2", "gdpr", "compliant", "compliance", "wellness", "questionnaire", "questionnaires",
  "custom report", "custom reports", "trusted by", "testimonial", "testimonials", "forward deployed", "hire", "data team",
];

export const CONTRACTION = /\b(\w+n['’]t|\w+['’](re|ve|ll|d|m)|(it|that|there|what|here|let|he|she|who|where|how)['’]s)\b/i;
const NUM = "(\\d+|one|two|three|four|five|six|seven|eight|nine|ten)";
export const X_OF_Y = new RegExp(`\\b${NUM}\\s+(of|in|out of)\\s+${NUM}\\b`, "i");
export const TASK_ID = /\b(PDS|APS)-W\d+-T\d+\b/;

export const words = (s) => s.split(/\s+/).filter((w) => /[A-Za-z0-9]/.test(w)).length;
export const sentences = (s) => s.split(/(?<=[.?!])\s+/);

export function bannedIn(text) {
  const low = text.toLowerCase();
  return BANNED.filter((b) => new RegExp(`(^|[^a-z])${b.replace(/-/g, "[- ]?")}([^a-z]|$)`).test(low));
}

/** Style findings for one piece of page copy. `short` marks headings and buttons (20-word limit). */
export function styleFindings(text, { short = false } = {}) {
  const out = [];
  if (/;/.test(text)) out.push("semicolon");
  if (/[—–]|\s-\s/.test(text)) out.push("dash");
  if (CONTRACTION.test(text)) out.push("contraction");
  for (const b of bannedIn(text)) out.push(`banned word "${b}"`);
  if (short && words(text) > 20) out.push(`heading or button over 20 words (${words(text)})`);
  for (const s of sentences(text)) if (words(s) > 25) out.push(`sentence over 25 words (${words(s)}): "${s}"`);
  if (/\[(JAKE:|set at launch)/.test(text)) out.push("placeholder left in copy");
  if (/\bJake\b/.test(text)) out.push('name "Jake" in page copy');
  return out;
}
