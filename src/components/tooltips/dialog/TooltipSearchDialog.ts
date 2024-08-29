import type {
  TooltipCollection,
  TooltipCollectionValue,
} from "@/util/collections.util";
import { formatTitle } from "@/util/blog.util";
import TooltipBase from "../TooltipSubmit";

export class TooltipSearchDialog extends TooltipBase {
  static {
    this.register("collection-filter", TooltipSearchDialog);
  }

  #collections: TooltipCollection = {
    Articles: [],
    Codepens: [],
    Tools: [],
    Snippets: [],
    Libraries: [],
    Stack: [],
  };

  constructor() {
    super();
    this.view?.addEventListener("statechange", (e: Event) => {
      if (e instanceof CustomEvent) {
        this.#collections = (e as CustomEvent).detail.collections;
        this.render();
      }
    });
  }

  getCollectionEntry(slug: string) {
    return this.view.toCollectionEntry(slug);
  }

  getTags(slug: string): string[] {
    const collectionEntry = this.getCollectionEntry(slug);
    return collectionEntry?.entry?.data?.tags || [];
  }

  renderLocalCollections() {
    if (!this.#collections) {
      return;
    }
    for (const [key, value] of Object.entries(this.#collections)) {
      if (value.length === 0) {
        continue;
      }
      const ul = this.querySelector(`#${key}-list`);
      if (!ul) {
        continue;
      }
      for (const entry of value) {
        if (entry.local) {
          const li = this.getTemplate("tt-dialog-item-template") as HTMLElement;
          const button = li.querySelector("button") as HTMLButtonElement | null;
          if (button) {
            this.setupButton(button, entry);
          }
          ul.appendChild(li);
        }
      }
    }
  }

  setupButton(button: HTMLButtonElement, entry: TooltipCollectionValue) {
    button.value = entry.slug;
    button.append(formatTitle(entry.id));
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
    this.renderLocalCollections();
  }
}

export default TooltipSearchDialog;
