// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// The live address. Set SITE_URL when the domain is connected in Stage 5.
// Until then this is the expected Vercel address, used for canonical links and the sitemap.
const SITE_URL = process.env.SITE_URL || "https://ignition-apg-website.vercel.app";

export default defineConfig({
  site: SITE_URL,
  output: "static",
  trailingSlash: "ignore",
  integrations: [
    sitemap({
      // Review pages and the thank-you page stay out of search.
      filter: (page) => !page.includes("/directions") && !page.includes("/thank-you"),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
