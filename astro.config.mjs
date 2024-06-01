import { defineConfig } from "astro/config";
import nuDiscoTheme from "./nu-disco-dark.color-theme.json";
import { remarkReadingTime } from "./remark-reading-time.mjs";
import { browserslistToTargets } from "lightningcss";
import browserslist from "browserslist";
import rehypeScrollToTop from "@benjc/rehype-scroll-to-top";
import mdx from "@astrojs/mdx";

export default defineConfig({
  routes: {
    "/": "/hello",
  },
  markdown: {
    shikiConfig: {
      theme: nuDiscoTheme,
    },
    remarkPlugins: [remarkReadingTime],
    rehypePlugins: [
      [
        rehypeScrollToTop,
        {
          topLink: { disabled: true },
          bottomLink: {
            text: "Back to top",
            ariaLabel: "Back to top",
          },
        },
      ],
    ],
  },
  integrations: [mdx()],
  vite: {
    css: {
      transformer: "lightningcss",
      lightningcss: {
        targets: browserslistToTargets(browserslist(">= 0.25%")),
      },
    },
    build: {
      cssMinify: "lightningcss",
    },
  },
});
