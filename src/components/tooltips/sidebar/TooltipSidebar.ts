import type {
  TooltipCollection,
  TooltipCollectionValue,
} from "@/util/collections.util";
import { formatTitle } from "@/util/blog.util";
import TooltipBase from "../TooltipSubmit";

class TooltipSidebar extends TooltipBase {
  static {
    this.register("tt-sidebar", TooltipSidebar);
  }

  #collections: TooltipCollection = {
    Articles: [],
    Codepens: [],
    Tools: [],
    Snippets: [],
    Libraries: [],
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

  render() {
    this.renderLocalCollections();
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
          const li = this.getTemplate("tt-item-template") as HTMLElement;
          const button = li.querySelector("button") as HTMLButtonElement | null;
          if (button) {
            this.setupButton(button, key, entry);
          }
          ul.appendChild(li);
        }
      }
    }
  }

  setupButton(
    button: HTMLButtonElement,
    key: string,
    entry: TooltipCollectionValue,
  ) {
    button.value = entry.slug;
    button.formAction = this.createFormAction(key, entry);
    const title = button.querySelector("span");
    if (title) {
      title.textContent = formatTitle(entry.id);
    }
  }

  createFormAction(key: string, entry: TooltipCollectionValue) {
    return `/tooltips/${key}#${entry.slug}`;
  }
}

export default TooltipSidebar;
