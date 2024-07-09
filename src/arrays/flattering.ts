export const flattering = <T>(array: T[], depth: number = 1): unknown[] => {
  return array.flat(depth)
}
