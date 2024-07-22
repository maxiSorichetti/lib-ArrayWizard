import { groupBy } from '../groupBy'

interface TestItem {
  category: string
  name: string
}

describe('groupBy', () => {
  it('should group items by a given key', () => {
    const array: TestItem[] = [
      { category: 'fruit', name: 'apple' },
      { category: 'fruit', name: 'banana' },
      { category: 'vegetable', name: 'carrot' }
    ]

    const result = groupBy(array, item => item.category)

    expect(result).toEqual({
      fruit: [
        { category: 'fruit', name: 'apple' },
        { category: 'fruit', name: 'banana' }
      ],
      vegetable: [
        { category: 'vegetable', name: 'carrot' }
      ]
    })
  })

  it('should handle an empty array', () => {
    const array: TestItem[] = []

    const result = groupBy(array, item => item.category)

    expect(result).toEqual({})
  })

  it('should handle an array with one item', () => {
    const array: TestItem[] = [{ category: 'fruit', name: 'apple' }]

    const result = groupBy(array, item => item.category)

    expect(result).toEqual({
      fruit: [{ category: 'fruit', name: 'apple' }]
    })
  })

  it('should handle different key functions', () => {
    const array: TestItem[] = [
      { category: 'fruit', name: 'apple' },
      { category: 'fruit', name: 'banana' },
      { category: 'vegetable', name: 'carrot' }
    ]

    const result = groupBy(array, item => item.name.charAt(0))

    expect(result).toEqual({
      a: [
        { category: 'fruit', name: 'apple' }
      ],
      b: [
        { category: 'fruit', name: 'banana' }
      ],
      c: [
        { category: 'vegetable', name: 'carrot' }
      ]
    })
  })

  it('should return an empty object if no array is provided', () => {
    const result = groupBy<TestItem>(undefined, item => item.category)

    expect(result).toEqual({})
  })

  it('should return an empty object if no key function is provided', () => {
    const array: TestItem[] = [
      { category: 'fruit', name: 'apple' },
      { category: 'fruit', name: 'banana' },
      { category: 'vegetable', name: 'carrot' }
    ]

    const result = groupBy(array, undefined)

    expect(result).toEqual({})
  })
})
