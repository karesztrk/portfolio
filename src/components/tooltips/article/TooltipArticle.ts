import type { TooltipCollectionValue } from "@/util/collections.util";
import type MarkdownContent from "@/webcomponents/MarkdownContent";
import { formatTitle } from "@/util/blog.util";
import TooltipBase from "../TooltipSubmit";

class TooltipArticle extends TooltipBase {
  static {
    this.register("tt-article", TooltipArticle);
  }

  #add = false;

  #entry?: TooltipCollectionValue;

  #articleTemplate = "tt-article-template";

  #addTemplateName = "tt-add-template";

  #articleSelector = "md-context";

  constructor() {
    super();
    this.view?.addEventListener("add", () => {
      this.onAdd();
    });
    this.view?.addEventListener("select", (e: Event) => {
      if (e instanceof CustomEvent) {
        this.onSelect(e);
      }
    });
  }

  onSelect(e: CustomEvent) {
    const collectionEntry = e.detail.entry;
    this.#entry = collectionEntry;
    this.#add = false;
    this.render();
  }

  onAdd() {
    this.#entry = undefined;
    this.#add = true;
    this.render();
  }

  render() {
    if (this.#add) {
      this.renderAdd();
    } else {
      this.renderArticle();
    }
  }

  renderAdd() {
    if (!this.#add) {
      return;
    }
    const template = this.getTemplate(this.#addTemplateName) as HTMLElement;
    this.addTemplate(this.#articleSelector, template);
  }

  renderArticle() {
    if (!this.#entry || this.#add) {
      return;
    }
    const articleTemplate = this.getTemplate(
      this.#articleTemplate,
    ) as HTMLElement;
    this.addTemplate(this.#articleSelector, articleTemplate);
    this.setTitle();
    this.setContent();
    this.setTags();
  }

  setTitle() {
    const title = this.querySelector("#title");
    if (title && this.#entry) {
      title.textContent = formatTitle(this.#entry.id);
    }
  }

  setContent() {
    const md = this.querySelector("md-content") as MarkdownContent | null;
    md?.dispatchEvent(new CustomEvent("render", { detail: this.#entry?.body }));
  }

  setTags() {
    const tags = this.querySelector("ul");
    const fragment = document.createDocumentFragment();
    const tagItem = this.querySelector("li");
    if (tags && tagItem && this.#entry) {
      // Remove the placeholder
      tagItem.remove();
      for (const tag of this.#entry.data.tags) {
        const li = tagItem.cloneNode();
        li.textContent = tag;
        fragment.appendChild(li);
      }
      tags.appendChild(fragment);
    }
  }

  onSubmit(e: SubmitEvent) {
    const detail = super.handleSubmit(e);
    this.dispatchEvent(
      new CustomEvent("submit-tooltip", { detail, bubbles: true }),
    );
  }
}

export default TooltipArticle;
