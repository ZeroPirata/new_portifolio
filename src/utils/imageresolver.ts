export function imagePathResolve(urlImage: string): string {
  if (urlImage.includes('http')) {
    return urlImage
  }
  return require(`../static${urlImage}`)
}
