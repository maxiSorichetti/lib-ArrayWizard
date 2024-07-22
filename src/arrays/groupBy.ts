/**
 * Agrupa los elementos de un array basado en una función clave proporcionada.
 * @param array - El array a agrupar.
 * @param keyFn - Una función que toma un elemento y devuelve una clave para agrupar.
 * @returns Un objeto donde las claves son generadas por keyFn y los valores son arrays de elementos.
 * @returns Si no se proporciona un array o una función clave, devolver un objeto vacío.
 */

export function groupBy<T> (array: T[] | undefined, keyFn: ((item: T) => string) | undefined): Record<string, T[]> {
  if (array == null || keyFn == null) {
    return {}
  }

  // Usa la función reduce para iterar sobre el array y construir el objeto resultado.
  return array.reduce<Record<string, T[]>>((result, item) => {
    // Genera la clave para el elemento actual usando la función clave.
    const key = keyFn(item)

    // Verifica si el objeto resultado ya tiene esta clave.
    if (!Object.prototype.hasOwnProperty.call(result, key)) {
      // Si no, inicialízalo con un array vacío.
      result[key] = []
    }

    // Agrega el elemento actual al array correspondiente a esta clave.
    result[key].push(item)

    // Devuelve el objeto resultado para ser usado en la siguiente iteración.
    return result
  }, {}) // Inicializa el objeto resultado como un objeto vacío.
}
