export const loadCollections = () => {
  return fetch("/tooltips/meta.json").then((resp) => resp.json());
};
