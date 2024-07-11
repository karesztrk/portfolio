export const loadCollections = () => {
  return fetch("/tooltips/collections.json").then((resp) => resp.json());
};
