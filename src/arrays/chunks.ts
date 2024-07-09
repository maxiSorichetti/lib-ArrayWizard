// Array Vacío: El array de entrada no contiene elementos.
// Tamaño del Chunk Mayor que el Tamaño del Array: Si el tamaño del chunk es mayor que el tamaño del array, el resultado debe ser el array original dentro de un array.
// Tamaño del Chunk Igual a 1: Cada elemento del array de entrada se convierte en un subarray separado.
// Tamaño del Chunk Mayor que 1 pero Menor que el Tamaño del Array: El array de entrada se divide en múltiples chunks.
// Tamaño del Chunk Menor o Igual a 0: Se debe manejar este caso adecuadamente, posiblemente lanzando un error o devolviendo el array original.

import { arraylable } from './arraylable'

export const chunks = <T>(data: T[], size: number): T[][] => {
  const newArray = arraylable(data) as T[]

  if (size <= 0) return []
  if (newArray.length === 0) return []
  if (size >= newArray.length) return [newArray]

  const chunkedArray: T[][] = []
  for (let i = 0; i < newArray.length; i += size) {
    chunkedArray.push(newArray.slice(i, i + size))
  }

  return chunkedArray
}
