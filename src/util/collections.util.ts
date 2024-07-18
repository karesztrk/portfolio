import type { CollectionEntry } from "astro:content";
import { getCollection } from "astro:content";

export const tooltipCollectionNames = [
  "Articles",
  "Codepens",
  "Libraries",
  "Snippets",
  "Stack",
  "Tools",
] as const;

export type TooltipCollectionType = (typeof tooltipCollectionNames)[number];

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
    tooltipCollectionNames.map((c) =>
      getCollection<
        TooltipCollectionType,
        CollectionEntry<TooltipCollectionType>
      >(c),
    ),
  )
    .then((collections) => collections.flat())
    .then((collections) => {
      const groups = Object.groupBy(
        collections,
        ({ collection }) => collection,
      );

      const result: TooltipCollection = {
        Articles: [],
        Codepens: [],
        Libraries: [],
        Snippets: [],
        Stack: [],
        Tools: [],
      };

      for (const [key, value] of Object.entries(groups)) {
        result[key as TooltipCollectionType] = value.map(
          ({ collection, render, ...rest }) => ({ ...rest }),
        );
      }

      return result;
    });
