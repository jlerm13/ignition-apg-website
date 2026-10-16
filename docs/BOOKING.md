# Calendly setup steps

Your booking link: https://calendly.com/ja-lerman-ignitionapg/intro-call

Do these steps in Calendly on a computer. Calendly sometimes moves or renames its menus. If a menu name below does not match, look for the closest one.

## 1. Set the length and the name

1. In Calendly, open **Scheduling** (or **Event Types**). Click the "intro-call" event to edit it.
2. Set **Duration** to **30 min**.
3. Set **Event name** to **30-minute workflow review**. This matches the button on the site (changed 2026-10-13). If the event has an older name, rename it.
4. In **Location**, pick how you meet: Zoom, Google Meet, or phone.
5. Leave the event link as `intro-call`. If you change it, tell me, so I can update the site.

## 2. Add the booking questions

Calendly always asks for **Name** and **Email**. Add four more questions. Each one decides whether a booking is qualified.

1. In the event, open **Booking form** (some accounts call it **Invitee Questions**).
2. Click **Add new question** four times, with these settings (added the fourth on 2026-10-16):

| Question | Answer type | Required |
|---|---|---|
| What is your role? | One line | Yes |
| Which school and sports do you work with? | Multiple lines | Yes |
| Which data problem costs your staff the most time? | Multiple lines | Yes |
| Who handles that work today? | One line | Yes |

3. Click **Save**.

The last question is the one you prepare the call from. It is also the "most painful problem first" idea, so you know the problem before you talk.

## 2b. Prefill from the hero picker (updated 2026-10-16)

The hero asks three questions. Each answer fills a Calendly booking question from the link, so visitors do not type it twice:

- `?a1=` fills the **first question you added**, "What is your role?".
- `?a3=` fills the **third question you added**, "Which data problem costs your staff the most time?". - `?a4=` fills the **fourth question you added**, "Who handles that work today?". Name and email do not count, because Calendly adds those itself.

For this to work, check three things under the event's **Booking form** (or **Invitee Questions**):

1. **The order is: role, then school and sports, then the data problem, then who handles that work.** If you reorder them, tell me and I will change the links.
2. **Role, problem, and who handles it are all text questions** ("One line" or "Multiple lines"). Do not change them to a drop-down or radio buttons. The text must match the picker exactly, and "Other role" visitors type their own.
3. **None of these questions is hidden.** Visitors can still change what the picker filled in.

The picker sends these values.

Role (`a1`):
- Performance director
- Sport science director
- Strength and conditioning director
- Sport scientist or performance analyst
- Sport coach

Problem (`a3`). "Something else" sends no problem, so the box is empty:
- Exporting files and refreshing reports
- Finding missing or wrong data
- Connecting data from different systems
- Getting reports ready before coaches need them

Who handles it (`a4`):
- A strength or performance coach
- A sport scientist
- A graduate assistant or intern
- A data or technology specialist
- Several people share it
- Nobody consistently owns it

**Test it** (I cannot open calendly.com from my environment, so this is yours):

1. Open this link: https://calendly.com/ja-lerman-ignitionapg/intro-call?a1=Sport%20scientist%20or%20performance%20analyst&a3=Connecting%20data%20from%20different%20systems&a4=Several%20people%20share%20it
2. Pick any time.
3. On the form, "What is your role?" should say **Sport scientist or performance analyst**. The data problem box should say **Connecting data from different systems**. The fourth box should say **Several people share it**. School and sports should be empty.
4. Close the page without booking.

If a box is empty but the role box is filled, tell me that question's position and type, and I will fix the links.

## 3. Send people to the thank-you page after they book

The site counts a booking when someone lands on its thank-you page. Calendly must send them there.

1. In the event, open **Confirmation page** (it may sit under **Notifications and Cancellation Policy** or **Booking page options**).
2. Choose **Redirect to an external site**.
3. Enter the thank-you page address:
   - **Before launch (old):** the preview address. No longer needed.
   - **After launch:** `https://ignition-apg-website.vercel.app/thank-you/`.
4. Leave **Pass event details to your redirected page** turned **off**. The thank-you page does not need the visitor's details.
5. Click **Save**.

**Check your plan.** The redirect is a paid Calendly feature. If your account cannot choose "Redirect to an external site," tell me. There is a second way: the booking opens inside the site after a click, and the site counts the booking itself. Its cost is that Calendly may then set cookies, so the privacy page needs one more line. I will handle that if needed.

## 4. Test it

After the redirect is set and the site is live:

1. Open the site on your phone. Tap **Book a 30-minute workflow review**.
2. Book a time with test answers.
3. Check that you land on the page that says **Your call is booked.**
4. Cancel the test booking in Calendly.

Tell me the result. This test is part of the Stage 4 checks.
