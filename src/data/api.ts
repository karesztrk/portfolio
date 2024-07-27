import type { TooltipCollection } from "@/util/collections.util";

export const loadCollections = (): Promise<TooltipCollection> => {
  return fetch("/tooltips/meta.json").then((resp) => resp.json());
};
