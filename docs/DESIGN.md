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
| `on-ink` | `oklch(96% 0.003 255)` | Text on the dark band and on buttons. |
| `on-ink-muted` | `oklch(78% 0.006 255)` | Secondary text on the dark band. Passes AA on `ink`. |
| `accent` | `oklch(55% 0.21 28)` | Signal red: small square markers, button hover, focus ring. At most about 5% of any screen. |

There is one accent. There are no gradients, no shadows, and no rounded corners.

## Type

- **One family:** Archivo Variable, self-hosted (Latin subset), weights 400 to 800. No serif, no mono, no font CDN.
- **Display (hero heading):** 800 weight, `clamp(2.75rem, 5vw + 2rem, 7rem)` (grows with browser zoom), line height 0.98, tracking -0.035em.
- **Section heading:** 800 weight, `clamp(1.75rem, 1.8vw + 1rem, 2.5rem)`, line height 1.08, tracking -0.02em.
- **Body:** 400 weight, 17 px. Lead text is 20 px. List items are 19 px.
- **Small text:** 16 px minimum on every screen size, including the hero label.
- **Long words wrap** inside display text (`overflow-wrap: anywhere`).
- **Headings use sentence case.** No all-caps headings.

## Space and grid

- **Spacing scale:** 8, 12, 16, 24, 40, 64, and 104 px (`--space-xs` to `--space-3xl`). No other values.
- **Page width:** 80rem, with a gutter of `clamp(1rem, 4vw, 3rem)`.
- **Grid:** 12 columns, gap `clamp(0.75rem, 1.6vw, 1.5rem)`. Sections use the grid as "heading in columns 1 to 5, content in columns 7 to 12." Below 52rem everything is one column.
- **Ruler:** a 12-cell ruler at the top of the hero shows the grid. It appears once, in the hero only, and hides on phones.
- **Section padding:** 104 px top and bottom on desktop, 64 px on phones. In the hero, the bottom padding is at least 1.3 times the top padding.

## Components

| Component | Rules |
|---|---|
| Header | Sticky, paper background, 2 px ink rule below. Name on the left, booking button on the right. On phones the header button hides, because the hero button sits directly below. |
| Button | Ink fill, on-ink text, 2 px ink border, square corners, 48 px tall (header button 44 px). Red on hover, neutral on press, red focus ring. The label never wraps. |
| Text link | Ink, underlined, red underline on hover. |
| Hero | Ruler, label with red square, display heading across columns 1 to 11, then lead text, the role picker, and the under-button line in columns 7 to 12 under a 2 px ink rule. |
| Role picker (hero, 2026-10-13) | The prompt in bold, then five full-width outlined choices (2 px ink border, paper fill, left-aligned label, 48 px tall) that fill with ink on hover. Then a text link for other roles. Each choice opens Calendly with the role prefilled. Labels stay on one line down to 320 px. |
| Problem rows | Heading left. Symptoms as rows with hairlines on the right. The closing line in bold, between 2 px ink rules. The department message below it in neutral. |
| Grouped list ("What you can hand us") | Heading and text left. Four groups on the right, each under a 2 px ink rule with the verb as a small heading. No markers. It mirrors the ink band, light then dark. |
| Specialist section (2026-10-13) | Heading and text left. On the right, two groups under 2 px ink rules: "Who your data specialist is" (plain list) and "A week with your data specialist" (ordered list, hairline between rows, no visible numerals). No photos, avatars, faces, or icons. |
| Ink band ("We handle the data work") | The one dark section. Heading left on ink, six items in two columns on the right, each item with a hairline above it. |
| Step columns ("How it starts. Free.") | Three columns divided by vertical hairlines. Titles carry the order, with no numerals. The closing line sits under a rule. Then the booking button: the one mid-page button, so phone visitors can book at the moment they decide. Stacks to rows on phones. |
| Questions | Heading left. On the right, native `<details>` rows divided by hairlines, all closed on load (Jake, 2026-10-13). Each summary is at least 56 px tall with a "+" or "−" marker as text, the red focus ring, and hover and press styles. Answers stay in the page HTML. |
| Who we are | Heading left, two short paragraphs right. |
| Final call to action | A large section heading, the button, then the email line. |
| Footer | Name, Privacy link, and Email us on one line, with a hairline above. It sits at the bottom of short pages. |
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
