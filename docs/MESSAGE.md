# Message sheet (approved)

Version 4, approved by Jake at gate 1 on 2026-10-12. Versions 5 to 8 add Jake's changes of 2026-10-13. Version 9 (2026-11-13) is approved by Jake line by line. This is every word on the site, in page order. There is no design yet.

How to read it:

- The **Copy** column is what visitors will see.
- Every slot you had to fill is now filled. The only placeholder left is the privacy date, which is set at launch.
- What is left for you is at the bottom.

## What changed in v9 (2026-11-13, approved by Jake line by line)

Jake chose seven ideas from the copy brainstorm, after the 3000-foot view in `docs/POSITIONING.md`. Sections 1 to 4, one answer in section 6, and one paragraph in section 7 changed. The other sections of this sheet were not touched in v9. The live copy for every section is `src/content/site.ts`.

- **Hero text** leads with the gap: the department has the devices and the staff who decide, and we give it the person who owns the work in between.
- **Problem section:** each symptom now gives its cause ("because"). The four-line answer is replaced by the contrast with well-resourced programs. The booking button moved to the new section 2b.
- **New section 2b, "What changes for your staff":** three outcomes, each answering one symptom, then the booking button.
- **Section 3 is now the chain.** It shows who owns each part of the work: the staff own the devices and tests and the decisions, and the specialist owns the middle. The heading is "One person owns your data work." The "What you can hand us" list is one line per verb, inside the chain.
- **The four verbs are Organize, Check, Connect, Deliver** everywhere (Jake, 2026-11-13). They replace Collect, Check, Connect, Explain.
- **Section 3b** has a new heading, taken from Jake's own first sentence: "Your specialist becomes an extension of your staff." Lines now said in section 3 are gone from 3b.
- **Section 4:** the six lines now sit under their own label, "What stays with your staff", and the text above them is plainer. Three "What we are not" lines sit in their own row below, each with a bold label (Jake approved these words on 2026-11-13).
- **Section 3** opens with why a person is needed: "Software alone does not close the gap between collection and decision. It takes a person who follows through." (Jake approved, 2026-11-13).
- **After the second review (Jake, six yes answers, 2026-11-13):** "Not a software product" no longer contradicts the platform login. A booking button sits under the chain on phones. "often" is in the contrast line. The Deliver line is two sentences. The picker choice "Exporting files and refreshing reports" is now "Cleaning files and refreshing reports".
- **Said once:** "works across the systems you already use" and "our software does the repeat checks" each appear in one section now. "Who we are" paragraph three is shorter, because the problem section makes the same point.

## What changed in v8 (Jake, 2026-10-13, round 4)

- "Who we are" is Jake's new five-paragraph text. Three words changed to fit the rules: "Ignition" became "Ignition APG", "a dedicated performance data operator" became "its own performance data specialist", and "That operator" became "That specialist".
- "over 20 years" (the company's history) is now allowed on the site, next to "30-minute".

## What changed in v7 (Jake, 2026-10-13, round 3)

- Ignition APG is one performance data specialist plus our software, one to one with each department. "Data team" is gone from the site and is now a banned phrase.
- "Performance data specialist" is the full name for the person. "Your specialist" is the short form after it. Lines that suggested several people are now singular.
- The call is 30 minutes. Every booking button says "Book a 30-minute workflow review", and step 1 is "A 30-minute call".

## What changed in v6 (Jake, 2026-10-13, round 2)

- Section 2 is rewritten: a new heading, four symptoms, a four-line answer, and a booking button.
- Every booking button now says "Book a 20-minute workflow review". This replaces "Book a 20-minute data audit call".
- The specialist heading is "One person owns your data work."
- The privacy page says "We count visits", because the free Vercel plan counts visits only.

## What changed in v5 (Jake, 2026-10-13)

- Hero: a role picker replaces the single button. "What best describes your role?" with five role buttons, then the link "Other role? Book a 20-minute data audit call". Each role button opens Calendly with the role already filled in.
- New section 3b, "One person owns your data.", about the data specialist. It is a role, with no name, no photo, and no personal story.
- "Explain" gets back two confirmed items: rows 10 and 12.
- Fixing wrong numbers now uses the approved wording in both places: "We find the cause. We correct it with your staff, or we exclude it and record the reason." The site never says we "fix" a value. BASIS never edits a value in place.
- Questions open and close on click or tap. All are closed when the page loads. The answers do not change.

## What changed in v4

- Your three symptoms and the new closing line are in the problem section. The department message follows them.
- "What stays with your staff" has your new heading: "We handle the data work. Your staff keep the judgment."
- "How it starts" uses your new wording and says it is free. Step 3 makes no time promise.
- Your answers on data protection and cost are in. The other answers and "Who we are" are approved.
- Your email address, Calendly link, and Vercel Web Analytics are in.

## What changed in v3

- The site name is now Ignition APG.
- Row 5 is back in "Check": every number links back to its source file.
- Your answer to "Do you replace our software?" is in, split into two questions. "What do we get?" is new.
- BASIS is named once, in "What do we get?", as "BASIS, our software." It appears nowhere else.

## What changed in v2

- The button stays "Book a 20-minute data audit call."
- The site says "us," never "Jake."
- The founder section is gone. Section 7 is now "Who we are," about the company.
- "What you can hand us" is now one line per verb. The method details moved to "Save for the call" below, for your walkthrough.

<!-- copy:start -->

## Page title and search listing

| Element | Copy |
|---|---|
| Page title | Ignition APG: athlete data your staff can trust |
| Search description | Ignition APG gives each college athletic department its own performance data specialist. We collect, check, connect, and explain athlete data. Every decision stays with your staff. |

## Header

| Element | Copy |
|---|---|
| Name | Ignition APG |
| Button | Book a 30-minute workflow review |

## 1. Hero

| Element | Copy |
|---|---|
| Label | A performance data specialist for your athletic department |
| Heading | Performance data your staff can trust. |
| Text | Your department has the devices and the staff who make the decisions. Ignition APG gives you a performance data specialist who owns the work in between, supported by our software. |
| Prompt | What best describes your role? |
| Under the picker | Your staff keep the context, interpretation, and decisions. |

The role picker (three taps, Jake, 2026-10-16) is unchanged. Its words are in `src/content/site.ts` and `docs/BRIEF.md`.

## 2. The problem (heading by Jake, 2026-10-13; symptoms and contrast, 2026-11-13)

| Element | Copy |
|---|---|
| Heading | Performance staff have the data. Nobody owns the work between collection and decision. |
| Symptom | Staff do not fully trust the numbers, because nobody has time to check them. |
| Symptom | High-value staff spend time cleaning files and refreshing reports, because no one else is there to do it. |
| Symptom | The report arrives after coaches needed it, because the work waits until someone is free. |
| Symptom | Each new system adds work, because the systems do not work together. |
| Contrast | Well-resourced programs often have a specialist for this work. |
| Contrast | In many departments, it falls to a coach, a sport scientist, or a graduate assistant, on top of the main job. |

The contrast uses Jake's facts from round 4 ("Who we are"). It says "many", not "most". There is no button in this section now.

## 2b. What changes for your staff (Jake, 2026-11-13)

| Element | Copy |
|---|---|
| Heading | What changes for your staff |
| Outcome | Your staff can trust the numbers. |
| Support | We review every flagged number before a report goes out. |
| Outcome | Your staff get their time back. |
| Support | They stop cleaning files and refreshing reports. |
| Outcome | Reports arrive before coaches need them. |
| Support | The work no longer waits until someone is free. |
| Button | Book a 30-minute workflow review |

The three outcomes answer the first three symptoms in section 2, in the same order. The Connect row of the chain answers the fourth. The first support line is confirmed row 5, word for word.

## 3. What you can hand us

On the page this section is the chain, under the heading "One person owns your data work." The four Items below are the "What you can hand us" lines. `scripts/check-claims.mjs` reads them from here.

| Element | Copy |
|---|---|
| Heading | One person owns your data work. |
| Text | Software alone does not close the gap between collection and decision. It takes a person who follows through. |
| Text | Your specialist works across the systems you already use. Our software does the repeat checks and shows your staff the results. |
| Owner label | Your staff |
| Start | Devices and tests |
| Start text | Your staff put devices on athletes, run the tests, and send the exports. |
| Owner label | Your performance data specialist |
| Group | Organize |
| Item | We organize the exports your systems already produce. We keep every original file and log what is missing. |
| Group | Check |
| Item | We find missing, duplicate, and wrong values. Every number links back to its source file. |
| Group | Connect |
| Item | We match each athlete across your systems. We link GPS, testing, and other data to that athlete. |
| Group | Deliver |
| Item | We build and update the reports your staff use. We explain what each one shows and what it cannot show. |
| Owner label | Your staff |
| End | Decisions |
| End text | Your staff add context, interpret the information, and make the decisions. |
| Caption | Illustration: the chain from devices to decisions. |
| Closing line | On the call, we show you how your specialist does this work. |
| Button (phones only) | Book a 30-minute workflow review |

The chain shows no numbers and carries the label "Illustration" (hard rule 10).

## 3b. Your performance data specialist (Jake, 2026-10-13 and 2026-10-16; trimmed 2026-11-13)

| Element | Copy |
|---|---|
| Heading | Your specialist becomes an extension of your staff. |
| Text | Send a text, email, or Slack message, whichever your team already uses. You do not get a support queue. |
| Text | Your specialist learns your systems, your sports, and your weekly rhythm. |
| Subheading | Who your performance data specialist is |
| Point | Your performance data specialist has worked in sports performance and in data. |
| Subheading | A week with your performance data specialist |
| Week item | After each session, your staff send the exports. Your specialist checks them. |
| Week item | When a number looks wrong, your specialist finds the cause. They correct it with your staff, or exclude it and record the reason. |
| Week item | Your staff get checked reports on the schedule you agree. |
| Week item | Any day, your staff message your specialist with data questions. |
| Week item | Each month, your specialist updates your written guide to your sources, definitions, and methods. |

A role, not a person: no name, no photo, no avatar, no icon. The week is an ordered list with no visible numbers.

## 4. What stays with your staff

| Element | Copy |
|---|---|
| Heading | We handle the data work. Your staff keep the judgment. |
| Text | These decisions and tasks stay with your staff. We support them with checked data. We never take them over. |
| List label | What stays with your staff |
| Item | Readiness, load, and return-to-play decisions. |
| Item | Which athletes need a conversation, and what changes in training. |
| Item | Training plans and sessions. |
| Item | Putting devices on athletes and running test sessions on site. |
| Item | Who can see athlete data. You set the rules and we follow them. |
| Item | Your data strategy and which tools to buy. |
| Subheading | What we are not |
| Not label | Not interpretation. |
| Not | We do not tell you what the data means for an athlete. |
| Not label | Not a software product. |
| Not | Your specialist runs our software. Your staff log in only to see the results. |
| Not label | Not consulting. |
| Not | We do not advise and leave. We do the work every week. |

This list gets the same visual weight as section 3. The six items use the confirmed wording without change. They give away no method, and they answer the director's biggest fear, so they stay in full.

## 5. How it starts

| Element | Copy |
|---|---|
| Heading | How it starts. Free. |
| Step 1 title | A 30-minute call |
| Step 1 text | You tell us about your systems and the data problem that costs your staff the most time. |
| Step 2 title | A review of one export |
| Step 2 text | You send one export from one system you use. You can remove athlete names first. We check every value. |
| Step 3 title | What we found |
| Step 3 text | We walk you through what we found on a short call. You get a written summary and a plan for your data. |
| Closing line | Staff ask questions by email, Slack, or text. They see results on our platform. |

None of these steps cost money. Step 3 makes no time promise, so "30-minute" stays the only number on the site.

## 6. Questions

| Element | Copy |
|---|---|
| Heading | Questions |
| Question | Do you replace our software? |
| Answer | No. You keep your GPS, force plates, and athlete management system. Your staff send us the exports those systems already produce. |
| Question | What do we get? |
| Answer | You get a performance data specialist from Ignition APG. They use BASIS, our software, to check and connect your data. Your staff log in to our platform to see the results. To ask a question, they message us by email, Slack, or text. |
| Question | Which systems do you work with? |
| Answer | Your staff send the exports their systems already produce. We need no new connections and no IT project. |
| Question | Do you make decisions about athletes? |
| Answer | No. Readiness, load, and return-to-play decisions stay with your coaches and clinicians. We organize, check, connect, and deliver the data they use. |
| Question | How do you protect athlete data? |
| Answer | You decide who can see athlete data. You set the rules and we follow them. For the first review, you can remove athlete names before you send the export. We do not share your data with anyone outside your department. |
| Question | What does it cost? |
| Answer | The call, the export review, and the written summary are free. After that, the price depends on your sports and systems. You get a fixed monthly price before you commit. |

All six answers are yours or approved by you. None names a compliance standard. Since 2026-10-13 each question opens and closes on click or tap, and all are closed when the page loads.

## 7. Who we are

| Element | Copy |
|---|---|
| Heading | Who we are |
| Text | Ignition APG began with a simple mission: help every athlete train like a pro. |
| Text | For over 20 years, we have brought the principles, standards, and problem-solving approach of elite performance programs to athletes at every level. |
| Text | Along the way, we saw another gap. Well-resourced sports organizations often have specialized technical staff for performance data. Many other programs do not. |
| Text | Today, our focus is giving each of those departments its own performance data specialist. That specialist works across the systems already in place and keeps the recurring data workflow running. |
| Text | Our focus has evolved, but the principle remains the same: make professional-level support more accessible. |

Approved as written by Jake on 2026-10-13. Paragraph three was shortened on 2026-11-13 (Jake approved), because the problem section now makes the same point. There is no personal story and no photo.

## 8. Final call to action

| Element | Copy |
|---|---|
| Heading | Bring the data problem that costs your staff the most time. |
| Button | Book a 30-minute workflow review |
| Email line | Or email us at ja.lerman@ignitionapg.com. |

## Footer

| Element | Copy |
|---|---|
| Name | Ignition APG |
| Link | Privacy |
| Link | Email us |

## Thank-you page

| Element | Copy |
|---|---|
| Heading | Your call is booked. |
| Text | Check your email for the confirmation and the calendar invite. |
| Text | Before the call, pick one export from one system you use. We can review it after we talk. |
| Text | Questions before then? Email us at ja.lerman@ignitionapg.com. |
| Link | Back to the home page |

## Privacy page

| Element | Copy |
|---|---|
| Heading | Privacy |
| Text | This page covers this website only. |
| Text | This site uses no cookies. |
| Text | We count visits with Vercel Web Analytics. It uses no cookies and does not identify you. |
| Text | When you book a call, Calendly collects your name, email, role, school and sports, and your answer about your data problem. |
| Text | We use that information to prepare for the call. |
| Text | Calendly handles the booking. We do not sell your information or add you to a mailing list. |
| Text | To see or delete your information, email ja.lerman@ignitionapg.com. |
| Text | Last updated: October 12, 2026 |

Before launch, Stage 3 checks that every line above is true. One example: if the Calendly booking opens inside the site, Calendly may set cookies, and this page must then say so. `docs/BOOKING.md` explains this.

## 404 page

| Element | Copy |
|---|---|
| Heading | Page not found |
| Text | This page does not exist. |
| Link | Go to the home page |

<!-- copy:end -->

## Links

| Where | Goes to |
|---|---|
| Every "Book a 30-minute workflow review" button (header, section 2, How it starts, final section) and the "Other role?" link | https://calendly.com/ja-lerman-ignitionapg/intro-call |
| Every "Email us" link and email line | ja.lerman@ignitionapg.com |
| Calendly, after a booking | the site's thank-you page. Setup steps are in `docs/BOOKING.md`. |

## Traceability: where each "What you can hand us" line comes from

This is for you, not for the page. Row numbers follow the table in `docs/BRIEF.md` section 3.6.

| Group | Line on the page | Confirmed rows it comes from |
|---|---|---|
| Organize | We organize the exports your systems already produce. We keep every original file and log what is missing. | Row 1 (the exports from your systems; "collect" became "organize" on 2026-11-13). Row 2 (keep every original file, log what is missing). |
| Check | We find missing, duplicate, and wrong values. Every number links back to its source file. | Row 3 (find missing, duplicate, and wrong values). Row 5, first sentence. |
| Connect | We match each athlete across your systems. We link GPS, testing, and other data to that athlete. | Row 6 (match each athlete). Row 8 (link GPS, testing, and other data). |
| Deliver | We build and update the reports your staff use. We explain what each one shows and what it cannot show. | Row 9 (build and update reports). Row 10 (what each report shows and cannot show). |

Confirmed rows that sit elsewhere on the page:

- Row 4 (find the cause, correct it with your staff or exclude it): the week list in section 3b.
- Row 5, second sentence (review every flagged number): the first outcome in section 2b.
- Row 11 (email, Slack, or text): section 3b and the answer to "What do we get?".
- Row 12 (the written guide): the last line of the week list.

The page has no response time, no custom reports, and no task IDs. BASIS appears once, in your answer to "What do we get?"

## Save for the call

These confirmed items are true, but they are not on the page. They show how your specialist works, so they make good material for your walkthrough.

- **Organize.** "We log what is missing" is on the page since 2026-11-13. The detail of how we log what arrived stays for the call. (Row 2, second half)
- **Connect.** We convert every value to the same units. We record each system's definitions, so different measures are never mixed. (Row 7)
- **Now on the page.** "You can remove athlete names first" moved to step 2 and the data protection answer in v4.
- **Where to start.** Hand us your most painful data problem first. The booking question asks for it, so you know it before the call.

If one of these is the thing that makes a director book, move it back to the page.

## What is left for you

1. **Sign off on this sheet.** If every word reads right, reply "approved" and gate 1 closes.
2. **Set up Calendly** with the steps in `docs/BOOKING.md`.
3. **Two questions for Stage 2:**
   - Is Vercel connected to this project on GitHub?
   - May I publish one preview link per design direction, so you can open each on your phone?
