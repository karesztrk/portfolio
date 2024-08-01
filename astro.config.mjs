import { defineConfig } from "astro/config";
import nuDiscoTheme from "./nu-disco-dark.color-theme.json";
import { remarkReadingTime } from "./remark-reading-time.mjs";
import { browserslistToTargets } from "lightningcss";
import browserslist from "browserslist";
import rehypeScrollToTop from "@benjc/rehype-scroll-to-top";
import mdx from "@astrojs/mdx";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import Anchor from "./src/assets/images/icons/Anchor.svg?raw";
import { fromHtml } from "hast-util-from-html";
import { h } from "hastscript";
import { toString } from "hast-util-to-string";
import rehypeFigure from "rehype-figure";
import { VitePWA } from "vite-plugin-pwa";

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
    plugins: [
      VitePWA({
        registerType: "autoUpdate",
        manifest: {
          short_name: "Károly Török portfolio",
          name: "Károly Török portfolio",
          description:
            "This is an application that introduces myself and collects my projects and interests.",
          icons: [
            { src: "/icon-192.png", type: "image/png", sizes: "192x192" },
            { src: "/icon-512.png", type: "image/png", sizes: "512x512" },
          ],
          start_url: "/hello",
          display: "standalone",
          theme_color: "#fdd22b", // Calculated from oklch(87.5% 0.17 92.68)
          background_color: "#01111e", // Calculated from hsl(207, 93%, 6%)
        },
      }),
    ],
  },
});
