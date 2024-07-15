import { describe, expect, it } from 'vitest'

import { difference } from '../difference'

describe('difference', () => {
  it('Should return elements from the first array that are not in the second array', () => {
    const array1 = [1, 2, 3, 4]
    const array2 = [3, 4, 5, 6]
    const result = difference(array1, array2)
    expect(result).toEqual([1, 2])
  })

  it('Should return the first array if none of its elements are in the second array', () => {
    const array1 = [1, 2]
    const array2 = [3, 4]
    const result = difference(array1, array2)
    expect(result).toEqual([1, 2])
  })

  it('Should return an empty array if the first array is empty', () => {
    const array1: number[] = []
    const array2 = [1, 2, 3]
    const result = difference(array1, array2)
    expect(result).toEqual([])
  })

  it('Should return all elements of the first array if the second array is empty', () => {
    const array1 = [1, 2, 3]
    const array2: number[] = []
    const result = difference(array1, array2)
    expect(result).toEqual([1, 2, 3])
  })

  it('Should handle arrays with duplicate values and return elements from the first array that are not in the second array', () => {
    const array1 = [1, 2, 2, 3]
    const array2 = [2, 3, 3, 4]
    const result = difference(array1, array2)
    expect(result).toEqual([1])
  })

  it('Should handle arrays with different types and return elements from the first array that are not in the second array', () => {
    const array1 = ['a', 'b', 'c']
    const array2 = ['b', 'c', 'd']
    const result = difference(array1, array2)
    expect(result).toEqual(['a'])
  })

  it('Should handle arrays with objects and return elements from the first array that are not in the second array', () => {
    const obj1 = { id: 1 }
    const obj2 = { id: 2 }
    const obj3 = { id: 3 }
    const array1 = [obj1, obj2]
    const array2 = [obj2, obj3]
    const result = difference(array1, array2)
    expect(result).toEqual([obj1])
  })

  it('Should handle arrays with null and undefined values and return elements from the first array that are not in the second array', () => {
    const array1 = [1, null, undefined]
    const array2 = [null, 2, undefined]
    const result = difference(array1, array2)
    expect(result).toEqual([1])
  })
})
