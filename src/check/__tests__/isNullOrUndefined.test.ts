import { describe, expect, it } from 'vitest'

import { isNullOrUndefined } from '../isNullOrUndefined'

describe('isNullOrUndefined', () => {
  it('Should return true for null', () => {
    const value = null
    const result = isNullOrUndefined(value)
    expect(result).toBe(true)
  })

  it('Should return true for undefined', () => {
    const value = undefined
    const result = isNullOrUndefined(value)
    expect(result).toBe(true)
  })

  it('Should return false for non-null non-undefined values', () => {
    expect(isNullOrUndefined(0)).toBe(false)
    expect(isNullOrUndefined('')).toBe(false)
    expect(isNullOrUndefined(false)).toBe(false)
    expect(isNullOrUndefined([])).toBe(false)
    expect(isNullOrUndefined({})).toBe(false)
    expect(isNullOrUndefined(() => {})).toBe(false)
    expect(isNullOrUndefined(NaN)).toBe(false)
  })

  it('Should return false for truthy values', () => {
    expect(isNullOrUndefined(1)).toBe(false)
    expect(isNullOrUndefined('string')).toBe(false)
    expect(isNullOrUndefined(true)).toBe(false)
    expect(isNullOrUndefined([1, 2, 3])).toBe(false)
    expect(isNullOrUndefined({ key: 'value' })).toBe(false)
    expect(isNullOrUndefined(() => 'test')).toBe(false)
  })
})
