# DESIGN.md: Spec sheet

Jake picked this direction at gate ★2 on 2026-10-12. It is based on the Hallmark Grid theme and adapted for Ignition APG. The source of truth for these values is `src/styles/global.css`. If the two disagree, fix the CSS to match this file or update this file with Jake's approval.

## Idea

The page looks like a specification: exact, ruled, and calm. A director who checks numbers for a living should see a company that checks numbers too. Bold Swiss type, near-white paper, ink, hairline rules, and one red signal used sparingly.

## Colour

| Token | Value | Use |
|---|---|---|
| `paper` | `oklch(99% 0.003 255)` | Page background. Never pure white. |
| `paper-2` | `oklch(97.2% 0.003 255)` | Quiet section bands. |
| `rule` | `oklch(88% 0.004 255)` | Hairlines. |
| `rule-2` | `oklch(72% 0.005 255)` | Stronger hairlines, the ruler. |
| `muted` | `oklch(48% 0.006 255)` | Secondary text. Passes AA on `paper`. |
| `neutral` | `oklch(34% 0.006 255)` | Body text in long lists. |
| `ink` | `oklch(16% 0.010 255)` | Headings, text, buttons, the dark band. Never pure black. |
| `ink-2` | `oklch(30% 0.010 255)` | Rules inside the dark band. (22% was invisible on ink, so Stage 4 set 30%.) |
| `on-ink` | `oklch(96% 0.003 255)` | Text on the dark band and on buttons. Also the one 2 px rule inside the dark band. |
| `on-ink-muted` | `oklch(78% 0.006 255)` | Secondary text on the dark band. Passes AA on `ink`. |
| `accent` | `oklch(55% 0.21 28)` | Signal red: small square markers, button hover, focus ring. At most about 5% of any screen. |

There is one accent. There are no gradients, no shadows, and no rounded corners.

## Type

- **One family:** Archivo Variable, self-hosted (Latin subset), weights 400 to 800. No serif, no mono, no font CDN.
- **Display (hero heading):** 800 weight, `clamp(2.75rem, 5vw + 2rem, 7rem)` (grows with browser zoom), line height 0.98, tracking -0.035em.
- **Section heading:** 800 weight, `clamp(1.75rem, 1.8vw + 1rem, 2.5rem)`, line height 1.08, tracking -0.02em.
- **Body:** 400 weight, 17 px. Lead text is 20 px. List items are 19 px.
- **Small text:** 16 px minimum on every screen size, including the hero label. The token is `text-small` (captions and the chain's owner labels).
- **Long words wrap** inside display text (`overflow-wrap: anywhere`).
- **Headings use sentence case.** No all-caps headings.

## Space and grid

- **Spacing scale:** 8, 12, 16, 24, 40, 64, and 104 px (`--space-xs` to `--space-3xl`). No other values.
- **Page width:** 80rem, with a gutter of `clamp(1rem, 4vw, 3rem)`.
- **Grid:** 12 columns, gap `clamp(0.75rem, 1.6vw, 1.5rem)`. Sections use the grid as "heading in columns 1 to 5, content in columns 7 to 12." On the home page, split sections are one column below 64rem (1024 px) and two columns from 64rem (layout check, 2026-10-13). Other pages and the How it starts steps switch at 52rem.
- **Ruler:** a 12-cell ruler at the top of the hero shows the grid. It appears once, in the hero only, and hides on phones.
- **Section padding:** 104 px top and bottom on desktop, 64 px on phones. In the hero, the bottom padding is at least 1.3 times the top padding.

## Components

| Component | Rules |
|---|---|
| Logo (Jake, 2026-10-15) | The Ignition Athletic Performance Group logo: the flame in its own red, yellow, and blue, and the lettering in site ink, not white or navy. It appears only in the header (44 px tall) and footer (48 px tall). The flame alone is the browser-tab and home-screen icon. The logo colours stay inside the logo and add nothing to the site palette. File: `public/logo-ignition-apg.png`, built from Jake's stacked logo. Swap in an SVG when Jake has one. |
| Header | Sticky, paper background, 2 px ink rule below, 72 px tall. Logo on the left, booking button on the right. On phones the header button hides, because the hero button sits directly below. |
| Button | Ink fill, on-ink text, 2 px ink border, square corners, 48 px tall (header button 44 px). Red on hover, neutral on press, red focus ring. The label never wraps. |
| Text link | Ink, underlined, red underline on hover. |
| Hero | Ruler, label with red square, display heading across columns 1 to 11. From 64rem: lead text in columns 1 to 5 (up to 1.5rem) and the role picker with the under-picker line in columns 7 to 12. The lead text sits under a 2 px ink rule and the picker under its progress bar (2026-10-16). Below 64rem: one rule, then text, then picker. The code order is text, picker, under-picker line. |
| Role picker (hero, 2026-10-16) | Three taps in the right column, under a progress bar of three 2 px segments (grey, then ink as you go, no numbers). Step one: the bold role question, a muted line, five full-width outlined choices (2 px ink border, paper fill, left-aligned, at least 48 px tall, wrapping onto a second line when the label is long), then a text link for other roles. Choices fill with ink on hover. Tapping a role shows step two in the same place: the problem question, a muted line, four choices plus "Something else", and a Back link. A problem choice shows step three: "Who handles that work today?" with six choices and a Back link. Focus moves to the new question each time. The last tap opens Calendly with the role, problem, and owner filled in. Without script, a role opens Calendly at once. It is not a quiz: no scoring, no result, no levels. |
| Problem rows | Heading left. Symptoms as rows with hairlines on the right, between 2 px ink rules. Below them the contrast: one bold line, then one neutral line (2026-11-13). No button here. |
| Sticky headings (2026-10-13) | From 64rem only, and only in Problem, the specialist section, and Who we are, where the right column is much longer. The left block pins 96 px from the top, under the header, and lets go at its section end. No script. |
| Outcome rows ("What changes for your staff", 2026-11-13) | A full-width block after the problem section. The heading is a small label (lead size, 800 weight). Three rows between 2 px ink rules, with hairlines between rows: the outcome at section-heading size in columns 1 to 6, its supporting line at lead size in columns 8 to 12. One column below 64rem. Then the booking button. It is the only place where a third-level heading is larger than its section heading, because the outcomes are the statement. |
| The chain ("One person owns your data work.", 2026-11-13) | Replaces the grouped list. On the quiet band. Heading left and two lead lines right (the first bold, the second neutral), then a figure across the grid: an ordered list of three parts. Each part has an owner label (16 px bold, the heading of its part), then small headings and text. The middle part ("Your performance data specialist") sits under an 8 px ink bar and holds four rows: the verb as a small heading and its one line, with hairlines between rows. From 40rem the verb sits left of its line (a 7rem column). **From 64rem:** the parts sit on one line in columns 1 to 3, 4 to 9, and 10 to 12. The two staff parts go quiet: a 2 px `rule-2` line and a muted owner label. A small arrowhead sits centred in each gutter, muted after the first part and ink after the middle. **Below 64rem:** the parts stack 64 px apart. The staff parts carry a 2 px ink rule and an ink owner label, and a 40 px stem with an arrowhead joins each part to the next, so the hand-back to the staff is plain (review, 2026-11-13). The caption "Illustration: the chain from devices to decisions." is muted 16 px text, under a hairline from 64rem. No numbers, no icons, no fills. Then the closing line in bold. |
| Specialist section (2026-10-13) | Heading and two short paragraphs left (2026-11-13).  On the right, two groups under 2 px ink rules: "Who your performance data specialist is" (plain list) and "A week with your performance data specialist" (ordered list, hairline between rows, no visible numerals). No photos, avatars, faces, or icons. |
| Ink band ("We handle the data work") | The one dark section. Heading and text left on ink. On the right, the small heading "What stays with your staff" over six items in two columns, each with an `ink-2` hairline above it. Below both, under a 2 px `on-ink` rule (the ink rule, inverted), the small heading "What we are not" and three rows, each with an `ink-2` hairline above it: a bold label at list-item size in columns 1 to 5 and its sentence in columns 7 to 12, on one baseline (2026-11-13). One column below 64rem. |
| Step columns ("Find the first workflow we could own. Free.") | Three columns divided by vertical hairlines. Titles carry the order, with no numerals. The closing line sits under a rule. Then a booking button, so phone visitors can book at the moment they decide. The other mid-page button sits under the outcome rows (2026-11-13). Stacks to rows on phones. |
| Questions | Heading left. On the right, native `<details>` rows divided by hairlines, all closed on load (Jake, 2026-10-13). Each summary is at least 56 px tall with a "+" or "−" marker as text, the red focus ring, and hover and press styles. Answers stay in the page HTML. |
| Who we are | Heading left (sticky from 64rem), five short paragraphs right (Jake, 2026-10-13). |
| Final call to action | A large section heading, the button, then the email line. |
| Footer | Logo, Privacy link, and Email us on one line, with a hairline above. It sits at the bottom of short pages. |
| Thank-you, privacy, and 404 pages | The same header and footer. One column of text in columns 1 to 8, aligned with the header. The thank-you page has no booking button, because the visitor just booked. |

## States and motion

- Email addresses never break across lines.
- "return-to-play" never breaks at its hyphens.
- Every link and button has hover, focus-visible, and active styles. The focus ring is a 2 px red outline with a 3 px offset. It appears instantly.
- Motion is limited to colour changes of 160 ms on hover.
- `prefers-reduced-motion` turns off all transitions. Taste Skill dials: 6 / 3 / 4.

## Taken from the reference screenshots Jake shared, and left out

**Taken (rebuilt in this theme):**
- One deep ink band among light sections, used for "We handle the data work. Your staff keep the judgment."
- Steps in columns divided by vertical hairlines.
- Heading on the left and a grouped list on the right.
- A FAQ with the heading left and the questions right.
- A slim sticky header with one button.

**Left out:**
- A serif display with italic emphasis words.
- Low-contrast gold buttons.
- Stock photos of people, testimonials, statistics, "trusted by" counts, compliance badges, and logos. The hard rules ban these.
- A lead form in the hero.
- A quiz and maturity levels.
- A photo band behind the call to action.
- A giant wordmark footer.
- A label above every section heading.

**Later, needs new copy and Jake's approval:**
- A comparison table: our performance data specialist against hiring an analyst or buying more software.
