declare module "https://esm.sh/*";

declare module "@/data/tooltips.json" {
  type TooltipCollectionType =
    | "Articles"
    | "Codepens"
    | "Libraries"
    | "Snippets"
    | "Tools";
  const content: [{ name: TooltipCollectionType; description: string }];
  export default content;
}

declare module "@byojs/storage/idb" {
  export function set(
    key: string,
    value: boolean | string | number | Record<string, unknown>,
  ): Promise<void>;
  export function get<T>(key: string): Promise<T>;
  export function has(key: string): Promise<boolean>;
}
