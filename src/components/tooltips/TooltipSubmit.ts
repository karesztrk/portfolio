import { LightElement } from "@karesztrk/webcomponent-base";
import type { TooltipCollectionType } from "@/util/collections.util";
import type { CollectionEntry } from "astro:content";
import type TooltipView from "./view/TooltipView";

class TooltipBase extends LightElement {
  #parentSelector = "tt-view";

  view: TooltipView;

  constructor() {
    super();
    this.view = this.closest(this.#parentSelector) as TooltipView;
  }

  handleSubmit(e: SubmitEvent) {
    e.preventDefault();

    const target = e.target as HTMLFormElement;
    const values = new FormData(target, e.submitter);
    const collection = values.get("collection") as string | null;
    const title = values.get("title") as string | null;
    const body = values.get("body") as string | null;
    const tagsText = values.get("tags") as string | null;

    target.reset();

    if (collection && title && body && tagsText) {
      const slug = title.replace(/\s+/g, "-").toLowerCase();
      const tags = tagsText.split(",").map((tag) => tag.trim());
      return {
        collection,
        slug,
        id: slug,
        body,
        data: {
          tags,
        },
      } as CollectionEntry<TooltipCollectionType>;
    }

    return undefined;
  }
}

export default TooltipBase;
