import { getCollection, render } from "astro:content";
import rss from "@astrojs/rss";
import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { transform, walk } from "ultrahtml";
import sanitize from "ultrahtml/transformers/sanitize";
import { getContainerRenderer as getMDXRenderer } from "@astrojs/mdx";
import { loadRenderers } from "astro:container";
import { formatTitle } from "@/util/blog.util.ts";

/**
 * @typedef {import('astro').APIContext} Context
 * @typedef {import('@astrojs/rss').RSSFeedItem} RSSFeedItem
 */

/**
 * GET endpoint handler
 * @param {Context} context
 * @returns {Promise<Response>}
 */
export const GET = async (context) => {
  let baseUrl = context.site?.href || "";
  if (baseUrl.at(-1) === "/") baseUrl = baseUrl.slice(0, -1);

  // Load MDX renderer. Other renderers for UI frameworks (e.g. React, Vue, etc.) would need adding here if you were using those.
  const renderers = await loadRenderers([getMDXRenderer()]);

  const posts = (await getCollection("Blog")).sort((a, b) =>
    // Sort by publication date descending.
    a.data.date > b.data.date ? -1 : 1,
  );

  const container = await AstroContainer.create({ renderers });

  const items = /** @type {Array<RSSFeedItem>} */ ([]);
  for (const post of posts) {
    const { Content } = await render(post);
    // Use the Astro container to render the content to a string.
    const html = await container.renderToString(Content);

    // Process and sanitize the raw content:
    // - Removes `<!DOCTYPE html>` preamble
    // - Makes link `href` and image `src` attributes absolute instead of relative
    // - Strips any `<script>` and `<style>` tags
    // Thanks @delucis — https://github.com/delucis/astro-blog-full-text-rss/blob/latest/src/pages/rss.xml.ts
    const content = await transform(html.replace(/^<!DOCTYPE html>/, ""), [
      async (node) => {
        await walk(node, (node) => {
          if (node.name === "a" && node.attributes.href?.startsWith("/")) {
            node.attributes.href = baseUrl + node.attributes.href;
          }
          if (node.name === "img" && node.attributes.src?.startsWith("/")) {
            node.attributes.src = baseUrl + node.attributes.src;
          }
        });
        return node;
      },
      sanitize({ dropElements: ["script", "style"] }),
    ]);

    items.push({
      title: formatTitle(post.id),
      pubDate: post.data.date,
      link: `/blog/${post.slug}`,
      content: `
        <![CDATA[
          ${content}
        ]]>
        `,
    });
  }
  return rss({
    title: "Károly Török's personal blog",
    description: "Posts published on Károly Török's blog",
    site: context.url || "",
    items,
    customData: `
      <language>en-GB</language>
      `,
    stylesheet: "/rss.xsl",
    trailingSlash: false,
  });
};
