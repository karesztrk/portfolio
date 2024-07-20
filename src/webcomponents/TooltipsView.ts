import type {
  TooltipCollection,
  TooltipCollectionType,
  TooltipCollectionValue,
} from "@/util/collections.util.ts";
import { LightElement } from "@karesztrk/webcomponent-base";
import { loadCollections } from "@/data/api";

class TooltipsView extends LightElement {
  static {
    this.register("tt-view", TooltipsView);
  }

  articleTemplate = "tt-article-template";

  breadcrumbTemplate = "tt-breadcrumb-template";

  breadcrumbTag = "tt-breadcrumb";

  articleSelector = "tt-article";

  headerSelector = "tt-header";

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
    const collectionEntry = this.toCollectionEntry(slug);
    if (!collectionEntry) {
      return;
    }

    const articleTemplate = this.getTemplate(this.articleTemplate);
    this.addTemplate(this.articleSelector, articleTemplate);

    const article = this.querySelector(this.articleSelector);
    article?.dispatchEvent(
      new CustomEvent("render", { detail: collectionEntry.entry }),
    );

    const breadrumbTemplate = this.getTemplate(this.breadcrumbTemplate);
    this.addTemplate(this.breadcrumbTag, breadrumbTemplate);

    const header = this.querySelector(this.headerSelector);
    header?.dispatchEvent(
      new CustomEvent("render", { detail: collectionEntry }),
    );
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

  addTemplate(selector: string, template: HTMLElement) {
    const target = this.querySelector(selector);
    if (target) {
      target.replaceChildren(...template.children);
    } else {
      this.appendChild(template);
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

export default TooltipsView;
