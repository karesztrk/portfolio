import { defineConfig } from "astro/config";
import nuDiscoTheme from "./nu-disco-dark.color-theme.json";

import mdx from "@astrojs/mdx";

export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: nuDiscoTheme,
    },
  },
  integrations: [mdx()],
});
