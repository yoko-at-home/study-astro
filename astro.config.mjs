import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
// import vercel from "@astrojs/vercel/serverless";
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [preact(), tailwind()],
  // adapter: vercel({}),
  adapter: netlify()
});