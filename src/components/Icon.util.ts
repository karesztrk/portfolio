export const getFileName = (filePath: string): string => {
  const fileName = filePath.split("/").pop();
  if (!fileName) {
    return "";
  }
  const [name] = fileName.split(".");
  return name;
};
