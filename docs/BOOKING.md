# Calendly setup steps

Your booking link: https://calendly.com/ja-lerman-ignitionapg/intro-call

Do these steps in Calendly on a computer. Calendly sometimes moves or renames its menus. If a menu name below does not match, look for the closest one.

## 1. Set the length and the name

1. In Calendly, open **Scheduling** (or **Event Types**). Click the "intro-call" event to edit it.
2. Set **Duration** to **20 min**.
3. Set **Event name** to **20-minute data audit call**. This matches the button on the site.
4. In **Location**, pick how you meet: Zoom, Google Meet, or phone.
5. Leave the event link as `intro-call`. If you change it, tell me, so I can update the site.

## 2. Add the booking questions

Calendly always asks for **Name** and **Email**. Add three more questions. Each one decides whether a booking is qualified.

1. In the event, open **Booking form** (some accounts call it **Invitee Questions**).
2. Click **Add new question** three times, with these settings:

| Question | Answer type | Required |
|---|---|---|
| What is your role? | One line | Yes |
| Which school and sports do you work with? | Multiple lines | Yes |
| Which data problem costs your staff the most time? | Multiple lines | Yes |

3. Click **Save**.

The last question is the one you prepare the call from. It is also the "most painful problem first" idea, so you know the problem before you talk.

## 2b. Role prefill (added 2026-10-13)

The hero now asks "What best describes your role?" and shows five buttons. Each button opens your Calendly page with the role already typed into the role question. Calendly does this from the link: `?a1=` fills the **first question you added** to the booking form. Name and email do not count, because Calendly adds those itself.

For this to work, check two things in Calendly, under the event's **Booking form** (or **Invitee Questions**):

1. **"What is your role?" must be the first question you added**, directly under Name and Email. If it is not first, drag it to the top. If you want it somewhere else, tell me its position (second is `a2`, third is `a3`) and I will change the links.
2. **Its answer type must be "One line"**, as step 2 above says. With One line, any text fills in. If you changed it to multiple choice (radio buttons or a drop-down), the five options must match the button text exactly, letter for letter:
   - Director of High Performance
   - Director of Sports Science
   - Director of Strength and Conditioning
   - Sport scientist
   - Athletic trainer

   One line is simpler. With it, "Other role?" visitors can type anything.

**Test it** (I cannot open calendly.com from my environment, so this is yours):

1. Open this link: https://calendly.com/ja-lerman-ignitionapg/intro-call?a1=Sport%20scientist
2. Pick any time.
3. On the form, "What is your role?" should already say **Sport scientist**. Visitors can still change it.
4. Close the page without booking.

If the role box is empty, tell me what the question's position and type are, and I will fix the links.

## 3. Send people to the thank-you page after they book

The site counts a booking when someone lands on its thank-you page. Calendly must send them there.

1. In the event, open **Confirmation page** (it may sit under **Notifications and Cancellation Policy** or **Booking page options**).
2. Choose **Redirect to an external site**.
3. Enter the thank-you page address:
   - **Now, for your test booking:** `https://ignition-apg-website-git-claude-clever-526011-jlerm13s-projects.vercel.app/thank-you/`. This preview address is private, so only you, signed in to Vercel, will see the page after booking.
   - **After launch:** `https://<your site address>/thank-you`.
4. Leave **Pass event details to your redirected page** turned **off**. The thank-you page does not need the visitor's details.
5. Click **Save**.

**Check your plan.** The redirect is a paid Calendly feature. If your account cannot choose "Redirect to an external site," tell me. There is a second way: the booking opens inside the site after a click, and the site counts the booking itself. Its cost is that Calendly may then set cookies, so the privacy page needs one more line. I will handle that if needed.

## 4. Test it

After the redirect is set and the site is live:

1. Open the site on your phone. Tap **Book a 20-minute data audit call**.
2. Book a time with test answers.
3. Check that you land on the page that says **Your call is booked.**
4. Cancel the test booking in Calendly.

Tell me the result. This test is part of the Stage 4 checks.
