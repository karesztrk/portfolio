export const formatTitle = (id: string) => {
  const parts = id.split(".");
  return parts[0];
};

export const formatExcerpt = (body: string) => {
  const paragraphs = body.split(/\n/);
  return paragraphs.find((p) => p.trim() !== "");
};

const formatter = new Intl.DateTimeFormat("en-US", {
  dateStyle: "medium",
});

export const formatDate = (date: Date) => {
  return formatter.format(date);
};
