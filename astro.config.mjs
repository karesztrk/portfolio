import { defineConfig } from "astro/config";
import nuDiscoTheme from "./nu-disco-dark.color-theme.json";

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: { theme: nuDiscoTheme },
  },
});
