import { mdToHtml } from "md4w";
import LightElement from "./LightElement";

class MarkdownContent extends LightElement {
  static {
    this.register("md-content", MarkdownContent);
  }

  #content: string | undefined;

  constructor() {
    super();
  }

  set content(content: string) {
    this.content = content;
  }

  get content(): string | undefined {
    return this.#content;
  }

  render() {
    if (this.content) {
      this.innerHTML = mdToHtml(this.content);
    }
  }
}

export default MarkdownContent;
