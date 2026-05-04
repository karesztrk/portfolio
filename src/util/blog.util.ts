export const removeMarkdown = (body: string) => {
  // - Remove special characters
  // - Remove parathesis
  return body.replace(/([*_`~[\]]|\([^)]*\))/g, "");
};

export const capitalize = (value: string): string => {
  return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
};

export const formatTitle = (id: string) => {
  const parts = id.split(".");
  if (parts.length === 0) {
    return "";
  }
  const replaced = parts[0].replaceAll("-", " ");
  return capitalize(replaced);
};

export const formatExcerpt = (body: string) => {
  const paragraphs = body.split(/\n/);
  const paragraph = paragraphs.find((p) => p.trim() !== "");
  return paragraph ? removeMarkdown(paragraph) : undefined;
};

const formatter = new Intl.DateTimeFormat("en-US", {
  dateStyle: "medium",
});

export const formatDate = (date: Date) => {
  return formatter.format(date);
};
