import { uniqueElements } from '../uniqueElements'

describe('uniqueElements', () => {
  it('should return an empty array when input is empty', () => {
    expect(uniqueElements([])).toEqual([])
  })
  it('should return the same array when all elements are unique', () => {
    expect(uniqueElements([1, 2, 3])).toEqual([1, 2, 3])
  })
  it('should remove duplicate elements from the array', () => {
    expect(uniqueElements([1, 2, 2, 3])).toEqual([1, 2, 3])
  })
  it('should handle mixed data types', () => {
    expect(uniqueElements([1, '2', '2', 2, '3', { key: 'test' }, { key: 'test' }])).toEqual([1, '2', 2, '3', { key: 'test' }, { key: 'test' }])
  })
})
