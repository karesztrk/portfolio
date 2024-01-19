import { defineConfig } from "astro/config";
import nuDiscoTheme from "./nu-disco-dark.color-theme.json";
import netlify from "@astrojs/netlify";

import mdx from "@astrojs/mdx";

export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: nuDiscoTheme,
    },
  },
  integrations: [mdx()],
  output: "hybrid",
  adapter: netlify(),
});
