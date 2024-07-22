import { map } from '../map'

describe('map', () => {
  it('should apply the transformation function to each element of the array', () => {
    const numbers = [1, 2, 3]
    const doubled = map(numbers, x => x * 2)
    expect(doubled).toEqual([2, 4, 6])

    const words = ['hello', 'world']
    const lengths = map(words, x => x.length)
    expect(lengths).toEqual([5, 5])
  })

  it('should return an empty array when the input array is empty', () => {
    const result = map([], x => x)
    expect(result).toEqual([])
  })

  it('should handle an array with a single element', () => {
    const result = map([10], x => x * 2)
    expect(result).toEqual([20])
  })

  it('should handle an array with different data types', () => {
    const mixed = [1, 'hello', true]
    const types = map(mixed, x => typeof x)
    expect(types).toEqual(['number', 'string', 'boolean'])
  })
})
