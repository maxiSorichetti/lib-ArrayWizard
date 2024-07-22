import { sum } from '../sum'

describe('sum', () => {
  it('should return the sum of all numbers in the array', () => {
    expect(sum([1, 2, 3, 4])).toBe(10)
    expect(sum([10, -5, 5])).toBe(10)
  })

  it('should return 0 for an empty array', () => {
    expect(sum([])).toBe(0)
  })

  it('should handle an array with a single number', () => {
    expect(sum([5])).toBe(5)
  })

  it('should handle an array with all negative numbers', () => {
    expect(sum([-1, -2, -3, -4])).toBe(-10)
  })
})
