import type {
  TooltipCollection,
  TooltipCollectionType,
  TooltipCollectionValue,
} from "@/util/collections.util";
import { loadCollections } from "@/data/api";

class TooltipCollectionController {
  collections: TooltipCollection;

  #host: HTMLElement;

  #storageKey = "collections";

  constructor(host: HTMLElement) {
    this.#host = host;
    this.collections = this.loadLocalCollections();
    this.loadServerCollections()
      .then((serverCollections) => {
        this.mergeCollections(serverCollections);
      })
      .finally(() => {
        this.emitStateChange();
      })
      .catch(console.error);
  }

  mergeCollections(collections: TooltipCollection) {
    for (const [key, value] of Object.entries(collections)) {
      this.collections[key as TooltipCollectionType].push(...value);
    }
  }

  addTooltip(collection: TooltipCollectionType, entry: TooltipCollectionValue) {
    const newEntry = { ...entry, local: true };
    this.collections[collection].push(newEntry);
    this.persistLocalEntry(newEntry);
    this.emitStateChange();
  }

  persistLocalEntry(entry: TooltipCollectionValue) {
    const key = this.#storageKey;
    const current = this.loadLocalCollections();
    current[entry.collection].push(entry);

    localStorage.setItem(key, JSON.stringify(current));
  }

  loadLocalCollections(): TooltipCollection {
    const key = this.#storageKey;
    const item = localStorage.getItem(key);
    const empty = {
      Articles: [],
      Codepens: [],
      Tools: [],
      Snippets: [],
      Libraries: [],
      Stack: [],
    };
    if (item === null) {
      return empty;
    }
    try {
      return JSON.parse(item);
    } catch (e) {
      console.error("Malformed data in storage.", e);
    }
    return empty;
  }

  loadServerCollections(): Promise<TooltipCollection> {
    return loadCollections();
  }

  emitStateChange() {
    const event = new CustomEvent("statechange", {
      detail: { collections: this.collections },
    });
    this.#host.dispatchEvent(event);
  }
}

export default TooltipCollectionController;
