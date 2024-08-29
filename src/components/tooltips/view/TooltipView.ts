import type {
  TooltipCollectionType,
  TooltipCollectionValue,
} from "@/util/collections.util.ts";
import { LightElement } from "@karesztrk/webcomponent-base";
import TooltipCollectionController from "./TooltipCollectionController";

class TooltipView extends LightElement {
  static {
    this.register("tt-view", TooltipView);
  }

  #collectionController: TooltipCollectionController;

  constructor() {
    super();
    this.#collectionController = new TooltipCollectionController(this);
  }

  handleSelect(slug: string) {
    if (!slug) {
      return;
    }
    const collectionEntry = this.toCollectionEntry(slug);
    if (!collectionEntry) {
      return;
    }

    this.dispatchEvent(new CustomEvent("select", { detail: collectionEntry }));
    this.toggleSidebar();
  }

  onAdd() {
    this.toggleSidebar();
  }

  onSubmit(e: SubmitEvent) {
    const target = e.target as HTMLFormElement;
    if (target.method !== "dialog") {
      e.preventDefault();
    }
    const values = new FormData(target, e.submitter);
    const slug = values.get("slug");
    if (!slug || typeof slug !== "string" || !e.submitter) {
      return;
    }
    this.handleSelect(slug);
  }

  onSubmitTooltip(e: CustomEvent) {
    const entry = e.detail;
    const collection: TooltipCollectionType = entry.collection;
    this.#collectionController.addTooltip(collection, entry);
  }

  render() {}

  toCollectionEntry(
    slug: string,
  ):
    | { collection: TooltipCollectionType; entry: TooltipCollectionValue }
    | undefined {
    for (const [collection, collectionEntry] of Object.entries(
      this.#collectionController.collections,
    )) {
      for (const entry of collectionEntry) {
        if (entry.slug === slug) {
          return { collection, entry } as {
            collection: TooltipCollectionType;
            entry: TooltipCollectionValue;
          };
        }
      }
    }
  }

  toggleSidebar() {
    const treeToggle = document.getElementById(
      "toggle",
    ) as HTMLInputElement | null;
    if (treeToggle) {
      treeToggle.checked = false;
    }
  }
}

export default TooltipView;
