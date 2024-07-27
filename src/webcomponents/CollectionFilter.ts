import { LightElement } from "@karesztrk/webcomponent-base";
import type TooltipView from "./TooltipView";

export class CollectionFilter extends LightElement {
  static {
    this.register("collection-filter", CollectionFilter);
  }

  view: TooltipView;

  constructor() {
    super();
    this.view = this.closest("tt-view") as TooltipView;
  }

  getCollectionEntry(slug: string) {
    return this.view.toCollectionEntry(slug);
  }

  getTags(slug: string): string[] {
    const collectionEntry = this.getCollectionEntry(slug);
    return collectionEntry?.entry?.data?.tags || [];
  }

  handleInput(target: HTMLInputElement) {
    return () => {
      const value = target.value;

      const entries = this.querySelectorAll(
        ".entry",
      ) as NodeListOf<HTMLElement>;

      for (const entry of entries) {
        if (entry.textContent !== null) {
          const tags = this.getTags(value);
          const show =
            entry.textContent.toLowerCase().includes(value.toLowerCase()) ||
            tags.some((tag) => tag.toLowerCase().includes(value.toLowerCase()));

          (entry as HTMLElement).style.display = show ? "list-item" : "none";
        }
      }
    };
  }

  render() {
    const input = this.querySelector("#search-input") as HTMLInputElement;

    if (input) {
      input.addEventListener("input", this.handleInput(input));
    }
  }
}

export default CollectionFilter;
