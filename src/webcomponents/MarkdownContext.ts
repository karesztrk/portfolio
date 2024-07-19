import { init } from "md4w";
import LightElement from "./LightElement";

class MarkdownContext extends LightElement {
  static {
    this.register("md-context", MarkdownContext);
  }

  constructor() {
    super();
    this.init();
  }

  init(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      if (this.href) {
        init(this.href)
          .then(() => {
            resolve();
          })
          .catch(() => reject());
      } else {
        reject();
      }
    });
  }

  get href() {
    return this.getAttribute("href");
  }

  render() {}
}

export default MarkdownContext;
