import { LightElement } from "@karesztrk/webcomponent-base";
import * as AsciinemaPlayer from "asciinema-player";

class AsciinemaCast extends LightElement {
  static {
    this.register("asciinema-cast", AsciinemaCast);
  }

  /**
   * Returns a href prop value.
   */
  get fileName(): string | null {
    return this.getAttribute("file");
  }

  /**
   * Player settings.
   */
  get settings() {
    return {
      terminalFontFamily: "'Recursive', monospace",
    };
  }

  /**
   * Once connected load the cast lazily.
   */
  connectedCallback() {
    if (!this.fileName) {
      return;
    }

    // Only the file name can be dynmic according to the Vite spec
    import(`../content/Blog/Casts/${this.fileName}.cast`)
      .then((value) => {
        AsciinemaPlayer.create(value.default, this, this.settings);
      })
      .catch((e) => {
        console.error(e);
      });
  }
}

export default AsciinemaCast;
