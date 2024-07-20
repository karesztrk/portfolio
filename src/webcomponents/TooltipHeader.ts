import LightElement from "./LightElement";
import type { TooltipCollectionValue } from "@/util/collections.util";
import type MarkdownContent from "./MarkdownContent";
import { formatTitle } from "@/util/blog.util";

class TooltipHeader extends LightElement {
  static {
    this.register("tt-header", TooltipHeader);
  }

  collection?: string;

  entry?: TooltipCollectionValue;

  constructor() {
    super();

    this.addEventListener("render", (e) => {
      if (e instanceof CustomEvent) {
        const { collection, entry } = e.detail;
        this.collection = collection;
        this.entry = entry;
        this.render();
      }
    });
  }

  render() {
    this.setBreadcrumbTemplate();
  }

  setBreadcrumbTemplate() {
    const category = this.querySelector("#current-category");
    if (category && this.collection) {
      category.textContent = this.collection;
    }

    const currentTooltip = this.querySelector(
      "#current-tooltip",
    ) as HTMLInputElement | null;
    if (currentTooltip && this.entry) {
      currentTooltip.textContent = formatTitle(this.entry.id);
    }
  }
}

export default TooltipHeader;
