import { LightElement } from "@karesztrk/webcomponent-base";

class MenuButton extends LightElement {
  static {
    this.register("menu-button", MenuButton);
  }

  constructor() {
    super();
  }

  onClick() {
    const current =
      this.getAttribute("aria-expanded") === "true" ? true : false;
    this.setAttribute("aria-expanded", String(!current));
  }

  onKeyDown(e: KeyboardEvent) {
    if (e.key === "Enter") {
      this.onClick();
    }
  }
}

export default MenuButton;
