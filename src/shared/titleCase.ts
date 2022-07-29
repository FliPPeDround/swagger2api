export function titleCase(str: string) {
  return str.replace(/\w/, (char, index) => {
    return index === 0 ? char.toUpperCase() : char
  })
}
