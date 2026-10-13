# Status

Last updated: 2026-10-12

## Where we are

**Stage 5 (launch) in progress.** Gate ★4 approved on 2026-10-13. Vercel is linked: its first build from `main` failed as expected, because `main` has no site yet.

- Working branch: `claude/clever-ride-f3mrjh`. Commit and push there after each stage.
- Rules for every session: `CLAUDE.md`. Source of truth for copy and claims: `docs/BRIEF.md`.

## Done

- Stage 0:
  - Confirmed this repo is `jlerm13/ignition-apg-website`, not BASIS or the research workspace.
  - Wrote `CLAUDE.md` with the hard rules and copy rules.
  - Saved the brief to `docs/BRIEF.md`.
  - Installed five design skills at project level and recorded them in `docs/SKILLS.md`.
- Stage 1:
  - Impeccable `init` (instructions-only fallback) wrote `PRODUCT.md`.
  - Impeccable `shape` wrote `docs/SHAPE.md`. Visual direction is left for Stage 2.
  - Wrote `docs/MESSAGE.md`: every word on the site in page order, a traceability table for the delegation lines, and Jake's five decisions.
  - The copy check (`scripts/check-message.mjs`) passed on the page copy. It covered:
    - sentence length
    - contractions, semicolons, and dashes
    - banned words and hard-rule words
    - percentages, "X of Y" figures, and other numbers
    - task IDs

    The only items left are 14 `[JAKE:]` slots.
  - Message sheet v2, after Jake's first gate 1 feedback:
    - Applied his five changes. They are listed at the top of `docs/BRIEF.md`.
    - Updated `CLAUDE.md`, `PRODUCT.md`, and `docs/SHAPE.md` to match.
    - The copy check now also flags "BASIS" and "Jake" in page copy. It passes with 13 `[JAKE:]` slots open.
  - Message sheet v3, after round 2:
    - Name is Ignition APG. Row 5 is back. Jake's two software answers are in.
    - The copy check allows BASIS once, in an Answer row only. It passes with 12 `[JAKE:]` slots open.
  - Message sheet v4, after round 3:
    - Jake's symptoms, answers, "How it starts" wording, email, Calendly link, and analytics choice are in.
    - The copy check passes with 0 `[JAKE:]` slots. The only placeholder is "[set at launch]" on the privacy page.
    - Wrote `docs/BOOKING.md`: Calendly setup steps for Jake (length, name, three booking questions, redirect to the thank-you page, test).
    - The Calendly link could not be opened from the build environment, because the network blocks calendly.com. Jake checks it.

- Stage 2:
  - Set up the Astro project: `package.json`, `astro.config.mjs`, and fonts from Fontsource. Tailwind is added in Stage 3.
  - Moved every approved word into `src/content/site.ts`, the single copy file.
  - Built four directions from Hallmark themes, hero and problem section only, in `src/pages/directions/`:
    - Ledger (Almanac)
    - Briefing (Specimen)
    - Spec sheet (Grid)
    - Service (Coral)
  - Unslop-UI rules applied as a filter.
  - Screenshots at 1440 px and 390 px are in `docs/directions/`, with one paragraph per direction in `docs/directions/README.md`.
  - `npm run shots:directions` rebuilds the screenshots. No direction scrolls sideways at either width.
  - Wrote `docs/VERCEL.md`: steps for Jake to link Vercel.
  - One preview branch with four pages at `/directions/` replaces four preview branches. It is one link instead of four, and Jake allowed preview links.
  - Jake said: start fresh, do not use the old Ignition APG brand. He may send old brand details later.

- Stage 3:
  - Built the full site in the Spec sheet direction with Astro and Tailwind CSS v4: home, privacy, thank-you, and 404 pages.
  - Every word comes from `src/content/site.ts`, matching `docs/MESSAGE.md`.
  - Added cookieless Vercel Web Analytics with page views:
    - `booking_completed` is the `/thank-you` view.
    - The click events (`cta_click` with section, `booking_opened`, `email_click`) are wired in. They count once Jake is on Vercel Pro.
  - Added the share image `public/og.png` (made by `npm run og`), the favicon, the sitemap, and robots.txt.
  - The site address is a placeholder (`https://ignition-apg-website.vercel.app`). Set `SITE_URL` in Stage 5.
  - Check scripts:
    - `npm run check` builds the site, then runs `scripts/check-copy.mjs` and `scripts/check-claims.mjs`. Both pass. The shared rules live in `scripts/rules.mjs`.
    - Both scripts were tested on planted errors and caught them.
  - Kill AI Slop scan: no signals. Two hits in the source were confirmed false positives and marked with reasons:
    - link underline
    - the step list
  - Screenshots with `npm run shots` (now saved in `docs/final/`). No horizontal scroll at 375, 390, or 1440 px.
  - At 375 px every button and link is 44 px or taller, except email links inside sentences. Those get a 44 px tap area through CSS, and WCAG 2.2 exempts inline links.
  - All text at 375 px is 16 px or larger.
  - The privacy page shows "Last updated: October 12, 2026." This is the one number besides "20-minute", allowed as a practical date.
  - Light mode only by design (`docs/DESIGN.md`). The Taste Skill's dark-mode rule ranks below the approved design.
  - The Stage 2 direction pages stay at `/directions/` (noindex) until launch.

- Stage 4:
  - Ran every audit in the brief. The results table is in `docs/final/REPORT.md`, the raw numbers in `docs/final/audit.json`, and the screenshots in `docs/final/`.
  - `node scripts/audit.mjs` runs:
    - axe-core
    - keyboard
    - the 375 px checks
    - reduced motion
    - page weight
    - Lighthouse mobile
  - Results:
    - Lighthouse 100/100/100/100 on home and privacy.
    - axe: 0 violations.
    - First load 63 KB, JavaScript 0.5 KB.
  - Hallmark audit and Impeccable critique ran as separate reviewers. Fixed:
    - a booking button after "How it starts"
    - layouts matching DESIGN.md
    - all question answers shown open
    - "return-to-play" kept on one line
    - email addresses never split
    - footer at the bottom of short pages
    - no booking button on the thank-you page
    - spacing, states, and underline tidy-ups
  - DESIGN.md was updated to match. The rule colour in the dark band is now 30%.
  - Not done: a test booking. It needs Vercel linked and the Calendly redirect set.

## Jake's decisions so far

- 2026-10-13 (gate 4 closed): Jake approved the audit and the new closing line for "How it starts": "Staff ask questions by email, Slack, or text. They see results on our platform."
- 2026-10-13: Vercel project created (Hobby plan, Astro preset, build `npm run build`, output `dist`). The first deploy from `main` failed (no package.json on `main`), which is expected.

- 2026-10-12: Impeccable is installed as instructions only. Its program is never run, so nothing downloads and nothing is sent.
- 2026-10-12: If a skill install command fails, copy the same skill from its own GitHub repo as its README describes. Never substitute a different skill.
- 2026-10-12 (gate 1, round 1):
  - The button stays "Book a 20-minute data audit call."
  - BASIS is not named on the site for now.
  - The site says "us," not "Jake."
  - Company first. Jake leads the new vision and mission of Ignition APG and is not the founder. The founder section becomes "Who we are."
  - Keep method details for the call. Jake walks directors through them in a presentation.
- 2026-10-12 (gate 1, round 2):
  - The site name is Ignition APG.
  - Row 5 is back on the page.
  - Jake wrote "Do you replace our software?" and the new "What do we get?".
  - BASIS is named once, in "What do we get?". Staff log in to our platform to see results.
- 2026-10-12 (gate 1, round 3):
  - Symptoms and the closing line of the problem section are Jake's wording.
  - New heading for section 4: "We handle the data work. Your staff keep the judgment."
  - "How it starts. Free." Step 3 makes no time promise.
  - Answers on data protection and cost are Jake's. The other answers and "Who we are" are approved.
  - Booking is Calendly. Analytics is Vercel Web Analytics. The site email is ja.lerman@ignitionapg.com.
- 2026-10-12 (gate 1 closed):
  - Jake approved message sheet v4.
  - Vercel: Jake has an account. It is not yet linked to this repo.
  - Jake allows preview links for the Stage 2 directions.
- 2026-10-12 (gate 2 closed):
  - Jake picked direction 3, Spec sheet.
  - He shared reference screenshots from another company's site. They stay out of the repo, and we never name the company (hard rule 8). The decisions are in `docs/DESIGN.md`.
  - Analytics: launch on the free Vercel plan. Visits and the thank-you page view (`booking_completed`) are counted. The click events are built in and switch on if Jake upgrades to Vercel Pro.
  - Stop after the Stage 3 build so Jake can look before the Stage 4 audit.
- 2026-10-12 (Stage 2 start): the old training-business brand is not used. Start fresh. Jake may send old brand details after he assesses the directions.

## Waiting on Jake

1. **Review the copy on the preview**, then approve it. The preview works: https://ignition-apg-website-git-claude-clever-526011-jlerm13s-projects.vercel.app/ (branch `claude/clever-ride-f3mrjh`; private, needs Vercel sign-in).
2. **Decide the live address:** ignitionapg.com, a subdomain such as data.ignitionapg.com, or the free Vercel address for now.
3. **Decide who publishes:** Claude merges after his approval, or Jake clicks merge.
4. **Set up Calendly** with `docs/BOOKING.md`, then make one test booking (audit check 11).

## The stages

Each stage commits when done. Stop at every ★ and wait for Jake.

### Stage 0: Set up (done)

### Stage 1 ★: Message sheet (done, approved)

1. Run Impeccable `init` and `shape` with `docs/BRIEF.md` as input.
   - `init` writes `PRODUCT.md`.
   - `shape` writes `docs/SHAPE.md`.
   - Any DESIGN.md is a draft until Jake picks a direction in Stage 2.
2. Write `docs/MESSAGE.md`: the full page copy in order, in final words, following the copy rules.
3. End with five decisions at most for Jake:
   - the button name
   - the customer phrases
   - the answers he must write
   - the "How it starts" steps
   - his booking link and email address
4. Commit and STOP.

### Stage 2 ★: Directions (done, Jake picked Spec sheet)

1. Make four distinct directions. Unslop-UI has no directions feature, so use Hallmark themes. Each direction shows the hero and the problem section with real copy from the approved MESSAGE.md.
2. Take screenshots at 1440 px and 390 px wide for each. Save them in `docs/directions/`.
   - If Vercel is connected, also push one preview branch per direction.
   - Ask Jake first whether Vercel is linked and whether extra branches are fine.
3. Write one short paragraph per direction: why it fits a Director of Sports Science judging trust.
4. Commit and STOP. Jake picks one direction or asks for a mix.
5. After he picks, write `docs/DESIGN.md`: type, colour, spacing, and components.

### Stage 3: Build (done, Jake approved the look)

1. Build these four pages, using the Taste Skill rules and `docs/DESIGN.md`:
   - the home page
   - the privacy page
   - the thank-you page
   - a 404 page
2. Add:
   - the analytics events
   - meta title and description
   - a share image that uses real copy
   - a favicon
   - a sitemap
   - robots.txt
3. Add two check scripts and run them on the built HTML:
   - `scripts/check-copy.mjs` checks for:
     - sentences of 25 words or fewer
     - no contractions, semicolons, or em or en dashes
     - no banned words
     - no `[JAKE:` markers
   - `scripts/check-claims.mjs` checks that:
     - the page has no percentages and no "X of Y" figures
     - every delegation item matches a confirmed row in the brief
4. Commit.

### Stage 4 ★: Audit (done, approved)

Run every check below and fix what fails. Then report one table to Jake: check, result, what changed.

- Kill AI Slop scanner: zero findings, or each remaining finding marked intentional with a reason.
- `hallmark audit`.
- Impeccable `audit`, then `critique`, then `polish`.
- Lighthouse on a phone profile: Performance 95 or more, Accessibility 100, Best Practices 95 or more, SEO 100.
- axe-core: zero violations.
- WCAG 2.2 AA contrast on all text.
- Keyboard: every link and button is reachable and shows focus.
- At 375 px wide:
  - no horizontal scroll
  - tap targets 44 px or larger
  - text 16 px or larger
- Reduced motion: all motion stops.
- First load under 500 KB. JavaScript under 50 KB.
- Both check scripts pass.
- A test booking reaches the thank-you page and fires `booking_completed`.

Save screenshots in `docs/final/`. Commit and STOP.

### Stage 5: Launch

1. Deploy a Vercel preview. Jake approves it on his phone.
2. Deploy to production. If Jake has a domain, give him the exact DNS steps in plain language.
3. Write `docs/LAUNCH.md`:
   - the weekly numbers
   - the two-week review questions
   - Jake's plan to send the link to 20 performance leaders in his network
4. Commit. Tell Jake the live address and the one thing to watch first.
