export const saveScheme = (scheme: string) => {
  if (typeof window !== `undefined`) {
    localStorage.setItem('scheme', scheme);
  }
};

export const loadScheme = () => {
  return typeof window !== `undefined`
    ? localStorage.getItem('scheme')
    : undefined;
};
