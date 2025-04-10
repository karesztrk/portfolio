/**
 * @typedef Config
 * @property {import('@types/hast').Element} element
 */

/**
 * Append an HTML element to the tree.
 *
 * @param config {Config}
 * @returns {void}
 */
export function rehypeAppendHtml({ element }) {
  return (tree) => {
    tree.children.push(element);
    return tree;
  };
}
