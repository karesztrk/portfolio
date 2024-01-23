import { defineConfig } from "astro/config";
import nuDiscoTheme from "./nu-disco-dark.color-theme.json";
import netlify from "@astrojs/netlify";
import { remarkReadingTime } from "./remark-reading-time.mjs";

import mdx from "@astrojs/mdx";

export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: nuDiscoTheme,
    },
    remarkPlugins: [remarkReadingTime],
  },
  integrations: [mdx()],
  output: "hybrid",
  adapter: netlify(),
});
