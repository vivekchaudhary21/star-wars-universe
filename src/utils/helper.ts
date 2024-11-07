export const getPeopleIdFromURL = (url: string) => {
  return url.split('/').at(-2)
}
