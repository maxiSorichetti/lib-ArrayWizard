export const intersection = <T>(array1: T[], array2: T[]): T[] => {
  const set1 = new Set(array1)
  const set2 = new Set(array2)
  const intersectionArray: T[] = []

  for (const item of set1) {
    if (set2.has(item)) {
      intersectionArray.push(item)
    }
  }
  return intersectionArray
}
