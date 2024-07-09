import { describe, expect, it } from 'vitest'

import { flattering } from '../flattering'

describe('flattering', () => {
  it('Should flatten an array one level deep', () => {
    const input = [1, [2, 3], [4, [5, 6]]]
    const result = flattering(input, 1)
    expect(result).toEqual([1, 2, 3, 4, [5, 6]])
  })

  it('Should flatten an array two levels deep', () => {
    const input = [1, [2, 3], [4, [5, 6]]]
    const result = flattering(input, 2)
    expect(result).toEqual([1, 2, 3, 4, 5, 6])
  })

  it('Should handle empty arrays', () => {
    const input: unknown[] = []
    const result = flattering(input, 1)
    expect(result).toEqual([])
  })

  it('Shoul handle arrays with non-array elements', () => {
    const input = [1, 2, 3, 4, 5]
    const result = flattering(input, 1)
    expect(result).toEqual([1, 2, 3, 4, 5])
  })

  it('Should not flatten when depth is 0', () => {
    const input = [1, [2, [3, [4, 5]]], 6]
    const result = flattering(input, 0)
    expect(result).toEqual([1, [2, [3, [4, 5]]], 6])
  })
})
