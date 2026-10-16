# Status

Last updated: 2026-10-16 (evening)

## Where we are

**Stage 5 (launch): done. The site is live.** Jake merged PR #1 on 2026-10-13. Vercel publishes `main` to https://ignition-apg-website.vercel.app. What is left is Jake's launch checklist in `docs/LAUNCH.md`.

- Working branch for the hero picker change: `claude/adoring-ritchie-41urmh` (new, from `main`). Every earlier branch is merged. Jake clicks merge himself.
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

- 2026-10-16 (hero picker, "How it starts", and hero words; one branch, for Jake to review):
  - Jake saw a clickable example of the picker and said it looks right. Built on the real site.
  - Three taps: the role, "What takes the most time each week?", then "Who handles that work today?". Calendly opens with the role (`a1`), problem (`a3`), and owner (`a4`) filled in. "Something else" fills nothing for the problem.
  - Role buttons are now Performance director, Sport science director, Strength and conditioning director, Sport scientist or performance analyst, Sport coach. "Athletic trainer" is no longer a button. Athletic trainers use "Other role?".
  - The line under the picker is now "Your staff keep the context, interpretation, and decisions."
  - Jake pasted new copy. Jake approved the third question and the rewrite of "How it starts" and the hero, with banned words swapped out:
    - "Dedicated" became "its own". "Operator" is not used. "Ignition" became "Ignition APG" or "we".
    - "Fixing missing or incorrect data" became "Finding missing or wrong data", because this site never says we "fix" a value. "Combining" became "Connecting".
    - "How it starts" heading: "Find the first workflow we could own. Free." Its old closing line (email, Slack, text) is gone from there. The specialist section and "What do we get?" still say it.
    - Hero heading: "Performance data your staff can trust." The page title, site description, and share image follow it.
  - The later "what working with us looks like" text sits in the specialist section, under "One person owns your data work." Words changed: "operator" became "performance data specialist", and "provides its own software when a unifying workspace is needed" became "Our software does the repeat checks and shows your staff the results". The old "They work with your staff by email, Slack, or text." line left the "who" list because the new text says it.
  - Privacy page: Calendly also collects the new answers, so the text says so. Its date is now October 16, 2026.
  - Checks: `npm run check` passes (copy and claims). Tested at 320, 375, 390, and 1440 px: no sideways scroll, tap targets 44 px or taller, text 16 px or larger, focus moves to each new question, Back works at each step, and without script a role opens Calendly at once.
  - `cta_click` and `booking_opened` fire on the last tap only, with the role.
  - Jake must check Calendly before the merge. See `docs/BOOKING.md`: there must be a fourth question, "Who handles that work today?", as a text question.

- 2026-10-15 (BASIS database updates, outside this site):
  - Jake asked for this one change in `basis-workspace` by name. It is a one-time exception to hard rule 1. Nothing on this site changed.
  - "Cloud: set up database" now updates every school in one run when the target is left empty. It goes one school at a time: demo first, then xavier. If one fails, the run stops before the next.
  - Jake merged basis-workspace PR #81. He tested it the same day. "Cloud: set up database" run #47 updated demo, then xavier. "Cloud: health check" run #60 passed for both. Both runs were green.
  - From now on, after a merge that changes the database: run "Cloud: set up database" once with the target empty, then "Cloud: health check" once with the target empty. `docs/CLOUD_OPERATIONS.md` in basis-workspace says the same.
  - 2026-10-16: the routine worked on a real update. Jake merged basis-workspace PR #85 (volleyball jump measures in Explore, with a database update). "Cloud: set up database" run #49 and "Cloud: health check" run #64 were both green.
  - 2026-10-16, Jake's facts about devices and schedules, for BASIS work:
    - VERT counts jumps and has no running measures. Only Catapult (GPS) has running measures.
    - Most soccer programs wear Catapult. Most volleyball programs wear VERT, but some wear Catapult.
    - Match Day depends on each week's schedule and on the coach's approach, which can change during a season.
    - Football's schedule is predictable. Soccer and volleyball schedules vary week to week.
  - Two BASIS follow-ups, handed to a new BASIS session (Jake has the prompt):
    - The device a team wears decides which measures Explore shows, never the sport.
    - Recovery days can change from a chosen date during a season, without relabelling earlier weeks.

- 2026-10-15 (logo):
  - Three logo mock-ups shown: the flame beside the name in the header and footer, the full logo in the header, and the stacked logo under "Who we are".
  - No logo under "Who we are". The navy "IGNITION" lettering does not fit the site.
  - Jake will look for a logo version that spells out "Ignition Athletic Performance Group", so visitors learn what APG stands for. Placement is decided when that file arrives. Mock it up again before building.
  - Later the same day: Jake sent the full-name logo and approved Option D. The logo, with its lettering in site ink, sits in the header and footer. The flame is the browser-tab icon. On PR #2 for his review.

- 2026-10-13 (round 4):
  - New "Who we are" text (five paragraphs). "Over 20 years" of company history is allowed as a second number.
  - "Data operator" is now a banned phrase.
  - The Stage 2 design pages and their fonts are removed from the site. The screenshots stay in `docs/directions/`.

- 2026-10-13 (layout check):
  - Impeccable layout audit (instructions only), then a second opinion weighed point by point. Jake approved the revised plan.
  - Hero: text left, role picker right on wide screens. Sticky headings only in the three long sections. Home page split sections are one column below 1024 px. Results are in `docs/final/REPORT.md`.

- 2026-10-13 (round 3):
  - Ignition APG is one performance data specialist plus our software, one to one with each department.
  - "Data team" is removed from the site and the docs, and it is now a banned phrase in `scripts/rules.mjs`.
  - The full term is "performance data specialist". The short form is "your specialist". Plural lines are now singular.
  - The call is 30 minutes. Every button says "Book a 30-minute workflow review", and "30-minute" is the only number on the site.

- 2026-10-13 (round 2):
  - Section 2 rewritten. Every booking button now says "Book a 20-minute workflow review".
  - "Data specialist" stays the one term. "Dedicated" was dropped.
  - Specialist heading: "One person owns your data work."
  - Privacy: "We count visits".

- 2026-10-13 (review of the preview; not a launch):
  - New data specialist section after "What you can hand us". It is a role with no person.
  - A hero role picker of five roles plus "Other role?", with Calendly role prefill through `a1`.
  - "Explain" restores rows 10 and 12.
  - The approved wording for wrong numbers is used everywhere, and the site never says we "fix" a value.
  - Questions collapse with native details.
  - Live address: the free Vercel address for now. Jake clicks merge on PR #1 himself. This session watches PR #1.

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

1. **The launch checklist** in `docs/LAUNCH.md`, section 1. Done on 2026-10-13: the Calendly redirect and a test booking on the live site (audit check 11 passes). Calendly shows a "You are leaving Calendly" step before the thank-you page, so thank-you views can undercount bookings. Count bookings in Calendly. Web Analytics is turned on in Vercel (Jake, 2026-10-13). The launch checklist is complete.
2. **Then:** weekly numbers every Monday, the first review after 2 weeks or 10 bookings, and outreach to the first 20 performance leaders (`docs/LAUNCH.md`).
3. **Logo:** done. Jake merged PR #2 (Option D). An SVG of the logo would make it sharper later. Not required.
4. Future site changes go on a fresh branch and a new pull request. Jake clicks merge himself. Never merge for him.
5. **Hero picker pull request (PR #4).** Add the fourth Calendly question and check the order (`docs/BOOKING.md`, section 2b). Test the prefill link. Then merge when happy.
6. **Decisions left:**
   - "Explain" still appears in "What you can hand us" and in one answer. The hero no longer uses it. Jake decides if those change too.
   - The thank-you page still says "pick one export from one system you use". The new step two says "exports, reports, or examples of the process". Jake decides if the thank-you page should match.

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
