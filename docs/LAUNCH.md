# Launch notes

The site went live on 2026-10-13, when Jake merged PR #1. Address: https://ignition-apg-website.vercel.app

## 1. Launch checklist (Jake)

1. Open the live site on your phone and your laptop. Check that it loads and the buttons open Calendly.
2. Vercel: open the project, go to the **Analytics** tab, and click **Enable**.
3. Calendly: set the confirmation page to redirect to `https://ignition-apg-website.vercel.app/thank-you/`. Steps are in `docs/BOOKING.md`, section 3.
4. Calendly: check the event is 30 min and named "30-minute workflow review", and that "What is your role?" is the first added question (One line).
5. Make one test booking on your phone. You should land on "Your call is booked." Then cancel the test booking. This closes audit check 11.

## 2. Weekly numbers (every Monday, 10 minutes)

| Number | Where | Why |
|---|---|---|
| Visits | Vercel, Analytics tab | Are people opening the link? |
| Bookings | Calendly, Scheduled events | The site's one job. |
| Qualified bookings | Calendly answers: role, school and sports, data problem | A performance staff member with a real data problem. |
| Thank-you page views | Vercel, Analytics, Pages | Should match bookings. If lower, check the redirect. |

The click events (`cta_click`, `booking_opened`, `email_click`) are built in, but the free Vercel plan does not record them. They switch on if you move to Vercel Pro.

## 3. First review: after 2 weeks or 10 bookings, whichever comes first

Bring the weekly numbers and the Calendly answers. Look at:

- Which roles booked. Do directors book, or do sport scientists book and forward?
- Which data problems they named. Do they match the page's problem section?
- Visits against bookings. Many visits and few bookings points to the page. Few visits points to outreach.

Decide one change at a time, then measure again.

## 4. First 20 performance leaders

- **Who:** Directors of Sports Science, High Performance, and Strength and Conditioning at US college athletic departments, Division I first. Add sport scientists and head athletic trainers who forward to their director.
- **How:** a short personal message from you with the link. One line on the problem, one line on the offer, then the link. Never paste a template that names other schools.
- **Track:** one simple list with name, role, date sent, reply, booked. Follow up once after a week. Stop after that.

## 5. Later options (none needed now)

- Your own domain instead of the `vercel.app` address. Tell me the domain and I will update the site address and the Calendly redirect steps.
- A "Sample data" screenshot from the BASIS demo school for the page.
- One plain fact about where athlete files are stored, for "How do you protect athlete data?". No compliance names without proof.
