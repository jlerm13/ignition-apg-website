// All page copy for the Ignition APG site lives in this file.
// Jake approved these words at gate 1 (docs/MESSAGE.md, version 4, 2026-10-12).
// Edit words here, not in the page layouts. Rules for any change are in CLAUDE.md.

export const links = {
  booking: "https://calendly.com/ja-lerman-ignitionapg/intro-call",
  email: "ja.lerman@ignitionapg.com",
};

export const site = {
  name: "Ignition APG",
  pageTitle: "Ignition APG: athlete data your staff can trust",
  description:
    "Ignition APG gives college athletic departments a data team. We collect, check, connect, and explain athlete data. Every decision stays with your staff.",
  bookButton: "Book a 20-minute data audit call",
  emailLink: "Email us",
};

export const hero = {
  label: "A data team for college athletic departments",
  heading: "Athlete data your staff can trust.",
  text: "Ignition APG gives each department a data team: performance data specialists who collect, check, connect, and explain athlete data.",
  underButton: "Every decision stays with your coaches and clinicians.",
};

export const problem = {
  heading: "Performance staff cannot trust their numbers, and nobody owns fixing them.",
  symptoms: [
    "Your sport scientist cleans exports when they should be with athletes and coaches.",
    "The report arrives after the meeting where the coaches needed it.",
    "One person runs the GPS, the force plates, and the AMS, and the systems do not connect.",
  ],
  closingLine: "Each new system adds work when nobody owns the workflow.",
  departmentMessage: [
    "Your staff should coach, not fix spreadsheets.",
    "We work alongside the systems you already use.",
    "When a number looks wrong, we find the cause and fix it.",
  ],
};

export const handUs = {
  heading: "What you can hand us",
  text: "Our data specialists do this work for your staff. On the call, we show you how.",
  groups: [
    {
      verb: "Collect",
      items: ["We collect the exports your systems already produce, and we keep every original file."],
    },
    {
      verb: "Check",
      items: [
        "We find missing, duplicate, and wrong values. We find the cause and fix it with your staff.",
        "Every number links back to its source file. We review every flagged number before a report goes out.",
      ],
    },
    {
      verb: "Connect",
      items: ["We match each athlete across your systems. We link GPS, testing, and other data to that athlete."],
    },
    {
      verb: "Explain",
      items: ["We build and update the reports your staff use. We answer their data questions by email, Slack, or text."],
    },
  ],
};

export const staysWithStaff = {
  heading: "We handle the data work. Your staff keep the judgment.",
  text: "We support this work with checked data. We never take it over.",
  items: [
    "Readiness, load, and return-to-play decisions.",
    "Which athletes need a conversation, and what changes in training.",
    "Training plans and sessions.",
    "Putting devices on athletes and running test sessions on site.",
    "Who can see athlete data. You set the rules and we follow them.",
    "Your data strategy and which tools to buy.",
  ],
};

export const howItStarts = {
  heading: "How it starts. Free.",
  steps: [
    {
      title: "A 20-minute call",
      text: "You tell us about your systems and the data problem that costs your staff the most time.",
    },
    {
      title: "A review of one export",
      text: "You send one export from one system you use. You can remove athlete names first. We check every value.",
    },
    {
      title: "What we found",
      text: "We walk you through what we found on a short call. You get a written summary and a plan for your data.",
    },
  ],
  closingLine: "Staff ask questions by email, Slack, or text. They see results on our platform.",
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
      a: "You get a data specialist from Ignition APG. They use BASIS, our software, to check and connect your data. Your staff log in to our platform to see the results. To ask a question, they message us by email, Slack, or text.",
    },
    {
      q: "Which systems do you work with?",
      a: "Your staff send the exports their systems already produce. We need no new connections and no IT project.",
    },
    {
      q: "Do you make decisions about athletes?",
      a: "No. Readiness, load, and return-to-play decisions stay with your coaches and clinicians. We collect, check, connect, and explain the data they use.",
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
    "We began as a sports performance training company. We trained athletes of all ages and solved performance problems for our partners.",
    "Our data team is the next step in that work. It is now our main focus.",
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
    "Before the call, pick one export from one system you use. We can review it after we talk.",
  ],
  emailLine: "Questions before then? Email us at",
  backLink: "Back to the home page",
};

export const privacy = {
  heading: "Privacy",
  paragraphs: [
    "This page covers this website only.",
    "This site uses no cookies.",
    "We count visits and button clicks with Vercel Web Analytics. It uses no cookies and does not identify you.",
    "When you book a call, Calendly collects your name, email, role, school and sports, and your answer about your data problem.",
    "We use that information to prepare for the call.",
    "Calendly handles the booking. We do not sell your information or add you to a mailing list.",
  ],
  emailLine: "To see or delete your information, email",
  // A practical date, not a statistic. check-claims allows digits only on this line.
  lastUpdated: "Last updated: October 12, 2026",
};

export const notFound = {
  heading: "Page not found",
  text: "This page does not exist.",
  homeLink: "Go to the home page",
};
