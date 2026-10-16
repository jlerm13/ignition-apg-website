# Ignition website brief

Source of truth for all copy and claims. Saved verbatim from section 3 of Jake's build prompt on 2026-10-12. Change it only with Jake's approval.

## Changes from Jake at gate 1 (2026-10-12)

These override the original text below where they conflict. The original stays below for traceability.

1. **Button:** "Book a 20-minute data audit call" is confirmed.
2. **No BASIS on the site for now.** Do not name the software anywhere on the site. This includes the vision sentence in the hero.
3. **"Us", not "Jake", on the site.** Visitors book a call with us and email us. Jake's name does not appear in page copy.
4. **Company first, not Jake.** Jake leads the new vision and mission of Ignition APG. He is not the founder.
   - There is no founder section and no personal story. Section 7 becomes a short company section.
   - Facts Jake has stated about the company:
     - Ignition APG began as a sports performance training company.
     - It trained athletes of all ages and solved sports performance problems for its partners.
     - The performance data specialist service is the next evolution of that work, and it is now the main focus.
   - Jake's analogy: Ignition APG is like Google, and the performance data specialist service is like Waymo, a new project that Jake leads.
   - Jake's own years of experience no longer appear on the page.
5. **Keep some detail for the call.** The page says what we do. The call shows how, with a walkthrough Jake presents.
   - "What you can hand us" shows one short line per verb: collect, check, connect, explain.
   - The method details move to a "Save for the call" list in `docs/MESSAGE.md`.
   - Every line still traces to a confirmed row in 3.6.

## Changes from Jake at gate 1, round 2 (2026-10-12)

These override round 1 and the original text where they conflict.

1. **Name:** the site says "Ignition APG."
2. **Row 5 is back on the page:** "Every number links back to its source file. We review every flagged number before a report goes out."
3. **BASIS is named once,** in the answer to "What do we get?", as "BASIS, our software." It appears nowhere else on the site.
4. **Two answers written by Jake:**
   - "Do you replace our software?" "No. You keep your GPS, force plates, and athlete management system. Your staff send us the exports those systems already produce."
   - "What do we get?" "You get a data specialist from Ignition APG. They use BASIS, our software, to check and connect your data. Your staff log in to our platform to see the results. To ask a question, they message us by email, Slack, or text."
5. **New fact:** staff log in to the Ignition APG platform to see results. Asking a question needs no login.
6. **Wording to keep:**
   - Say "a data specialist from Ignition APG," never "hire a person." The visitor signs up for a service, not an employee.
   - Do not use the term "forward deployed engineer" on the site.

## Changes from Jake at gate 1, round 3 (2026-10-12)

Jake filled every open slot. The words are in `docs/MESSAGE.md` v4. New facts:

  - The first call, the export review, and the written summary are free.
  - After that, the price depends on the department's sports and systems. The department gets a fixed monthly price before it commits.
  - A department can remove athlete names from the first export.
  - Ignition APG does not share a department's data with anyone outside that department.
  - Booking is Calendly: https://calendly.com/ja-lerman-ignitionapg/intro-call. Setup steps are in `docs/BOOKING.md`.
  - Analytics is Vercel Web Analytics.
  - Site email: ja.lerman@ignitionapg.com. The visible link text is "Email us."
  - Step 3 of "How it starts" makes no time promise. "20-minute" stays the only number on the site.
  - "What stays with your staff" has a new heading: "We handle the data work. Your staff keep the judgment."
  - A new closing line ends the problem symptoms: "Each new system adds work when nobody owns the workflow."

## Changes from Jake at gate 4 (2026-10-13)

1. The closing line of "How it starts" is now: "Staff ask questions by email, Slack, or text. They see results on our platform." It replaces the original "Your staff reach us by email, Slack, or text. No new login is needed to ask a question." The old line could read as a contradiction of "Your staff log in to our platform to see the results."
2. Jake approved the Stage 4 audit.

## Changes from Jake, 2026-10-16 (hero picker, "How it starts", hero words)

These override the role picker lines in the 2026-10-13 section below, and the "How it starts" and hero text further down.

1. **Three taps in the hero.** The role, then "What takes the most time each week?", then "Who handles that work today?". Then Calendly opens with the answers filled in (`a1` role, `a3` problem, `a4` who handles it). A three-segment bar shows the step. It has no numbers.
2. **Role buttons:** Performance director, Sport science director, Strength and conditioning director, Sport scientist or performance analyst, Sport coach. Then the link "Other role? Book a 30-minute workflow review".
3. **Problem choices:** Exporting files and refreshing reports. Finding missing or wrong data. Connecting data from different systems. Getting reports ready before coaches need them. Something else. ("Fixing" is not used. This site never says we fix a value.)
4. **Lines:** "Your answers fill in the booking form for you." under the role question. "Choose the closest answer." under the problem question. "Choose the closest answer. Next, you choose a time." under the last question.
5. **Under the picker:** "Your staff keep the context, interpretation, and decisions." It replaces "Every decision stays with your coaches and clinicians."
6. **Events:** `cta_click` and `booking_opened` fire on the last tap, with section "hero" and the role. Tapping a role alone does not open the booking.
7. **Who handles that work today?** Choices: A strength or performance coach. A sport scientist. A graduate assistant or intern. A data or technology specialist. Several people share it. Nobody consistently owns it. "Something else" has no match here: the visitor can still type anything in Calendly.
8. **"How it starts" rewritten.** Heading "Find the first workflow we could own. Free." Steps: "Map one recurring workflow", "Review the real handoffs", "Get a practical next-step plan". Closing line: "If the problem fits, we will explain what it looks like when a performance data specialist owns that work. If your systems and staff already cover it reliably, we will say so." It replaces the old closing line, "Staff ask questions by email, Slack, or text. They see results on our platform." That meaning stays in "One person owns your data work" and in "What do we get?".
9. **Hero rewritten.** Heading "Performance data your staff can trust." Text: "Ignition APG gives each department its own performance data specialist, supported by our software. Your specialist organizes, checks, connects, and delivers information across the systems your staff already use." The site description and page title follow it. "Dedicated" stays banned, so Jake's words were changed to "its own".
10. **Specialist section, new text (Jake, 2026-10-16).** It now sits under "One person owns your data work." in three short paragraphs: "Your performance data specialist becomes an extension of your staff. Send a text, email, or Slack message, whichever your team already uses." Then: "Your specialist learns your systems, your sports, and your weekly rhythm, and owns the recurring data work." Then: "We work across the systems already in place. Our software does the repeat checks and shows your staff the results. Your specialist reviews every flagged number. You do not get a support queue." Jake's words said "operator" and "provides its own software when a unifying workspace is needed". The site says "performance data specialist" and "our software does the repeat checks and shows your staff the results", the same as "What do we get?". The old line "They work with your staff by email, Slack, or text." left the "Who your performance data specialist is" list, because the new text says it.
11. **Still says "explain":** the "What you can hand us" group and the answer to "Do you make decisions about athletes?". Those lines are in the confirmed delegation list. Jake decides whether they change too.

## Changes from Jake, 2026-10-13 (review of the preview)

1. **Data specialist section** (option A: a role, with no name, no photo, and no personal story; company first stays; the only number stays "20-minute"). It sits after "What you can hand us" and before "We handle the data work. Your staff keep the judgment." The words are in `docs/MESSAGE.md` section 3b.
2. **Role picker in the hero.**
   - The prompt "What best describes your role?" with five buttons: Director of High Performance, Director of Sports Science, Director of Strength and Conditioning, Sport scientist, Athletic trainer.
   - Then the link "Other role? Book a 20-minute data audit call".
   - Each button opens Calendly with the role filled in (`a1`). "Every decision stays with your coaches and clinicians." stays under the picker.
   - The `cta_click` event carries section "hero" and the role. Every other booking button stays as it is.
3. **"Explain" restores rows 10 and 12:** "We explain what each report shows and what it cannot show." and "We give you a written guide to your sources, definitions, and methods."
4. **Approved wording for wrong numbers, in both places:** "We find the cause. We correct it with your staff, or we exclude it and record the reason." Nowhere on the site may we say we "fix" a value. BASIS never edits a value in place.
5. **Questions open and close on click or tap,** using native details and summary. All are closed when the page loads. The answers do not change.

## Changes from Jake, 2026-10-13 (round 2)

1. **Section 2 is rewritten.** The problem line in 3.4 is replaced by "Performance staff have the data. Nobody owns the work between collection and decision." The full section is in `docs/MESSAGE.md` section 2.
2. **The booking button is renamed** to "Book a 20-minute workflow review" everywhere. This replaces the gate 1 decision "Book a 20-minute data audit call".
3. **"Data specialist" is the site's one term** for the person. "Data operator" is not used. "Dedicated" stays banned.
4. **The specialist heading** is "One person owns your data work."
5. **The privacy line** says "We count visits with Vercel Web Analytics", because the free plan counts visits only.

## Changes from Jake, 2026-10-13 (round 3)

These override everything above and below where they conflict.

1. **One to one.** Ignition APG is one performance data specialist plus our software, one to one with each department.
2. **No "data team".** The site never says "data team", or "team" for the service, until Jake says there are two or more specialists. Every earlier "data team" in this brief now reads "performance data specialist" or "we". The approved vision in 3.4 was edited the same way.
3. **The term.** "Performance data specialist" always means the Ignition person. "Your specialist" is the short form. "Our software" means BASIS.
4. **New words:**
   - Hero label: "A performance data specialist for your athletic department".
   - Hero text: "Ignition APG gives each department its own performance data specialist, supported by our software. Your specialist collects, checks, connects, and explains athlete data."
   - Site description: "Ignition APG gives each college athletic department its own performance data specialist. We collect, check, connect, and explain athlete data. Every decision stays with your staff."
5. **The call is 30 minutes.** The button is "Book a 30-minute workflow review" everywhere. Step 1 of "How it starts" is "A 30-minute call". "30-minute" is now the only number on the site. Earlier "20-minute" lines in this brief are history.

## Changes from Jake, 2026-10-13 (round 4)

1. **"Who we are" is Jake's new text.** The words are in `docs/MESSAGE.md` section 7. New facts from Jake:
   - Ignition APG began with a simple mission: help every athlete train like a pro.
   - The company has over 20 years of history bringing the principles, standards, and problem-solving approach of elite performance programs to athletes at every level.
   - Well-resourced organizations often have specialized technical staff for performance data. In many other programs, coaches, sport scientists, graduate assistants, and interns do that work alongside their main jobs.
2. **A second allowed number:** "over 20 years", the company's history. With "30-minute", these are the only numbers on the site.
3. **The Stage 2 design pages are removed** from the site. Their screenshots stay in `docs/directions/` as a record.

## Changes from Jake, 2026-10-15 (logo)

1. **The company logo is on the site** (Option D, approved by Jake): the flame and "Ignition Athletic Performance Group" in the header and footer, so visitors learn what APG stands for. The lettering is recoloured to the site's ink. The flame is the browser-tab icon.
2. **Not used:** the navy "IGNITION" lettering, and any logo under "Who we are".

## 3.1 Job of the site
Get a qualified college performance leader to book a 20-minute call with Jake.

## 3.2 Visitor
- Primary: Director of Sports Science, Director of High Performance, or Director of Strength and Conditioning at a US college athletic department. Division I first.
- Secondary: sport scientists and head athletic trainers, who often forward the link to their director.
- What they want: numbers they can trust without spending their week fixing spreadsheets.
- What they fear: another software contract, a vendor that oversteps into athlete decisions, and athlete data leaving their control.

## 3.3 Action
- Primary action: "Book a 20-minute data audit call." Jake confirms the name at gate 1.
- The booking page (Cal.com or Calendly, Jake supplies the link) asks four questions: name, role, school and sports, and the data problem that costs the most time. These answers decide whether a booking is qualified.
- Secondary action: email Jake. Jake supplies the address.

## 3.4 Message (approved by Jake)
- Vision: "Every athletic department deserves numbers it can trust. Ignition gives each department its own performance data specialist, supported by BASIS software, who collects, checks, connects, and explains athlete data. When a number looks wrong, we find the cause and fix it. Every decision stays with coaches and clinicians."
- Subtitle (hero heading): "Athlete data your staff can trust."
- Problem: "Performance staff cannot trust their numbers, and nobody owns fixing them."
- Department message (rebuild in full at gate 1 from these approved parts): "Your staff should coach, not fix spreadsheets." "We work alongside the systems you already use."
- Customer language (Jake supplies at gate 1): 3 to 5 phrases he has heard directors and sport scientists say about their data. Use their words in the problem section. Until Jake supplies them, mark each slot `[JAKE: phrase]`. Never invent a quote.

## 3.5 Page outline (one page, plus a privacy page and a thank-you page)
1. Hero. The subtitle as the heading. One sentence from the vision. The primary button. Under the button: "Every decision stays with your coaches and clinicians."
2. Problem. The problem line. Three short symptoms in the visitor's own words.
3. What you can hand us. The list in 3.6, grouped under the four verbs from the vision: collect, check, connect, explain. Make it easy to scan. This section answers "What exactly do I get?"
4. What stays with your staff. The second list in 3.6. Give it equal visual weight to section 3. These limits are a reason to trust Ignition, not small print.
5. How it starts. 1) A 20-minute call. 2) A review of one export from one system you use. 3) A written summary of what we found and a plan. Jake confirms these steps at gate 1. Also state here: "Your staff reach us by email, Slack, or text. No new login is needed to ask a question."
6. Questions. "Do you replace our software?" "Which systems do you work with?" "Do you make decisions about athletes?" "How do you protect athlete data?" "What does it cost?" Jake writes or approves every answer. Mark open answers `[JAKE: answer]`. Draft for "Which systems do you work with?": "Your staff send the exports their systems already produce. We need no new connections and no IT project."
7. Founder. 60 to 100 words. Jake writes or approves it. A draft may use only what Jake has stated: 20 years in strength and conditioning across college and private sector, NFL Combine preparation, and current work as a remote sports data analyst handling team GPS data.
8. Final call to action. The primary button again.

## 3.6 Delegation lists
Each item comes from Ignition's task library. Every task there traces to real job postings or practitioner input. The task IDs are for traceability only and never appear on the page. Jake confirmed all 12 items on 2026-10-12, after an audit of the BASIS code. Use the wording below. Most items are true because a person does the work with BASIS support, so the copy must never imply that software does them automatically.

What you can hand us:

| Group | Item, as it may appear | Task IDs |
|---|---|---|
| Collect | We collect the exports from each of your systems. | PDS-W1-T1 |
| Collect | We keep every original file and log what arrived and what is missing. | PDS-W1-T2 |
| Check | We find missing, duplicate, and wrong values. | PDS-W1-T5 |
| Check | When a number looks wrong, we find the cause. We correct it with your staff, or we exclude it and record the reason. | PDS-W1-T6, PDS-W1-T7 |
| Check | Every number links back to its source file. We review every flagged number before a report goes out. | PDS-W2-T4 |
| Connect | We match each athlete across your systems. | PDS-W1-T3 |
| Connect | We convert every value to the same units. We record each system's definitions, so different measures are never mixed. | PDS-W1-T4 |
| Connect | We link GPS, testing, and other data to the same athlete. | PDS-W3-T4 |
| Explain | We build and update the reports your staff use. | PDS-W2-T2 |
| Explain | We explain what each report shows and what it cannot show. | PDS-W2-T5 |
| Explain | Message us by email, Slack, or text. We answer data questions from your staff. | PDS-W7-T1 |
| Explain | We give you a written guide to your sources, definitions, and methods. | PDS-W3-T5, PDS-W3-T6 |

Do not promise a response time. Do not promise custom reports. Transform and synthesis "what you can hand us list". Do not mention TASK IDS. 

What stays with your staff:

| Item, as it may appear | Task IDs |
|---|---|
| Readiness, load, and return-to-play decisions. | APS-W3-T5, APS-W5-T4, APS-W1-T10 |
| Which athletes need a conversation, and what changes in training. | APS-W1-T8, APS-W1-T10 |
| Training plans and sessions. | APS-W9-T1, APS-W9-T2 |
| Putting devices on athletes and running test sessions on site. | APS-W1-T1, APS-W4-T3 |
| Who can see athlete data. You set the rules and we follow them. | PDS-W4-T1 |
| Your data strategy and which tools to buy. | PDS-W8-T1, PDS-W6-T4 |

Do not add items. Do not add wellness, questionnaire, or exception-flag items.
