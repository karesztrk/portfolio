import type { TooltipCollectionValue } from "@/util/collections.util";
import { formatTitle } from "@/util/blog.util";
import TooltipBase from "../TooltipSubmit";

class TooltipHeader extends TooltipBase {
  static {
    this.register("tt-header", TooltipHeader);
  }

  collection?: string;

  entry?: TooltipCollectionValue;

  breadcrumbTemplate = "tt-breadcrumb-template";

  breadcrumbTag = "tt-breadcrumb";

  currentCategorySelector = "#current-category";

  currentTooltipSelector = "#current-tooltip";

  searchButtonId = "#search-button";

  searchDialogId = "search-dialog";

  addButtonId = "#add-button";

  constructor() {
    super();

    this.view?.addEventListener("select", (e: Event) => {
      if (e instanceof CustomEvent) {
        this.onRender(e);
      }
    });
    this.bindSearchButton();
    this.bindAddButton();
  }

  bindSearchButton() {
    const searchButton = this.querySelector(this.searchButtonId);
    const searchDialog = document.getElementById(
      this.searchDialogId,
    ) as HTMLDialogElement | null;

    if (searchButton && searchDialog) {
      searchButton.addEventListener("click", () => {
        searchDialog.showModal();
      });
    }
  }

  bindAddButton() {
    const addButton = this.querySelector(
      this.addButtonId,
    ) as HTMLElement | null;
    if (addButton) {
      addButton.addEventListener("click", () => {
        this.dispatchEvent(new CustomEvent("add", { bubbles: true }));
      });
    }
  }

  onRender(e: CustomEvent) {
    const { collection, entry } = e.detail;
    this.collection = collection;
    this.entry = entry;
    this.render();
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
