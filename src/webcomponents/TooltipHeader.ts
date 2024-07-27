import { LightElement } from "@karesztrk/webcomponent-base";
import type { TooltipCollectionValue } from "@/util/collections.util";
import { formatTitle } from "@/util/blog.util";

class TooltipHeader extends LightElement {
  static {
    this.register("tt-header", TooltipHeader);
  }

  collection?: string;

  entry?: TooltipCollectionValue;

  breadcrumbTemplate = "tt-breadcrumb-template";

  breadcrumbTag = "tt-breadcrumb";

  currentCategorySelector = "#current-category";

  currentTooltipSelector = "#current-tooltip";

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
    if (!this.collection || !this.entry) {
      return;
    }

    const breadrumbTemplate = this.getTemplate(
      this.breadcrumbTemplate,
    ) as HTMLElement;
    this.addTemplate(this.breadcrumbTag, breadrumbTemplate);
    const category = this.querySelector(this.currentCategorySelector);
    if (category) {
      category.textContent = this.collection;
    }

    const currentTooltip = this.querySelector(
      this.currentTooltipSelector,
    ) as HTMLInputElement | null;
    if (currentTooltip) {
      currentTooltip.textContent = formatTitle(this.entry.id);
    }
  }
}

export default TooltipHeader;
