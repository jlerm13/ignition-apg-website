# Shape brief: home page

Written by Impeccable `shape` (instructions-only fallback) on 2026-10-12. Updated the same day with Jake's gate 1 changes (rounds 1 and 2). The site name is Ignition APG.

- Phase 1 discovery is answered by `docs/BRIEF.md` and `PRODUCT.md`.
- Phase 2 (visual direction) is left for Stage 2 on purpose. This brief has no visual choices.
- The final words are in `docs/MESSAGE.md`.

## 1. Job and audience

- **Visitor:** a Director of Sports Science, Director of High Performance, or Director of Strength and Conditioning at a US college athletic department, Division I first.
- **Often a forward:** a sport scientist or head athletic trainer opens the link first and forwards it to the director.
- **How they arrive:** most come from a direct message from Jake, often on a phone between sessions.
- **State of mind:** careful and short on time. They judge trust before features.
- **Mode:** Persuade. The visitor decides and acts. The page must make the offer clear in one line, show the action, and show what only Ignition can show.

## 2. Outcome and proof

- **Primary action:** "Book a 30-minute workflow review" (renamed by Jake on 2026-10-13, 30 minutes since round 3). It is a link to Jake's booking page.
- **Secondary action:** email us. The site says "us," not "Jake."
- **Success:** a qualified booking.
- **What only Ignition can show:** a written limit with equal weight to the offer.
  - "What you can hand us" sits next to "What stays with your staff."
  - Most vendors hide their limits. Ignition shows them as a reason to trust it.
- **Evidence on hand:** the company's own history only.
  - No testimonials, logos, statistics, or screenshots.
  - The page must persuade with specifics: what we do, what we never do, and how the first step works.
- **Strategic depth (Jake, gate 1):** the page says what we do. The call shows how, with Jake's walkthrough. The page must give enough to book, and no more.

## 3. Direction

Open until gate 2. Stage 2 makes four directions with real copy.

Constraints any direction must meet:

- Careful, checked, and calm. Evidence over effects.
- None of these:
  - dark background with neon green
  - athlete silhouettes
  - lens flares
  - glowing dashboards
  - gradient blobs
  - fake product UI
- The two lists, "What you can hand us" and "What stays with your staff", get equal visual weight.

## 4. Scope and boundaries

- **Pages:**
  - one long home page
  - a privacy page
  - a thank-you page (the booking redirect)
  - a 404 page
- **Fidelity:** production-ready static pages. No client JavaScript beyond analytics and a click-to-load booking embed.
- **Anti-goals:**
  - a feature grid of icons
  - a stats strip
  - a "trusted by" row
  - a testimonial slider
  - any number other than "30-minute" and "over 20 years"
  - Jake's name, or BASIS anywhere but the "What do we get?" answer
  - any line that suggests software does the work on its own

## 5. Sequence and focal points

1. **Hero:** heading, one vision sentence, the button, and the line "Every decision stays with your coaches and clinicians." The focal point is the heading and the button.
2. **Problem:** the problem line, three symptoms in the visitor's own words, then the department message.
3. **What you can hand us:** four groups (Collect, Check, Connect, Explain), one short line each, easy to scan. One line points to the call for the how.
4. **What stays with your staff:** six items. Same visual weight as section 3. Side by side on wide screens, one after the other on phones.
5. **How it starts:** three numbered steps, then the line about email, Slack, or text.
6. **Questions:** five questions. A plain list, or native disclosure elements with no script.
7. **Who we are:** two short lines about the company. No founder section, no personal story, no photo.
8. **Final call to action:** the button again, with the email link as the secondary action.

## 6. States and ranges

- **Copy length:**
  - The hero heading is 6 words.
  - The longest item in the lists is under 20 words.
  - Questions run 1 to 3 sentences each.
- **Booking:**
  - A click opens Jake's booking page. A later enhancement may load an embed after the click.
  - On success, the booking tool sends the visitor to `/thank-you`, which fires `booking_completed`.
- **Missing inputs:**
  - Every Jake slot is filled. The only placeholder is the privacy date, set at launch.
  - The check script blocks a build that still contains any placeholder.
- **404:** a short message and a link home.

## 7. Constraints and open decisions

- **Constraints:**
  - WCAG 2.2 AA.
  - 16 px minimum text and 44 px tap targets at 375 px wide.
  - Reduced motion stops all motion.
  - First load under 500 KB. JavaScript under 50 KB.
- **Decided at gate 1:** every copy decision, Calendly for booking, and Vercel Web Analytics.
- **Open at Stage 3:** whether Calendly redirects to the thank-you page (paid feature) or opens inside the site after a click. See `docs/BOOKING.md`.
