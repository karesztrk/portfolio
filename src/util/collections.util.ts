import type { CollectionEntry } from "astro:content";
import { getCollection } from "astro:content";
import tooltipCollections from "@/data/tooltips.json";

export type TooltipCollectionType = (typeof tooltipCollections)[number]["name"];

export type TooltipCollectionValue = Omit<
  CollectionEntry<TooltipCollectionType>,
  "collection" | "render"
>;

export type TooltipCollection = Record<
  TooltipCollectionType,
  TooltipCollectionValue[]
>;

export const findTooltip = (c: TooltipCollectionType) =>
  getCollection<TooltipCollectionType, CollectionEntry<TooltipCollectionType>>(
    c,
  );

export const findTooltips = (): Promise<TooltipCollection> =>
  Promise.all(
    tooltipCollections.map((c) =>
      getCollection<
        TooltipCollectionType,
        CollectionEntry<TooltipCollectionType>
      >(c.name),
    ),
  )
    .then((collections) => collections.flat())
    .then((collections) => {
      const groups = collections.reduce((acc, curr) => {
        const key = curr.collection;
        if (!acc[key]) {
          acc[key] = [];
        }
        const { collection, render, ...rest } = curr;
        acc[key].push(rest);
        return acc;
      }, {} as TooltipCollection);

      return groups;
    });
