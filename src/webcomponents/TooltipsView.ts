import type { CollectionType } from "@/util/collections.util.ts";
import type { CollectionEntry } from "astro:content";
import { init, mdToHtml } from "md4w";
import { formatTitle } from "@/util/blog.util";
import wasm from "/node_modules/md4w/js/md4w-small.wasm?url";
import LightElement from "@/webcomponents/LightElement";

export class TooltipsView extends LightElement {
  static {
    this.register("tt-view", TooltipsView);
  }

  loaded = false;

  render() {
    const searchDialog = document.getElementById("search-dialog");
    this.init();

    if (searchDialog) {
      const onClose = async () => {
        await this.init();
        const { returnValue } = searchDialog as HTMLDialogElement;
        if (returnValue) {
          const template = this.getTemplate();
          const collectionEntry = this.toCollectionEntry(returnValue);
          this.fillTemplate(template, collectionEntry);
          this.querySelector("article")?.remove();
          this.appendChild(template);
        }
      };
      searchDialog.addEventListener("close", onClose);
    }
  }

  async init() {
    if (!this.loaded) {
      await init(wasm);
      this.loaded = true;
    }
  }

  toCollectionEntry(returnValue: string): CollectionEntry<CollectionType> {
    return JSON.parse(returnValue);
  }

  getTemplate() {
    const template = document.getElementById(
      "mm-article-template",
    ) as HTMLTemplateElement | null;
    return template?.content.cloneNode(true) as HTMLElement;
  }

  fillTemplate(
    template: HTMLElement,
    collectionEntry: CollectionEntry<CollectionType>,
  ) {
    this.setTitle(template, collectionEntry);
    this.setContent(template, collectionEntry);
    this.setTags(template, collectionEntry);
  }

  setTitle(
    template: HTMLElement,
    collectionEntry: CollectionEntry<CollectionType>,
  ) {
    const title = template.querySelector("#title");
    if (title) {
      title.textContent = formatTitle(collectionEntry.id);
    }
  }

  setContent(
    template: HTMLElement,
    collectionEntry: CollectionEntry<CollectionType>,
  ) {
    const content = template.querySelector("#content");
    if (content) {
      content.innerHTML = mdToHtml(collectionEntry.body);
    }
  }

  setTags(
    template: HTMLElement,
    collectionEntry: CollectionEntry<CollectionType>,
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
