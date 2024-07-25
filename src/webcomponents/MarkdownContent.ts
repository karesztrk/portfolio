import { MarkdownContent } from "md4wc";

class MarkdownComponent extends MarkdownContent {
  static {
    this.register("md-content", MarkdownContent);
  }

  constructor() {
    super();
  }
}

export default MarkdownComponent;
