// All page copy for the Ignition APG site lives in this file.
// Jake approved these words at gate 1 (docs/MESSAGE.md, version 4, 2026-10-12).
// Edit words here, not in the page layouts. Rules for any change are in CLAUDE.md.

export const links = {
  booking: "https://calendly.com/ja-lerman-ignitionapg/intro-call",
  email: "ja.lerman@ignitionapg.com",
};

export const site = {
  name: "Ignition APG",
  // The logo spells out the full name, so visitors learn what APG stands for (Jake, 2026-10-15).
  logoAlt: "Ignition Athletic Performance Group",
  pageTitle: "Ignition APG: performance data your staff can trust",
  description:
    "Ignition APG gives each college athletic department its own performance data specialist. We organize, check, connect, and deliver performance data. Every decision stays with your staff.",
  bookButton: "Book a 30-minute workflow review",
  emailLink: "Email us",
};

export const hero = {
  label: "A performance data specialist for your athletic department",
  heading: "Performance data your staff can trust.",
  // Rewritten 2026-11-13: the gap first, then the person and the software.
  text: "Your department has the devices and the staff who make the decisions. Ignition APG gives you a performance data specialist who owns the work in between, supported by our software.",
  underButton: "Your staff keep the context, interpretation, and decisions.",
};

// Hero picker (Jake, 2026-10-16). Three taps: the role, what takes the most time, and who handles that work today.
// Calendly opens with the answers filled in (a1 = role, a3 = problem, a4 = who handles it). Order and types of the
// Calendly questions: docs/BOOKING.md.
export const rolePicker = {
  prompt: "What best describes your role?",
  hint: "Your answers fill in the booking form for you.",
  roles: [
    "Performance director",
    "Sport science director",
    "Strength and conditioning director",
    "Sport scientist or performance analyst",
    "Sport coach",
  ],
  otherLink: "Other role? Book a 30-minute workflow review",
  problem: {
    prompt: "What takes the most time each week?",
    hint: "Choose the closest answer.",
    // Each choice fills the Calendly problem question. "Fix" is not used: BRIEF.md bans it for values.
    choices: [
      // 2026-11-13: "Exporting" became "Cleaning", because the staff still send the exports.
      "Cleaning files and refreshing reports",
      "Finding missing or wrong data",
      "Connecting data from different systems",
      "Getting reports ready before coaches need them",
    ],
    other: "Something else",
  },
  owner: {
    prompt: "Who handles that work today?",
    hint: "Choose the closest answer. Next, you choose a time.",
    choices: [
      "A strength or performance coach",
      "A sport scientist",
      "A graduate assistant or intern",
      "A data or technology specialist",
      "Several people share it",
      "Nobody consistently owns it",
    ],
  },
  back: "Back",
};

// Section 2. Heading by Jake (2026-10-13). Symptoms now give the cause, and the answer is the contrast with
// well-resourced programs (2026-11-13). The booking button moved to the outcomes section.
export const problem = {
  heading: "Performance staff have the data. Nobody owns the work between collection and decision.",
  symptoms: [
    "Staff do not fully trust the numbers, because nobody has time to check them.",
    "High-value staff spend time cleaning files and refreshing reports, because no one else is there to do it.",
    "The report arrives after coaches needed it, because the work waits until someone is free.",
    "Each new system adds work, because the systems do not work together.",
  ],
  contrast: [
    "Well-resourced programs often have a specialist for this work.",
    "In many departments, it falls to a coach, a sport scientist, or a graduate assistant, on top of the main job.",
  ],
};

// Outcomes (Jake, 2026-11-13). What changes for the visitor's staff. They answer the first three symptoms, in order.
// The chain's Connect row answers the fourth.
export const outcomes = {
  heading: "What changes for your staff",
  items: [
    { title: "Your staff can trust the numbers.", text: "We review every flagged number before a report goes out." },
    { title: "Your staff get their time back.", text: "They stop cleaning files and refreshing reports." },
    { title: "Reports arrive before coaches need them.", text: "The work no longer waits until someone is free." },
  ],
};

// The chain (Jake, 2026-11-13): devices and tests, then the four verbs, then decisions. The two ends belong to the
// visitor's staff. The middle is the specialist's work. It replaces the "What you can hand us" list, one line per verb.
// The four lines must match the Items in docs/MESSAGE.md section 3 (scripts/check-claims.mjs).
export const chain = {
  heading: "One person owns your data work.",
  // The first line says why a person is needed (Jake, 2026-11-13).
  text: [
    "Software alone does not close the gap between collection and decision. It takes a person who follows through.",
    "Your specialist works across the systems you already use. Our software does the repeat checks and shows your staff the results.",
  ],
  caption: "Illustration: the chain from devices to decisions.",
  staff: "Your staff",
  specialist: "Your performance data specialist",
  start: {
    title: "Devices and tests",
    text: "Your staff put devices on athletes, run the tests, and send the exports.",
  },
  steps: [
    { verb: "Organize", text: "We organize the exports your systems already produce. We keep every original file and log what is missing." },
    { verb: "Check", text: "We find missing, duplicate, and wrong values. Every number links back to its source file." },
    { verb: "Connect", text: "We match each athlete across your systems. We link GPS, testing, and other data to that athlete." },
    { verb: "Deliver", text: "We build and update the reports your staff use. We explain what each one shows and what it cannot show." },
  ],
  end: {
    title: "Decisions",
    text: "Your staff add context, interpret the information, and make the decisions.",
  },
  closingLine: "On the call, we show you how your specialist does this work.",
};

// Specialist section (Jake, 2026-10-13 and 2026-10-16). A role, with no name, no photo, and no personal story.
// 2026-11-13: the heading is the first sentence of Jake's text. Lines now said in the chain section are gone from here.
export const specialist = {
  heading: "Your specialist becomes an extension of your staff.",
  text: [
    "Send a text, email, or Slack message, whichever your team already uses. You do not get a support queue.",
    "Your specialist learns your systems, your sports, and your weekly rhythm.",
  ],
  who: {
    heading: "Who your performance data specialist is",
    items: [
      "Your performance data specialist has worked in sports performance and in data.",
    ],
  },
  week: {
    heading: "A week with your performance data specialist",
    items: [
      "After each session, your staff send the exports. Your specialist checks them.",
      "When a number looks wrong, your specialist finds the cause. They correct it with your staff, or exclude it and record the reason.",
      "Your staff get checked reports on the schedule you agree.",
      "Any day, your staff message your specialist with data questions.",
      "Each month, your specialist updates your written guide to your sources, definitions, and methods.",
    ],
  },
};

export const staysWithStaff = {
  heading: "We handle the data work. Your staff keep the judgment.",
  text: "These decisions and tasks stay with your staff. We support them with checked data. We never take them over.",
  // The label over the six confirmed lines, so nobody reads them as things we do (Jake, 2026-11-13).
  listLabel: "What stays with your staff",
  // What we are not (Jake, 2026-11-13). Its own row under the six lines.
  not: {
    heading: "What we are not",
    items: [
      { label: "Not interpretation.", text: "We do not tell you what the data means for an athlete." },
      { label: "Not a software product.", text: "Your specialist runs our software. Your staff log in only to see the results." },
      { label: "Not consulting.", text: "We do not advise and leave. We do the work every week." },
    ],
  },
  items: [
    "Readiness, load, and return-to-play decisions.",
    "Which athletes need a conversation, and what changes in training.",
    "Training plans and sessions.",
    "Putting devices on athletes and running test sessions on site.",
    "Who can see athlete data. You set the rules and we follow them.",
    "Your data strategy and which tools to buy.",
  ],
};

// Rewritten by Jake, 2026-10-16. The email, Slack, and text line moved: the specialist section and "What do we get?" say it.
export const howItStarts = {
  heading: "Find the first workflow we could own. Free.",
  steps: [
    {
      title: "Map one recurring workflow",
      text: "On a 30-minute call, you show us which systems are involved, who manages them, and where the process slows down.",
    },
    {
      title: "Review the real handoffs",
      text: "You can share exports, reports, or examples of the process. Remove athlete names first if you like. We look for repeated manual work, missing ownership, and delays between systems.",
    },
    {
      title: "Get a practical next-step plan",
      text: "We walk you through what we found. You get a written summary of the problems, the improvements we recommend, and the first workflow we could own.",
    },
  ],
  closingLine:
    "If the problem fits, we will explain what it looks like when a performance data specialist owns that work. If your systems and staff already cover it reliably, we will say so.",
};

export const questions = {
  heading: "Questions",
  items: [
    {
      q: "Do you replace our software?",
      a: "No. You keep your GPS, force plates, and athlete management system. Your staff send us the exports those systems already produce.",
    },
    {
      q: "What do we get?",
      a: "You get a performance data specialist from Ignition APG. They use BASIS, our software, to check and connect your data. Your staff log in to our platform to see the results. To ask a question, they message us by email, Slack, or text.",
    },
    {
      q: "Which systems do you work with?",
      a: "Your staff send the exports their systems already produce. We need no new connections and no IT project.",
    },
    {
      q: "Do you make decisions about athletes?",
      a: "No. Readiness, load, and return-to-play decisions stay with your coaches and clinicians. We organize, check, connect, and deliver the data they use.",
    },
    {
      q: "How do you protect athlete data?",
      a: "You decide who can see athlete data. You set the rules and we follow them. For the first review, you can remove athlete names before you send the export. We do not share your data with anyone outside your department.",
    },
    {
      q: "What does it cost?",
      a: "The call, the export review, and the written summary are free. After that, the price depends on your sports and systems. You get a fixed monthly price before you commit.",
    },
  ],
};

export const whoWeAre = {
  heading: "Who we are",
  paragraphs: [
    "Ignition APG began with a simple mission: help every athlete train like a pro.",
    "For over 20 years, we have brought the principles, standards, and problem-solving approach of elite performance programs to athletes at every level.",
    "Along the way, we saw another gap. Well-resourced sports organizations often have specialized technical staff for performance data. Many other programs do not.",
    "Today, our focus is giving each of those departments its own performance data specialist. That specialist works across the systems already in place and keeps the recurring data workflow running.",
    "Our focus has evolved, but the principle remains the same: make professional-level support more accessible.",
  ],
};

export const finalCall = {
  heading: "Bring the data problem that costs your staff the most time.",
  emailLine: "Or email us at",
};

export const footer = {
  privacyLink: "Privacy",
};

export const thankYou = {
  heading: "Your call is booked.",
  paragraphs: [
    "Check your email for the confirmation and the calendar invite.",
    "Before the call, you can choose exports, reports, or examples of the process to share. Remove athlete names first if you like. We can review them after we talk.",
  ],
  emailLine: "Questions before then? Email us at",
  backLink: "Back to the home page",
};

export const privacy = {
  heading: "Privacy",
  paragraphs: [
    "This page covers this website only.",
    "This site uses no cookies.",
    "We count visits with Vercel Web Analytics. It uses no cookies and does not identify you.",
    "When you book a call, Calendly collects your name, email, role, and school and sports.",
    "It also collects your answers about your data problem and who handles that work today.",
    "We use that information to prepare for the call.",
    "Calendly handles the booking. We do not sell your information or add you to a mailing list.",
  ],
  emailLine: "To see or delete your information, email",
  // A practical date, not a statistic. check-claims allows digits only on this line.
  lastUpdated: "Last updated: October 16, 2026",
};

export const notFound = {
  heading: "Page not found",
  text: "This page does not exist.",
  homeLink: "Go to the home page",
};
