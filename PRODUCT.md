# Product

<!-- impeccable:product-schema 1 -->

Written by Impeccable `init` (instructions-only fallback) on 2026-10-12 from `docs/BRIEF.md`. Jake approved the plan that set these facts. Updated the same day with Jake's gate 1 changes. Open items are marked as open.

## Platform

web

## Stack

Set by Jake in the build prompt:

- Astro with static output, Tailwind CSS, and no client JavaScript except analytics and small, optional enhancements.
- Fonts self-hosted through Fontsource. No font CDN.
- Deploy on Vercel. Booking is a link to Cal.com or Calendly. Load any embed only after a click.
- Analytics are cookieless: Plausible or Vercel Web Analytics. Open: Jake picks one in Stage 3.

## Users

- **Primary:** Director of Sports Science, Director of High Performance, or Director of Strength and Conditioning at a US college athletic department. Division I first.
- **Secondary:** sport scientists and head athletic trainers. They often forward the link to their director.
- **Situation:** they reach the site from a direct message Jake sends, or from a colleague who forwards it. They judge trust before they judge features.
- **What they want:** numbers they can trust without spending their week fixing spreadsheets.
- **What they fear:**
  - another software contract
  - a vendor that oversteps into athlete decisions
  - athlete data leaving their control

## Product Purpose

- Ignition gives each athletic department a data team: performance data specialists who collect, check, connect, and explain athlete data. BASIS software supports them, but the site does not name it for now.
- **The site's one job:** get a qualified college performance leader to book a 20-minute call with us. Jake takes the call. The site says "us," not "Jake."
- **Success:** qualified bookings. Qualified means a performance staff member at a college or professional program, based on the four booking answers:
  - name
  - role
  - school and sports
  - the data problem that costs the most time

## Positioning

- Ignition is people doing data work, supported by software. It is not a software product the staff must learn.
- The service has a written limit: Ignition collects, checks, connects, and explains data. Every decision about athletes stays with coaches and clinicians.
- Ignition works with the exports the department's systems already produce. It needs no new connections, no IT project, and no new login to ask a question.

## Operating Context

- Staff send the exports their systems already produce. Examples: GPS and testing data.
- Staff reach the data team by email, Slack, or text.
- Ignition keeps every original file, records definitions and methods, and writes a guide to the department's sources.
- **How it starts** (Jake confirms at gate 1):
  1. a 20-minute call
  2. a review of one export from one system
  3. a written summary and plan

## Capabilities and Constraints

- **Capabilities:** the 12 confirmed items in `docs/BRIEF.md` section 3.6, under four verbs: collect, check, connect, explain.
  - Most are true because a person does the work with BASIS support. The site does not name BASIS for now.
  - Never imply software does them automatically.
- **Limits** (equal weight to capabilities): the six items in `docs/BRIEF.md` section 3.6 that stay with staff. They include readiness, load, and return-to-play decisions.
- **Terms:**
  - "Data team" always means the Ignition service.
  - "BASIS" always means the software. It is not named on the site for now.
- **Banned claims:**
  - readiness score, predict, injury prevention, optimize load, real-time, integrates with, automatic sync
  - automatic data feeds
  - wellness or questionnaire data
  - any compliance claim (FERPA, HIPAA, SOC 2, GDPR, or other) without proof from Jake
  - Athena or Palantir by name
  - job posting text, employer names, school names, posting IDs
- **No research statistics in version 1.** No percentages and no "X of Y" figures. The only number allowed is "20-minute."
- **Open, Jake decides at gate 1:**
  - the button name
  - the customer phrases
  - the FAQ answers
  - the "Who we are" text
  - the name on the site: Ignition or Ignition APG
  - the booking link
  - the email address

## Brand Commitments

- **Name:** Ignition. The company is Ignition APG. Open: which name the site uses.
- **Company first:** Jake leads the new vision and mission. He is not the founder, and the site has no personal story.
- **The software is BASIS.** It is not named on the site for now.
- **Voice:** Simplified Technical English (ASD-STE100 style).
  - Active voice. One idea per sentence. 25 words or fewer per sentence.
  - No contractions, semicolons, or em or en dashes.
  - No marketing adjectives. The full banned list is in `CLAUDE.md`.
- **Approved lines:**
  - "Athlete data your staff can trust."
  - "Performance staff cannot trust their numbers, and nobody owns fixing them."
  - The vision paragraph in `docs/BRIEF.md` section 3.4.
- **Look:** careful, checked, and calm. Evidence over effects. Avoid the sports-tech look: dark background with neon green, athlete silhouettes, lens flares, glowing dashboards, and gradient blobs.
- No logo exists yet. No visual identity exists yet. Stage 2 sets it.

## Evidence on Hand

None yet. Future work must not fabricate any of these:

- No testimonials, quotes, client logos, "trusted by" rows, case studies, or user counts.
- No research statistics.
- No product screenshots yet. Use only screenshots Jake supplies from the BASIS demo school (synthetic data), each labelled "Sample data." Never draw a dashboard with invented numbers. Abstract illustrations with no numbers are allowed, labelled "Illustration."
- No photos of athletes yet. No stock photos of people.
- **Real facts on hand about the company:**
  - Ignition APG began as a sports performance training company.
  - It trained athletes of all ages and solved sports performance problems for its partners.
  - The data team is the next evolution of that work, and it is now the main focus.

## Product Principles

1. The limit is part of the offer. What stays with staff gets the same weight as what Ignition does.
2. Show the work, not effects. Every claim traces to a confirmed task, and every number on the page is practical.
3. Fit around the department. Use the exports it already has and the channels it already uses.
4. One clear next step: a 20-minute call with us.
5. Say what, show how on the call. The page names what the data team does. The method is for the call walkthrough.

## Accessibility & Inclusion

WCAG 2.2 AA:

- AA contrast on all text.
- Keyboard access with a visible focus state.
- Tap targets 44 px or larger and text 16 px or larger at 375 px wide.
- All motion stops under `prefers-reduced-motion`.
