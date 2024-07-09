// Casos a Considerar
// Array Vacío: El array de entrada no contiene elementos.
// Array con Elementos Únicos: Todos los elementos del array de entrada ya son únicos.
// Array con Elementos Duplicados: Algunos o todos los elementos del array de entrada están duplicados.
// Tipos de Datos Mixtos: El array puede contener diferentes tipos de datos como números, cadenas, objetos, etc.
// Orden de los Elementos: Mantener el orden de los elementos según su primera aparición en el array de entrada.

import { arraylable } from './arraylable'

export const uniqueElements = (data: unknown[] | null): unknown[] => {
  const newArray = arraylable(data)
  if (newArray.length === 0) return []

  const uniqueArray = new Set()

  return newArray.filter((element) => {
    if (uniqueArray.has(element)) return false
    uniqueArray.add(element)
    return true
  })
}
