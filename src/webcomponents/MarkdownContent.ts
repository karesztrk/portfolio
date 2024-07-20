import { mdToHtml } from "md4w";
import LightElement from "./LightElement";

class MarkdownContent extends LightElement {
  static {
    this.register("md-content", MarkdownContent);
  }

  content?: string;

  constructor() {
    super();

    this.addEventListener("render", (e) => {
      if (e instanceof CustomEvent) {
        const content = e.detail;
        this.content = content;
        this.render();
      }
    });
  }

  render() {
    if (this.content) {
      this.innerHTML = mdToHtml(this.content);
    }
  }
}

export default MarkdownContent;
