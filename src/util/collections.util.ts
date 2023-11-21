export const collectionNames = [
  "Articles",
  "Codepens",
  "Libraries",
  "Snippets",
  "Stack",
  "Tools",
] as const;

export type CollectionType = (typeof collectionNames)[number];
