import { chunks } from '../chunks'

describe('chunks', () => {
  it('should return an empty array when input is empty', () => {
    expect(chunks([], 2)).toEqual([])
  })
  it('should return the original array in a single chunk if size is greater than array length', () => {
    expect(chunks([1, 2, 3], 5)).toEqual([[1, 2, 3]])
  })

  it('should return each element in a separate chunk if size is 1', () => {
    expect(chunks([1, 2, 3, 4], 1)).toEqual([[1], [2], [3], [4]])
  })

  it('should divide the array into chunks of the specified size', () => {
    expect(chunks([1, 2, 3, 4, 5, 6], 2)).toEqual([[1, 2], [3, 4], [5, 6]])
  })

  it('should return [] if chunk size is less than or equal to 0', () => {
    expect(chunks([1, 2, 3], -1)).toEqual([])
  })
})
