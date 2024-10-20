class MenuButton extends HTMLButtonElement {
  static {
    customElements.define("menu-button", MenuButton, { extends: "button" });
  }

  constructor() {
    super();
    this.addEventListener("click", this);
  }

  handleEvent() {
    const current =
      this.getAttribute("aria-expanded") === "true" ? true : false;
    this.setAttribute("aria-expanded", String(!current));
  }
}

export default MenuButton;
