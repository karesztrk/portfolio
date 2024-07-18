import type {
  TooltipCollection,
  TooltipCollectionType,
  TooltipCollectionValue,
} from "@/util/collections.util.ts";
import { init, mdToHtml } from "md4w";
import { formatTitle } from "@/util/blog.util";
import wasm from "/node_modules/md4w/js/md4w-small.wasm?url";
import LightElement from "@/webcomponents/LightElement";
import { loadCollections } from "@/data/api";
import type TooltipSidebar from "./TooltipSidebar";

class TooltipsView extends LightElement {
  static {
    this.register("tt-view", TooltipsView);
  }

  articleTemplate = "tt-article-template";

  breadcrumbTemplate = "tt-breadcrumb-template";

  breadcrumbTag = "tt-breadcrumb";

  searchDialogId = "search-dialog";

  articleSelector = "article";

  loaded = false;

  collections: TooltipCollection = {
    Articles: [],
    Codepens: [],
    Tools: [],
    Snippets: [],
    Libraries: [],
    Stack: [],
  };

  constructor() {
    super();
    loadCollections().then((collections) => {
      this.collections = collections;
    });
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
        this.fillTemplate(template, collectionEntry.entry);
        this.addTemplate(this.articleSelector, template);
        this.setCurrentItemBySlug(returnValue);
        if (breadrumbTemplate) {
          this.fillBreadcrumbTemplate(
            breadrumbTemplate,
            collectionEntry.collection,
            collectionEntry.entry,
          );
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
        this.fillTemplate(template, collectionEntry.entry);
        this.addTemplate(this.articleSelector, template);
        this.setCurrentItem(e.submitter);
        if (breadrumbTemplate) {
          this.fillBreadcrumbTemplate(
            breadrumbTemplate,
            collectionEntry.collection,
            collectionEntry.entry,
          );
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
  ):
    | { collection: TooltipCollectionType; entry: TooltipCollectionValue }
    | undefined {
    for (const [collection, collectionEntry] of Object.entries(
      this.collections,
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

  fillTemplate(template: HTMLElement, collectionEntry: TooltipCollectionValue) {
    this.setTitle(template, collectionEntry);
    this.setContent(template, collectionEntry);
    this.setTags(template, collectionEntry);
  }

  fillBreadcrumbTemplate(
    template: HTMLElement,
    collection: string,
    collectionEntry: TooltipCollectionValue,
  ) {
    const category = template.querySelector("#current-category");
    if (category) {
      category.textContent = collection;
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

  setTitle(template: HTMLElement, collectionEntry: TooltipCollectionValue) {
    const title = template.querySelector("#title");
    if (title) {
      title.textContent = formatTitle(collectionEntry.id);
    }
  }

  setContent(template: HTMLElement, collectionEntry: TooltipCollectionValue) {
    const content = template.querySelector("#content");
    if (content) {
      content.innerHTML = mdToHtml(collectionEntry.body);
    }
  }

  setTags(template: HTMLElement, collectionEntry: TooltipCollectionValue) {
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
