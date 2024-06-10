export type NullOrUndefined = null | undefined
export type MaybeId = string | number | NullOrUndefined

export interface Identifable {
  id: MaybeId
}

export type AnyFunction = (...args: unknown[]) => unknown
