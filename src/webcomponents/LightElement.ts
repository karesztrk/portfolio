// Inspired by: Mayank
// https://www.mayank.co/blog/custom-element-base/
abstract class LightElement extends HTMLElement {
  static register(tagName: string, ctor: new () => HTMLElement) {
    customElements.define(tagName, ctor);
  }

  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  abstract render(): void;
}

export default LightElement;
