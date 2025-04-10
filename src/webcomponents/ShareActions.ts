import { LightElement } from "@karesztrk/webcomponent-base";

/**
 * Share action widget.
 *
 * Copyright (c) 2025 piccalilli
 * @see https://piccalil.li/blog/simplify-sharing-with-built-in-apis-and-progressive-enhancement/
 */
class ShareActions extends LightElement {
  static {
    this.register("share-actions", ShareActions);
  }

  /**
   * Returns a url prop value or the current page url as a fallback.
   */
  get url(): string {
    return this.getAttribute("url") || window.location.href;
  }

  /**
   * Returns a title prop value or the page <title>.
   */
  get title(): string {
    return this.getAttribute("title") || document.title;
  }

  /**
   * Looks for a meta description and extracts the value if it is found. Returns an empty string if not.
   */
  get description(): string | undefined {
    const metaDescriptionElement = document.querySelector(
      'meta[name="description"]',
    );

    return metaDescriptionElement
      ? (metaDescriptionElement.getAttribute("content") ?? undefined)
      : "";
  }

  /**
   * Determine if this browser can use the share API.
   */
  get hasShareSupport(): boolean {
    return !!navigator.share;
  }

  /**
   * Determine if this browser can use the clipboard API.
   */
  get hasClipboardSupport(): Clipboard {
    return navigator.clipboard;
  }

  /**
   * Reveal the share button.
   */
  showButton(button: HTMLButtonElement) {
    button.style = "display: block";
  }

  connectedCallback(): void {
    const shareButtons = this.getElementsByClassName(
      "share-button",
    ) as HTMLCollectionOf<HTMLButtonElement>;

    // Conditionally render the share button
    if (this.hasShareSupport) {
      for (const button of shareButtons) {
        this.showButton(button);
      }
    }

    const copyButtons = this.getElementsByClassName(
      "copy-button",
    ) as HTMLCollectionOf<HTMLButtonElement>;

    // Conditionally render the share button
    if (this.hasClipboardSupport) {
      for (const button of copyButtons) {
        this.showButton(button);
      }
    }

    // Buttons are now rendered so we can assign the events
    this.assignEvents();
  }

  /**
   * Takes the event, triggers the share API, then passes that
   * context and alert text to the renderAlert method.
   */
  triggerShare(): void {
    navigator
      .share({
        title: this.title,
        url: this.url,
        text: this.description,
      })
      .then(() => {
        this.renderAlert("Thanks!");
      })
      .catch((error) => console.error("Error sharing", error));
  }

  /**
   * Takes the event, triggers the clipboard API, then passes that
   *  context and alert text to the renderAlert method.
   */
  copyToClipboard(): void {
    navigator.clipboard
      .writeText(this.url)
      .then(() => {
        this.renderAlert("Copied!");
      })
      .catch((error) => console.error(error));
  }

  /**
   * Takes message text, the event context and an optional millisecond value for clearing the
   * alert. It than renders the local alert element to this component.
   * If not available, nothing happens here.
   */
  renderAlert(text: string, clearTime = 3000): void {
    const alert = this.querySelector('[role="alert"]') as HTMLElement | null;

    if (alert) {
      alert.innerText = text;

      setTimeout(() => {
        alert.innerText = "";
      }, clearTime);
    }
  }

  /**
   * Finds all buttons and attaches a click event to our handler.
   */
  assignEvents(): void {
    const shareButtons = this.getElementsByClassName(
      "share-button",
    ) as HTMLCollectionOf<HTMLButtonElement>;
    const copyButtons = this.getElementsByClassName(
      "copy-button",
    ) as HTMLCollectionOf<HTMLButtonElement>;

    for (const button of shareButtons) {
      button.addEventListener("click", () => this.triggerShare());
    }

    for (const button of copyButtons) {
      button.addEventListener("click", () => this.copyToClipboard());
    }
  }
}

export default ShareActions;
