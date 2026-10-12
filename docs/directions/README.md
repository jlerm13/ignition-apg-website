# Stage 2: four design directions

Each direction shows the hero and the problem section with the approved words from `src/content/site.ts`. The screenshots in this folder are at 1440 px (desktop) and 390 px (phone).

- Pages in the project: `src/pages/directions/`. With Vercel linked, one preview link opens all four at `/directions/`.
- Rebuild the screenshots with `npm run build`, then `npm run shots:directions`.
- Every direction was checked for sideways scrolling at both widths. None was found.

## 1. Ledger

Hallmark theme Almanac, split layout. Screenshots: `ledger-1440.png`, `ledger-390.png`.

Cool blue-grey paper, a plain sans serif, and a monospaced label face. Next to the heading, a small table shows who does what. The data team collects, checks, connects, and explains. A heavy rule separates the last row: every decision stays with coaches and clinicians. A Director of Sports Science judging trust sees the limit before reading a word of copy. The look is an audit record: careful, checked, and calm.

New words to approve: the table uses short labels taken from approved lines ("Work", "Owner", "Data team", "Every decision", "Coaches and clinicians"). If you pick this direction, approve these labels or tell me to change them.

## 2. Briefing

Hallmark theme Specimen, long document. Screenshots: `briefing-1440.png`, `briefing-390.png`.

Warm paper, a light serif heading, and one reading column set right of centre. The page reads like a written memo to a director, with hairline rules and no boxes. It suits a reader who trusts a clear argument more than a product page. It also feels the least like a software vendor, which answers the "another software contract" fear.

## 3. Spec sheet

Hallmark theme Grid, marquee hero. Screenshots: `spec-sheet-1440.png`, `spec-sheet-390.png`.

Near-white paper, a heavy Swiss sans serif, and a 12-column ruler at the top of the page. The heading fills the first screen. The problem section reads like a specification table. It looks exact and engineered, which fits a buyer who checks numbers for a living. It is the boldest of the four.

## 4. Service

Hallmark theme Coral, two columns. Screenshots: `service-1440.png`, `service-390.png`.

Warm grey paper, one clean sans serif, rounded buttons, and one soft panel for the symptoms. It looks like a calm, modern service company. It is the most familiar of the four, so it asks the least of the visitor, and it is also the least distinctive.

## Shared across all four

- Only the approved words, plus the four Ledger table labels noted above.
- No photos, logos, statistics, testimonials, or dashboards.
- One accent colour, used on less than a few percent of the screen.
- Buttons are 44 px or taller.
- Text is 16 px or larger on phones. The one exception is the small label above the heading (13 to 14 px), which Stage 3 fixes for the chosen direction.
- No motion beyond a short colour change on hover. It stops when the visitor asks for reduced motion.
- On phones, the header button hides, because the same button sits directly below the heading.

## Your choice

Pick one, or ask for a mix. A mix example: "Ledger's who-does-what table on the Briefing's warm paper." After you pick, I write `docs/DESIGN.md` for that direction.
