import { describe, expect, it } from 'vitest'

import { intersection } from '../intersection'

describe('Intersection', () => {
  it('Should return the intersection of two arrays', () => {
    const array1 = [1, 2, 3, 4]
    const array2 = [3, 4, 5, 6]
    const result = intersection(array1, array2)
    expect(result).toEqual([3, 4])
  })

  it('Should return an empty array if there is no intersection', () => {
    const array1 = [1, 2]
    const array2 = [3, 4]
    const result = intersection(array1, array2)
    expect(result).toEqual([])
  })

  it('Should handle arrays with duplicate values', () => {
    const array1 = [1, 2, 2, 3]
    const array2 = [2, 3, 3, 4]
    const result = intersection(array1, array2)
    expect(result).toEqual([2, 3])
  })

  it('Should handle empty arrays', () => {
    const array1: number[] = []
    const array2 = [1, 2, 3]
    const result = intersection(array1, array2)
    expect(result).toEqual([])
  })

  it('Should handle arrays with different types', () => {
    const array1 = ['a', 'b', 'c']
    const array2 = ['b', 'c', 'd']
    const result = intersection(array1, array2)
    expect(result).toEqual(['b', 'c'])
  })

  it('Should handle arrays with objects', () => {
    const obj1 = { id: 1 }
    const obj2 = { id: 2 }
    const obj3 = { id: 3 }
    const array1 = [obj1, obj2]
    const array2 = [obj2, obj3]
    const result = intersection(array1, array2)
    expect(result).toEqual([obj2])
  })

  it('Should handle arrays with mixed values', () => {
    const array1 = [1, 'a', true]
    const array2 = [true, 2, 'a']
    const result = intersection(array1, array2)
    expect(result).toEqual(['a', true])
  })
})
