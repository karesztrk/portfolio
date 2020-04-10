export function saveScheme(scheme) {
  if (typeof window !== `undefined`) {
    localStorage.setItem('scheme', scheme);
  }
}

export function loadScheme() {
  return typeof window !== `undefined` ? localStorage.getItem('scheme') : undefined;
}
