import { ShadowElement } from "@karesztrk/webcomponent-base";

// Copyright (c) 2023 Ryan Mulligan
// https://github.com/hexagoncircle/click-spark?tab=readme-ov-file
class ClickSpark extends ShadowElement {
  static {
    this.register("click-spark", ClickSpark);
  }

  options: KeyframeAnimationOptions = {
    duration: 660,
    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
    fill: "forwards",
  };

  root: HTMLElement;

  svg: SVGSVGElement | null;

  constructor() {
    super();
    this.root = document.documentElement;
    this.svg = null;
  }

  get activeEls() {
    return this.getAttribute("active-on");
  }

  connectedCallback() {
    super.connectedCallback();
    this.svg = this.shadow.querySelector("svg");
    this.root.addEventListener("click", (e) => {
      if (this.activeEls && !(e.target as HTMLElement).matches(this.activeEls))
        return;

      this.setSparkPosition(e);
      this.animateSpark();
    });
  }

  animateSpark() {
    if (!this.svg) {
      return;
    }
    const sparks = [...this.svg.children];
    const y1 = sparks[0].getAttribute("y1");
    if (y1 === null) {
      throw new Error("y1 attribute not found");
    }
    const size = parseInt(y1);
    const offset = size / 2 + "px";

    const keyframes = (i: number) => {
      let deg = `calc(${i} * (360deg / ${sparks.length}))`;

      return [
        {
          strokeDashoffset: size * 3,
          transform: `rotate(${deg}) translateY(${offset})`,
        },
        {
          strokeDashoffset: size,
          transform: `rotate(${deg}) translateY(0)`,
        },
      ];
    };

    sparks.forEach((spark, i) => spark.animate(keyframes(i), this.options));
  }

  setSparkPosition(e: MouseEvent) {
    if (!this.svg) {
      return;
    }
    let rect = this.root.getBoundingClientRect();

    this.svg.style.left =
      e.clientX - rect.left - this.svg.clientWidth / 2 + "px";
    this.svg.style.top =
      e.clientY - rect.top - this.svg.clientHeight / 2 + "px";
  }

  get styles() {
    return `
        :host {
          display: contents;
        }
        
        svg {
          pointer-events: none;
          position: absolute;
          rotate: -20deg;
          stroke: var(--click-spark-color, currentcolor);
        }

        line {
          stroke-dasharray: 30;
          stroke-dashoffset: 30;
          transform-origin: center;
        }
    `;
  }

  render() {
    return `
      <svg width="30" height="30" viewBox="0 0 100 100" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4">
        ${Array.from({ length: 8 }, (_) => `<line x1="50" y1="30" x2="50" y2="4"/>`).join("")}
      </svg>
    `;
  }
}

export default ClickSpark;
