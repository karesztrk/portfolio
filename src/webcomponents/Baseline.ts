import { BonelessStatus, BaselineIcon } from "@karesztrk/baseline-status";

class Baseline extends BonelessStatus {
  static {
    this.register("baseline-icon", BaselineIcon);
    this.register("baseline-status", Baseline);
  }

  constructor() {
    super();
  }
}

export default Baseline;
