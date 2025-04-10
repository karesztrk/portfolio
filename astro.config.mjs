import { defineConfig } from "astro/config";
import nuDiscoTheme from "./nu-disco-dark.color-theme.json";
import { remarkReadingTime } from "./remark-reading-time.mjs";
import { browserslistToTargets } from "lightningcss";
import browserslist from "browserslist";
import mdx from "@astrojs/mdx";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import Anchor from "./src/assets/images/icons/Anchor.svg?raw";
import { fromHtml } from "hast-util-from-html";
import { h } from "hastscript";
import { toString } from "hast-util-to-string";
import rehypeFigure from "rehype-figure";
import rehypeWrap from "rehype-wrap-all";
import { rehypeAppendHtml } from "./rehype-append.mjs";
import Actions from "./src/components/Actions.html?raw";

export default defineConfig({
  prefetch: true,
  experimental: {
    clientPrerender: true,
  },
  routes: {
    "/": "/hello",
  },
  redirects: {
    "/": "/hello",
  },
  markdown: {
    shikiConfig: {
      theme: nuDiscoTheme,
    },
    remarkPlugins: [remarkReadingTime],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          content: (node) => {
            return [
              h("span.visually-hidden", 'Navigate to "', toString(node), '"'),
              fromHtml(Anchor),
            ];
          },
          properties: {
            class: "anchor-link",
          },
        },
      ],
      rehypeFigure,
      [
        rehypeWrap,
        {
          selector: "table",
          wrapper: "div.table-wrapper",
        },
      ],
      [
        rehypeAppendHtml,
        {
          element: fromHtml(Actions),
        },
      ],
    ],
  },
  integrations: [mdx()],
  vite: {
    css: {
      transformer: "lightningcss",
      lightningcss: {
        targets: browserslistToTargets(
          browserslist(">0.3%, last 2 versions, not dead"),
        ),
      },
    },
    build: {
      cssMinify: "lightningcss",
    },
  },
});
