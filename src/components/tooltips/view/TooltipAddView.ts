import TooltipBase from "../TooltipSubmit";

class TooltipAddView extends TooltipBase {
  static {
    this.register("tt-add-view", TooltipAddView);
  }

  onSubmit(e: SubmitEvent) {
    super.handleSubmit(e);
  }
}

export default TooltipAddView;
