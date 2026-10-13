# Stage 4 audit report

Date: 2026-10-12. Raw numbers are in `docs/final/audit.json` (made by `node scripts/audit.mjs`). Screenshots are in this folder at 1440 px and 390 px.

| # | Check | Result | What changed |
|---|---|---|---|
| 1 | Kill AI Slop scanner | **Pass.** 0 findings on the built site. 2 source hits marked intentional, with reasons: link underlines are on real links only, and the step list is three sentence-case steps, not a card grid. | Removed a decorative dot (Stage 2). Marked the 2 false positives. |
| 2 | `hallmark audit` | **Fixed.** 1 critical, 4 major, 13 minor before fixes. All actionable items are fixed. 2 minor items conflict with the approved DESIGN.md and stay as they are: neutral greys with very low colour tint, and equal section padding. | Corrected the design stamp. Brought three sections back to DESIGN.md's layout. Stopped the email address from breaking. Set the dark-band rule colour in DESIGN.md to match the build. Put footer spacing on the scale. Added hover and press styles to the name link. Removed an unused button style. Widened short text blocks. Tightened the link underline. Kept the footer at the bottom of short pages. |
| 3 | Impeccable audit, critique, polish | **Audit 18/20 (Excellent).** Accessibility 4, performance 4, theming 3 (light only by design, one colour code in a meta tag), responsive 4, integrity 3. **Critique 23/32 (Good)** before fixes, from two independent reviewers. The design review and the evidence check did not see each other's work. Impeccable's own detector was not used, by Jake's decision. The project's scanners stood in. | The polish pass applied the critique's priority fixes. Added a booking button after "How it starts." "What you can hand us" now mirrors the dark section. Questions now show all answers. "Who we are" now has a normal heading and body. "return-to-play" no longer breaks at its hyphens. The thank-you page no longer offers booking again. |
| 4 | Lighthouse, phone profile | **Pass.** Home and privacy: Performance 100, Accessibility 100, Best Practices 100, SEO 100. The thank-you page is hidden from search on purpose, so its SEO score (66) is expected. | None needed. |
| 5 | axe-core and WCAG 2.2 AA contrast | **Pass.** 0 violations on all 4 pages at 375 px and 1440 px. Lowest text contrast is 6.0 to 1 (AA needs 4.5 to 1). The focus ring is 5.3 to 1 on paper. | None needed. |
| 6 | Keyboard only | **Pass.** Every link and button is reached with Tab on all 4 pages. Each shows a 2 px red focus ring. A skip link goes straight to the content. | None needed. |
| 7 | At 375 px | **Pass.** No sideways scroll (also checked from 320 px to 1920 px). Tap targets are 44 px or more. Inline email links get a 44 px tap area. All text is 16 px or more. | Header button text raised from 15 px to 16 px. Email tap area enlarged. |
| 8 | Reduced motion | **Pass.** No transitions or animations remain when the visitor asks for reduced motion. | None needed. |
| 9 | Page weight | **Pass.** First load is 63 KB (limit 500 KB). JavaScript is 0.5 KB (limit 50 KB). | Tailwind limited to the site's own files (the stylesheet went from 41 KB to 15 KB). |
| 10 | `check-copy.mjs` and `check-claims.mjs` | **Pass.** 0 findings. All 5 "What you can hand us" lines match the approved sheet. All 6 "stays with your staff" lines match the brief. Both scripts were tested on planted errors and caught them. | Added plural forms to the banned-word list. |
| 11 | Test booking reaches the thank-you page and fires `booking_completed` | **Not done yet.** Vercel is not linked, so there is no live address for Calendly's redirect, and this work environment cannot reach Calendly. | Jake runs the test after linking Vercel and setting the redirect (`docs/BOOKING.md`, step 4). |

## Not tested here

- **Other browsers and devices:** only Chromium was available. Safari, Firefox, and real phones are untested. Jake checks the Vercel preview on his own phone in Stage 5.
- **Live analytics:** the analytics script exists only on Vercel. Page views start counting once the site is deployed with Web Analytics turned on.

## Questions for Jake (wording, needs his approval)

1. **Login wording.** "No new login is needed to ask a question" sits on the page. The "What do we get?" answer says "Your staff log in to our platform to see the results." Both are true, but a quick reader may see a contradiction. One option: "Staff ask questions by email, Slack, or text. They see results on our platform."
2. **Step 3 title.** The steps are "A 20-minute call" and "A review of one export", then "What we found." A matching title would be "A written summary."
3. **Data storage.** Is there one plain fact about where athlete files are stored that you can state? It would strengthen "How do you protect athlete data?" No compliance names without proof.
4. **Sample data screenshot.** A screenshot from the BASIS demo school, labelled "Sample data", would show directors what they get. Send one if you want it on the page.

## Layout check (Impeccable audit and layout guides, 2026-10-13)

Asked by Jake after his review of the preview. Impeccable was used as instructions only. Its detector was not run. A second opinion from another reviewer was weighed, and Jake approved the revised plan. Measured in Chromium.

| Finding | Before | After |
|---|---|---|
| Hero left half empty under the heading | All text and buttons in the right half. Hero 1,066 px tall at 1440 px. | Text left, role picker right. Hero 955 px tall at 1440 px (about 110 px shorter at every size). |
| Role buttons on the first screen | Last button below the fold at 1440 × 900. | All five show at 1440 × 900 and 1680 × 1000. At 1366 × 768 and 1280 × 720 the last one or two still sit just below the fold. |
| Long sections leave the left column empty | Heading scrolls away while its list is read. | In Problem, What you can hand us, and One person owns your data work, the heading stays in view from 1024 px up. It stays clear of the header and lets go inside its own section (checked at 1440 × 900, 1366 × 768, 1280 × 720, 1024 × 768). |
| Tablet squeeze | Two columns of 312 px and 377 px at 834 px. Page 7,170 px tall. | One column below 1024 px. Page 6,857 px tall at 834 px. Other pages unchanged. |
| Uneven section end | 24 px extra under "What you can hand us". | Removed. |

Checks after the change: copy, claims, and message checks pass. axe 0 violations, keyboard pass, no sideways scroll (1440, 390, 375 px, and 720 px for 200% zoom), reduced motion pass, Lighthouse 100 on home and privacy, first load 69 KB.
