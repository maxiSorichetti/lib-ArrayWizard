import { describe, expect, it } from 'vitest'

import { isObject } from '../isObject'

describe('isObject', () => {
  it('Should return false for null', () => {
    const value = null
    const result = isObject(value)
    expect(result).toBe(false)
  })

  it('Should return false for undefined', () => {
    const value = undefined
    const result = isObject(value)
    expect(result).toBe(false)
  })

  it('Should return false for boolean values', () => {
    expect(isObject(true)).toBe(false)
    expect(isObject(false)).toBe(false)
  })

  it('Should return false for number values', () => {
    expect(isObject(0)).toBe(false)
    expect(isObject(123)).toBe(false)
    expect(isObject(-123)).toBe(false)
    expect(isObject(NaN)).toBe(false)
    expect(isObject(Infinity)).toBe(false)
  })

  it('Should return false for string values', () => {
    expect(isObject('')).toBe(false)
    expect(isObject('string')).toBe(false)
  })

  it('Should return false for symbol values', () => {
    expect(isObject(Symbol('a'))).toBe(false)
  })

  it('Should return false for functions', () => {
    expect(isObject(() => {})).toBe(false)
    expect(isObject(function () {})).toBe(false)
  })

  it('Should return true for Date instances', () => {
    expect(isObject(new Date())).toBe(true)
  })

  it('Should return true for RegExp instances', () => {
    expect(isObject(/regex/)).toBe(true)
  })

  it('Should return true for arrays', () => {
    expect(isObject([])).toBe(true)
    expect(isObject([1, 2, 3])).toBe(true)
  })

  it('Should return true for plain objects', () => {
    expect(isObject({})).toBe(true)
    expect(isObject({ key: 'value' })).toBe(true)
  })

  it('Should return true for objects created with constructors', () => {
    class MyClass {
      property: string
      constructor () {
        this.property = 'value'
      }
    }
    const instance = new MyClass()
    expect(isObject(instance)).toBe(true)
  })

  it('Should return true for objects created with Object.create(null)', () => {
    const obj = Object.create(null)
    expect(isObject(obj)).toBe(true)
  })

  it('Should return true for instances of built-in objects like Set, Map, WeakSet, and WeakMap', () => {
    expect(isObject(new Set())).toBe(true)
    expect(isObject(new Map())).toBe(true)
    expect(isObject(new WeakSet())).toBe(true)
    expect(isObject(new WeakMap())).toBe(true)
  })
})
