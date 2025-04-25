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
    fonts: [
      {
        provider: "local",
        name: "Recursive",
        cssVariable: "--font-recursive",
        variants: [
          {
            /* Latin */
            /* Variable with MONO & CASL axis values */
            weight: 400,
            style: "normal",
            src: [
              {
                url: "./src/assets/fonts/Recursive-Normal-Var.woff2",
                tech: "variations",
              },
            ],
            display: "fallback",

            // src:
            //   local("Recursive"),
            //   url("/fonts/Recursive-Normal-Var.woff2") format(woff2) tech(variations);
            unicodeRange: [
              "U+0000-00FF",
              "U+0131",
              "U+0152-0153",
              "U+02BB-02BC",
              "U+02C6",
              "U+02DA",
              "U+02DC",
              "U+0304",
              "U+0308",
              "U+0329",
              "U+2000-206F",
              "U+2074",
              "U+20AC",
              "U+2122",
              "U+2191",
              "U+2193",
              "U+2212",
              "U+2215",
              "U+FEFF",
              "U+FFFD",
            ],
          },
          {
            weight: 700,
            style: "normal",
            src: [
              {
                url: "./src/assets/fonts/Recursive-Bold.woff2",
                tech: "variations",
              },
            ],
            display: "fallback",
            unicodeRange: [
              "U+0000-00FF",
              "U+0131",
              "U+0152-0153",
              "U+02BB-02BC",
              "U+02C6",
              "U+02DA",
              "U+02DC",
              "U+0304",
              "U+0308",
              "U+0329",
              "U+2000-206F",
              "U+2074",
              "U+20AC",
              "U+2122",
              "U+2191",
              "U+2193",
              "U+2212",
              "U+2215",
              "U+FEFF",
              "U+FFFD",
            ],
          },
        ],
      },
      {
        provider: "local",
        name: "Departure",
        cssVariable: "--font-departure",
        variants: [
          {
            weight: 400,
            style: "normal",
            display: "fallback",
            //   size-adjust: 105%;
            src: ["./src/assets/fonts/DepartureMono-Regular.woff2"],
          },
        ],
      },
    ],
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
