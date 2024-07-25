import { LightElement } from "@karesztrk/webcomponent-base";
import type { TooltipCollectionValue } from "@/util/collections.util";
import type MarkdownContent from "./MarkdownContent";
import { formatTitle } from "@/util/blog.util";

class TooltipArticle extends LightElement {
  static {
    this.register("tt-article", TooltipArticle);
  }

  entry?: TooltipCollectionValue;

  constructor() {
    super();

    this.addEventListener("render", (e) => {
      if (e instanceof CustomEvent) {
        const collectionEntry = e.detail;
        this.entry = collectionEntry;
        this.render();
      }
    });
  }

  render() {
    this.setTitle();
    this.setContent();
    this.setTags();
  }

  setTitle() {
    const title = this.querySelector("#title");
    if (title && this.entry) {
      title.textContent = formatTitle(this.entry.id);
    }
  }

  setContent() {
    const md = this.querySelector("md-content") as MarkdownContent | null;
    md?.dispatchEvent(new CustomEvent("render", { detail: this.entry?.body }));
  }

  setTags() {
    const tags = this.querySelector("ul");
    const tagItem = this.querySelector("li");
    if (tags && tagItem && this.entry) {
      for (const tag of this.entry.data.tags) {
        const li = tagItem.cloneNode();
        li.textContent = tag;
        tags.appendChild(li);
      }
    }
  }
}

export default TooltipArticle;
