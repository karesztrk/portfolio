import { visit } from "unist-util-visit";
import { h } from "hastscript";

/**
 * Rehype plugin to convert links with .cast extension to figure elements
 * containing a custom <asciinema-cast> tag. The custom tag is WebComponent
 * that loads the cast lazily.
 *
 * @example
 * // From
 * [Alt text](path/to/file.cast)
 * // Into
 * <figure><asciinema-cast src="path/to/file.cast" /><figcaption>Alt text</figcaption></figure>
 */
export default function rehypeCastLinks() {
  return (tree) => {
    visit(tree, "element", (node, index, parent) => {
      // Only process anchor tags (links)
      if (node.tagName !== "a") return;

      // Check if href ends with .cast
      const href = node.properties?.href;
      if (!href || !href.endsWith(".cast")) return;

      // Get the alt text from the link content
      let altText = "";
      if (node.children && node.children.length > 0) {
        // Extract text content from all child nodes
        altText = extractTextContent(node.children);
      }

      // Create the figure element using hastscript
      const figureChildren = [h("asciinema-cast", { src: href })];

      // Add figcaption if alt text exists
      if (altText.trim()) {
        figureChildren.push(h("figcaption", altText.trim()));
      }

      const figureNode = h("figure", figureChildren);

      // Replace the link node with the figure node
      if (parent && typeof index === "number") {
        parent.children[index] = figureNode;
      }
    });
  };
}

/**
 * Helper function to extract text content from node children
 */
const extractTextContent = (children) => {
  let text = "";

  for (const child of children) {
    if (child.type === "text") {
      text += child.value;
    } else if (child.type === "element" && child.children) {
      text += extractTextContent(child.children);
    }
  }

  return text;
};
