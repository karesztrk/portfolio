import type { TooltipCollectionType } from "@/util/collections.util.ts";
import type { CollectionEntry } from "astro:content";
import { init, mdToHtml } from "md4w";
import { formatTitle } from "@/util/blog.util";
import wasm from "/node_modules/md4w/js/md4w-small.wasm?url";
import LightElement from "@/webcomponents/LightElement";

export class TooltipsView extends LightElement {
  static {
    this.register("tt-view", TooltipsView);
  }

  collections: Record<
    TooltipCollectionType,
    CollectionEntry<TooltipCollectionType>[]
  >;

  constructor() {
    super();
    this.collections = globalThis.collections || {};
  }

  loaded = false;

  onDialogClose(searchDialog: HTMLDialogElement) {
    return async () => {
      const { returnValue } = searchDialog;

      await this.init();
      if (returnValue) {
        const template = this.getTemplate();
        const collectionEntry = this.toCollectionEntry(returnValue);
        if (collectionEntry) {
          this.fillTemplate(template, collectionEntry);
          this.querySelector("article")?.remove();
          this.appendChild(template);
        }
      }
    };
  }

  onTreeLeafClick() {
    return async (e: SubmitEvent) => {
      e.preventDefault();
      const values = new FormData(e.target as HTMLFormElement, e.submitter);
      const slug = values.get("slug");
      if (slug && typeof slug === "string") {
        const template = this.getTemplate();
        const collectionEntry = this.toCollectionEntry(slug);
        if (collectionEntry) {
          this.fillTemplate(template, collectionEntry);
          this.querySelector("article")?.remove();
          this.appendChild(template);
        }
      }
    };
  }

  registerTreeSubmitHandler() {
    const form = document.getElementById("tt-tree") as HTMLFormElement | null;
    if (form) {
      form.addEventListener("submit", this.onTreeLeafClick());
    }
  }

  registerDialogSubmitHandler() {
    const searchDialog = document.getElementById(
      "search-dialog",
    ) as HTMLDialogElement | null;
    if (searchDialog) {
      searchDialog.addEventListener("close", this.onDialogClose(searchDialog));
    }
  }

  async init() {
    if (!this.loaded) {
      await init(wasm);
      this.loaded = true;
    }
  }

  render() {
    this.init();
    this.registerTreeSubmitHandler();
    this.registerDialogSubmitHandler();
  }

  toCollectionEntry(
    slug: string,
  ): CollectionEntry<TooltipCollectionType> | undefined {
    for (const collection of Object.values(this.collections)) {
      for (const entry of collection) {
        if (entry.slug === slug) {
          return entry;
        }
      }
    }
  }

  getTemplate() {
    const template = document.getElementById(
      "tt-article-template",
    ) as HTMLTemplateElement | null;
    return template?.content.cloneNode(true) as HTMLElement;
  }

  fillTemplate(
    template: HTMLElement,
    collectionEntry: CollectionEntry<TooltipCollectionType>,
  ) {
    this.setTitle(template, collectionEntry);
    this.setContent(template, collectionEntry);
    this.setTags(template, collectionEntry);
  }

  setTitle(
    template: HTMLElement,
    collectionEntry: CollectionEntry<TooltipCollectionType>,
  ) {
    const title = template.querySelector("#title");
    if (title) {
      title.textContent = formatTitle(collectionEntry.id);
    }
  }

  setContent(
    template: HTMLElement,
    collectionEntry: CollectionEntry<TooltipCollectionType>,
  ) {
    const content = template.querySelector("#content");
    if (content) {
      content.innerHTML = mdToHtml(collectionEntry.body);
    }
  }

  setTags(
    template: HTMLElement,
    collectionEntry: CollectionEntry<TooltipCollectionType>,
  ) {
    const tags = template.querySelector("ul");
    const tagItem = template.querySelector("li");
    if (tags && tagItem) {
      for (const tag of collectionEntry.data.tags) {
        const li = tagItem.cloneNode();
        li.textContent = tag;
        tags.appendChild(li);
      }
    }
  }
}

export default TooltipsView;
