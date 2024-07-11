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

export const findTooltip = (c: TooltipCollectionType) =>
  getCollection<TooltipCollectionType, CollectionEntry<TooltipCollectionType>>(
    c,
  );

export const findTooltips = () =>
  Promise.all(
    tooltipCollectionNames.map((c) =>
      getCollection<
        TooltipCollectionType,
        CollectionEntry<TooltipCollectionType>
      >(c),
    ),
  ).then((collections) => {
    return collections.reduce(
      (acc, curr, index) => {
        const key = tooltipCollectionNames[index];
        acc[key] = curr;
        return acc;
      },
      {} as Record<
        TooltipCollectionType,
        CollectionEntry<TooltipCollectionType>[]
      >,
    );
  });
