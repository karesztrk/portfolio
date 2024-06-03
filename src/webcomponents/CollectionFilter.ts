import LightElement from "@/webcomponents/LightElement";

export class CollectionFilter extends LightElement {
  static {
    this.register("collection-filter", CollectionFilter);
  }

  render() {
    const input = this.querySelector("#search-input");
    const onChange = (e: Event) => {
      if (e.target instanceof HTMLInputElement) {
        const value = e.target.value;

        const entries = this.querySelectorAll(".entry");

        entries.forEach((entry) => {
          if (entry instanceof HTMLElement && entry.textContent !== null) {
            const tags = entry.dataset.tags
              ? entry.dataset.tags.split(",")
              : [];
            const show =
              entry.textContent.toLowerCase().includes(value.toLowerCase()) ||
              tags.some((tag) =>
                tag.toLowerCase().includes(value.toLowerCase()),
              );

            (entry as HTMLElement).style.display = show ? "list-item" : "none";
          }
        });
      }
    };

    if (input) {
      input.addEventListener("input", onChange);
    }
  }
}

export default CollectionFilter;
