import { LightElement } from "@karesztrk/webcomponent-base";
import * as AsciinemaPlayer from "asciinema-player";

/**
 * Asciinema cast player webcomponent.
 */
class AsciinemaCast extends LightElement {
  static {
    this.register("asciinema-cast", AsciinemaCast);
  }

  /**
   * Returns the name of the cast file (e.g. `hello-world.cast` -> `hello-world`).
   */
  get fileName(): string | null {
    const source = this.src;
    if (!source) {
      return null;
    }
    const file = source.split("/").pop();
    if (!file) {
      return null;
    }

    // remove extension
    return file.split(".")[0];
  }

  /**
   * Returns a src prop value.
   */
  get src(): string | null {
    return this.getAttribute("src");
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
    const name = this.fileName;
    if (!name) {
      return;
    }

    // Only the file name can be dynmic according to the Vite spec
    import(`../content/Blog/Casts/${name}.cast`)
      .then((value) => {
        AsciinemaPlayer.create(value.default, this, this.settings);
      })
      .catch((e) => {
        console.error(e);
      });
  }
}

export default AsciinemaCast;
