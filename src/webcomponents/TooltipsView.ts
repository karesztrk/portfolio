import type {
  TooltipCollection,
  TooltipCollectionType,
  TooltipCollectionValue,
} from "@/util/collections.util.ts";
import { formatTitle } from "@/util/blog.util";
import LightElement from "@/webcomponents/LightElement";
import { loadCollections } from "@/data/api";
import type MarkdownContent from "./MarkdownContent";

class TooltipsView extends LightElement {
  static {
    this.register("tt-view", TooltipsView);
  }

  articleTemplate = "tt-article-template";

  breadcrumbTemplate = "tt-breadcrumb-template";

  breadcrumbTag = "tt-breadcrumb";

  articleSelector = "article";

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

  handleSelect(slug: string) {
    if (!slug) {
      return;
    }
    const template = this.getTemplate(this.articleTemplate);
    const collectionEntry = this.toCollectionEntry(slug);
    const breadrumbTemplate = this.getTemplate(this.breadcrumbTemplate);
    if (collectionEntry) {
      this.fillTemplate(template, collectionEntry.entry);
      this.addTemplate(this.articleSelector, template);
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

  render() {}

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
    const md = template.querySelector("md-content") as MarkdownContent;
    md.content = collectionEntry.body;
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
