import { BaselineStatus, BaselineIcon } from "@karesztrk/baseline-status";

class Baseline extends BaselineStatus {
  static {
    this.register("baseline-icon", BaselineIcon);
    this.register("baseline-status", Baseline);
  }

  constructor() {
    super();
  }
}

export default Baseline;
