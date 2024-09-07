import type {
  TooltipCollection,
  TooltipCollectionType,
  TooltipCollectionValue,
} from "@/util/collections.util";
import { loadCollections } from "@/data/api";
import { has, get, set } from "@lo-fi/client-storage/idb";

class TooltipCollectionController {
  collections: TooltipCollection = {
    Articles: [],
    Codepens: [],
    Tools: [],
    Snippets: [],
    Libraries: [],
    Stack: [],
  };

  #host: HTMLElement;

  #storageKey = "collections";

  constructor(host: HTMLElement) {
    this.#host = host;
    Promise.all([this.loadLocalCollections(), this.loadServerCollections()])
      .then(([localCollections, serverCollections]) => {
        this.collections = localCollections;
        this.mergeCollections(serverCollections);
        this.emitStateChange();
      })
      .catch(console.error);
  }

  mergeCollections(collections: TooltipCollection) {
    for (const [key, value] of Object.entries(collections)) {
      this.collections[key as TooltipCollectionType].push(...value);
    }
  }

  addTooltip(entry: TooltipCollectionValue) {
    const newEntry = { ...entry, local: true };
    this.persistLocalEntry(newEntry)
      .then(() => {
        this.emitStateChange();
      })
      .catch(console.error);
  }

  async persistLocalEntry(entry: TooltipCollectionValue): Promise<void> {
    const key = this.#storageKey;
    return this.loadLocalCollections().then((current) => {
      const newValue = { ...current };
      newValue[entry.collection].push(entry);
      this.collections = newValue;
      return set(key, newValue);
    });
  }

  async loadLocalCollections(): Promise<TooltipCollection> {
    const key = this.#storageKey;
    const empty = {
      Articles: [],
      Codepens: [],
      Tools: [],
      Snippets: [],
      Libraries: [],
      Stack: [],
    };
    return has(key).then((hasKey) => {
      if (!hasKey) {
        return empty;
      }
      return get<TooltipCollection>(key);
    });
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
