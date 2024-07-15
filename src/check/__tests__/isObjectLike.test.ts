import { describe, expect, it } from 'vitest'

import { isObjectLike } from '../isObjectLike'

describe('isObjectLike', () => {
  it('Should return false for null', () => {
    const value = null
    const result = isObjectLike(value)
    expect(result).toBe(false)
  })

  it('Should return false for undefined', () => {
    const value = undefined
    const result = isObjectLike(value)
    expect(result).toBe(false)
  })

  it('Should return false for boolean values', () => {
    expect(isObjectLike(true)).toBe(false)
    expect(isObjectLike(false)).toBe(false)
  })

  it('Should return false for number values', () => {
    expect(isObjectLike(0)).toBe(false)
    expect(isObjectLike(123)).toBe(false)
    expect(isObjectLike(-123)).toBe(false)
    expect(isObjectLike(NaN)).toBe(false)
    expect(isObjectLike(Infinity)).toBe(false)
  })

  it('Should return false for string values', () => {
    expect(isObjectLike('')).toBe(false)
    expect(isObjectLike('string')).toBe(false)
  })

  it('Should return false for symbol values', () => {
    expect(isObjectLike(Symbol('a'))).toBe(false)
  })

  it('Should return false for functions', () => {
    expect(isObjectLike(() => {})).toBe(false)
    expect(isObjectLike(function () {})).toBe(false)
  })

  it('Should return false for Date instances', () => {
    expect(isObjectLike(new Date())).toBe(false)
  })

  it('Should return false for RegExp instances', () => {
    expect(isObjectLike(/regex/)).toBe(false)
  })

  it('Should return false for arrays', () => {
    expect(isObjectLike([])).toBe(false)
    expect(isObjectLike([1, 2, 3])).toBe(false)
  })

  it('Should return true for plain objects', () => {
    expect(isObjectLike({})).toBe(true)
    expect(isObjectLike({ key: 'value' })).toBe(true)
  })

  it('Should return true for objects created with constructors', () => {
    class MyClass {
      property: string
      constructor () {
        this.property = 'value'
      }
    }
    const instance = new MyClass()
    expect(isObjectLike(instance)).toBe(true)
  })

  it('Should return true for objects created with Object.create(null)', () => {
    const obj = Object.create(null)
    expect(isObjectLike(obj)).toBe(true)
  })
})
