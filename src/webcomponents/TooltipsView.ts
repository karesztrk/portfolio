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

  articleTemplate = "tt-article-template";

  breadcrumbTemplate = "tt-breadcrumb-template";

  breadcrumbTag = "tt-breadcrumb";

  searchDialogId = "search-dialog";

  articleSelector = "article";

  loaded = false;

  #collections: Record<
    TooltipCollectionType,
    CollectionEntry<TooltipCollectionType>[]
  >;

  constructor() {
    super();
    this.#collections = {
      Articles: [],
      Codepens: [],
      Tools: [],
      Snippets: [],
      Libraries: [],
      Stack: [],
    };
  }

  get collections() {
    return this.#collections;
  }

  set collections(value) {
    this.#collections = value;
  }

  onDialogClose(searchDialog: HTMLDialogElement) {
    return async () => {
      const { returnValue } = searchDialog;

      await this.init();
      if (!returnValue) {
        return;
      }
      const template = this.getTemplate(this.articleTemplate);
      const breadrumbTemplate = this.getTemplate(this.breadcrumbTemplate);
      const collectionEntry = this.toCollectionEntry(returnValue);
      if (collectionEntry) {
        this.fillTemplate(template, collectionEntry);
        this.addTemplate(this.articleSelector, template);
        this.setCurrentItemBySlug(returnValue);
        if (breadrumbTemplate) {
          this.fillBreadcrumbTemplate(breadrumbTemplate, collectionEntry);
          this.addTemplate(this.breadcrumbTag, breadrumbTemplate);
        }
        this.toggleSidebar();
      }
    };
  }

  onTreeLeafClick() {
    return async (e: SubmitEvent) => {
      e.preventDefault();
      const values = new FormData(e.target as HTMLFormElement, e.submitter);
      const slug = values.get("slug");
      if (!slug || typeof slug !== "string" || !e.submitter) {
        return;
      }
      const template = this.getTemplate(this.articleTemplate);
      const collectionEntry = this.toCollectionEntry(slug);
      const breadrumbTemplate = this.getTemplate(this.breadcrumbTemplate);
      if (collectionEntry) {
        this.fillTemplate(template, collectionEntry);
        this.addTemplate(this.articleSelector, template);
        this.setCurrentItem(e.submitter);
        if (breadrumbTemplate) {
          this.fillBreadcrumbTemplate(breadrumbTemplate, collectionEntry);
          this.addTemplate(this.breadcrumbTag, breadrumbTemplate);
        }
        this.toggleSidebar();
      }
    };
  }

  registerTreeSubmitHandler() {
    const form = this.querySelector("form") as HTMLFormElement | null;
    if (form) {
      form.addEventListener("submit", this.onTreeLeafClick());
    }
  }

  registerDialogSubmitHandler() {
    const searchDialog = document.getElementById(
      this.searchDialogId,
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

  getTemplate(id: string) {
    const template = document.getElementById(id) as HTMLTemplateElement | null;
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

  fillBreadcrumbTemplate(
    template: HTMLElement,
    collectionEntry: CollectionEntry<TooltipCollectionType>,
  ) {
    const category = template.querySelector("#current-category");
    if (category) {
      category.textContent = collectionEntry.collection;
    }

    const currentTooltip = template.querySelector(
      "#current-tooltip",
    ) as HTMLInputElement | null;
    if (currentTooltip) {
      currentTooltip.textContent = formatTitle(collectionEntry.id);
    }
  }

  addTemplate(selector: string, template: HTMLElement) {
    const target = this.querySelector(selector);
    if (target) {
      target.replaceChildren(...template.children);
    } else {
      this.appendChild(template);
    }
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

  setCurrentItemBySlug(slug: string) {
    if (!slug) {
      return;
    }
    const element = this.findButtonBySlug(slug);
    if (!element) {
      return;
    }
    this.setCurrentItem(element);
  }

  setCurrentItem(element: HTMLElement) {
    if (!element) {
      return;
    }
    const list = this.querySelectorAll("#tt-tree li");
    const item = element.closest("li");
    if (item) {
      for (const child of list) {
        child.ariaCurrent = child === item ? "true" : null;
      }
    }
  }

  findButtonBySlug(slug: string) {
    if (!slug) {
      return;
    }

    return this.querySelector(`button[value='${slug}']`) as HTMLElement;
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

export default TooltipsView;
