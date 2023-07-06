export function imagePathResolve(urlImage: string): string {
  if (!urlImage) {
    return "";
  }
  return require(`../static${urlImage}`);
}
