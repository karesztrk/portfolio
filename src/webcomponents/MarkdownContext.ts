import { MarkdownContext } from "md4wc";

class MarkdownContextComponent extends MarkdownContext {
  static {
    this.register("md-context", MarkdownContext);
  }

  constructor() {
    super();
  }
}

export default MarkdownContextComponent;
