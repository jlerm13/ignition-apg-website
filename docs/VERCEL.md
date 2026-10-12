# Link Vercel to this project

You do this once, on a computer, in about five minutes. Vercel may rename a button. If a step below does not match, look for the closest one.

## 1. Import the project

1. Sign in at vercel.com.
2. Click **Add New**, then **Project**.
3. Under **Import Git Repository**, connect GitHub if Vercel asks. When GitHub asks which repositories Vercel may see, choose **Only select repositories** and pick **ignition-apg-website**.
4. Click **Import** next to **ignition-apg-website**.

## 2. Check the settings

Vercel reads the project and fills these in. Leave them as they are:

- **Framework Preset:** Astro
- **Build Command:** `npm run build`
- **Output Directory:** `dist`

Click **Deploy**.

**Expect a failed or empty first build.** That build is from the `main` branch, which does not hold the site yet. The site lives on the working branch until you approve a launch in Stage 5.

## 3. Find the preview link

1. Tell me Vercel is linked. I then push a small update to the working branch, and Vercel builds a preview from it.
2. In Vercel, open the project and click **Deployments**. Look for the newest deployment from the branch `claude/clever-ride-f3mrjh`. Click it, then click **Visit**.
3. Add `/directions/` to the end of the address. That page links to all four directions.
4. Send me the preview address. I need it for the Calendly redirect.

**On your phone:** Vercel protects preview links by default. Only people signed in to your Vercel account can open them. Sign in to Vercel on your phone once, or open the link from the Vercel app.

## Later

- **Stage 3:** we turn on Vercel Web Analytics. It is one switch in the project's **Analytics** tab.
- **Stage 5:** we connect your domain. I will give you the exact DNS steps then.
