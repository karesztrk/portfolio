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
import rehypeCast from "./rehype-cast.mjs";

export default defineConfig({
  image: {
    responsiveStyles: true,
    layout: "full-width",
  },
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
      rehypeCast,
    ],
  },
  integrations: [mdx()],
  vite: {
    assetsInclude: ["**/*.cast"],
    plugins: [
      {
        name: "cast-mime-type",
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            if (req.url?.includes(".cast")) {
              res.setHeader("Content-Type", "application/x-asciicast");
            }
            next();
          });
        },
      },
    ],
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
