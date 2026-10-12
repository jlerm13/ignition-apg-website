# Status

Last updated: 2026-10-12

## Where we are

**Stage 2: four directions are ready. Waiting at gate ★2 for Jake to pick one.** Gate ★1 was approved on 2026-10-12.

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

## Jake's decisions so far

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
- 2026-10-12 (Stage 2 start): the old training-business brand is not used. Start fresh. Jake may send old brand details after he assesses the directions.

## Waiting on Jake (gate ★2)

1. **Pick a direction, or ask for a mix.** See `docs/directions/README.md` and the screenshots.
   - If he picks Ledger, he also approves the table labels named in the README.
2. **Link Vercel** with `docs/VERCEL.md`. Then push any update to the working branch to trigger a preview, and send Jake the `/directions/` link.
3. **Set up Calendly** with `docs/BOOKING.md`. The redirect address waits for the preview link.

When Jake picks:

1. Write `docs/DESIGN.md` for that direction: type, colour, spacing, and components. Include the fix for the small label text (16 px or larger on phones).
2. Commit "Design direction picked: <name>".
3. Start Stage 3.

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

### Stage 2 ★: Directions (done, waiting at gate)

1. Make four distinct directions. Unslop-UI has no directions feature, so use Hallmark themes. Each direction shows the hero and the problem section with real copy from the approved MESSAGE.md.
2. Take screenshots at 1440 px and 390 px wide for each. Save them in `docs/directions/`.
   - If Vercel is connected, also push one preview branch per direction.
   - Ask Jake first whether Vercel is linked and whether extra branches are fine.
3. Write one short paragraph per direction: why it fits a Director of Sports Science judging trust.
4. Commit and STOP. Jake picks one direction or asks for a mix.
5. After he picks, write `docs/DESIGN.md`: type, colour, spacing, and components.

### Stage 3: Build

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

### Stage 4 ★: Audit

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
