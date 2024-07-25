# Array Wizard 📜

![Build](https://img.shields.io/badge/build-passing-brightgreen)
![Coverage](https://img.shields.io/badge/coverage-100%25-brightgreen)

## Description

Array Wizard is a utility library developed in TypeScript with support for React and Vite projects. This library provides useful methods for array manipulation, validations, string operations, among others.

## Table of Contents

- [Installation](#installation)
- [Scripts](#scripts)
- [Usage](#usage)
- [Methods](#methods)
  - [Arrays](#arrays)
  - [Check](#check)
  - [Strings](#strings)
  - [Timing](#timing)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install the project dependencies, run:

```bash
npm install
```

# Usage

To use this library, import the necessary methods into your TypeScript or JavaScript project.

```typescript
import { sum, map, difference, flattering, intersection, uniqueElements, groupBy } from 'array-wizard';
import { isEmpty, isNullOrUndefined, isObject, isObjectLike, isString } from 'array-wizard';
import { capitalize, includes } from 'array-wizard';
import { throttle, debounce } from 'array-wizard';
```

## Arrays

- **arraylable** 🧩
  - Converts a value to an array if it is not already an array. If the value is `null`, it returns an empty array.

  - Example:
  ```typescript

  import { arraylable } from 'array-wizard';

  console.log(arraylable(null)); // []
  console.log(arraylable([1, 2, 3])); // [1, 2, 3]
  console.log(arraylable('string')); // []
  ```

- **chunks** 🍰
  - Splits an array into chunks of a specified size. Returns an array of arrays, each containing a subset of the original array.
  - Example:
  ```typescript
  import { chunks } from 'array-wizard';

  console.log(chunks([1, 2, 3, 4, 5], 2)); // [[1, 2], [3, 4], [5]]
  console.log(chunks([1, 2, 3], 5)); // [[1, 2, 3]]
  console.log(chunks([], 2)); // []
  ```

- **difference** ➖
  - Returns the elements of the first array that are not present in the second array.
  - Example:
  ```typescript
  import { difference } from 'array-wizard';

  console.log(difference([1, 2, 3], [2, 3, 4])); // [1]
  console.log(difference(['a', 'b', 'c'], ['b', 'd'])); // ['a', 'c']
  ```

- **flattering** 🌟
  - Flattens an array up to a specified depth. Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
  - Example:
  ```typescript
  import { flattering } from 'array-wizard';

  console.log(flattening([1, [2, [3, [4]], 5]], 2)); // [1, 2, 3, [4], 5]
  console.log(flattening([1, [2, [3, [4]], 5]], 1)); // [1, 2, [3, [4]], 5]
  ```

- **intersection** ✴️
  - Returns an array containing the elements common to both arrays.
  - Exapmle:
  ```typescript
  import { intersection } from 'array-wizard';

  console.log(intersection([1, 2, 3], [2, 3, 4])); // [2, 3]
  console.log(intersection(['a', 'b', 'c'], ['b', 'c', 'd'])); // ['b', 'c']
  ```

- **group by** ✴️
  - Groups elements of an array into an object according to a generated key, and returns said object.
  - Example:
  ```typescript
  import { groupBy } from 'array-wizard';

  const array = [
    { category: 'fruit', name: 'apple' },
    { category: 'fruit', name: 'banana' },
    { category: 'vegetable', name: 'carrot' }
  ];

  const result = groupBy(array, item => item.category);
  console.log(result);
  // {
  //   fruit: [
  //     { category: 'fruit', name: 'apple' },
  //     { category: 'fruit', name: 'banana' }
  //   ],
  //   vegetable: [
  //     { category: 'vegetable', name: 'carrot' }
  //   ]
  // }
  ```

- **map** 🗺️
  - Applies a transformation function to each element of an array and returns a new array with the transformed elements.
  - Example:
  ```typescript
  import { map } from 'array-wizard';

  const numbers = [1, 2, 3];
  const doubled = map(numbers, x => x * 2);
  console.log(doubled); // [2, 4, 6]

  const words = ['hello', 'world'];
  const lengths = map(words, x => x.length);
  console.log(lengths); // [5, 5]
  ```

- **sum** ➕
  - Sums all the numbers in an array and returns the total.
  - Example:
  ```typescript
  import { sum } from 'array-wizard';

  console.log(sum([1, 2, 3, 4])); // 10
  console.log(sum([10, -5, 5])); // 10
  ```

- **uniqueElements** 🌈
  - Returns a new array with unique elements, removing duplicates from the original array.
  - Example:
  ```typescript
  import { uniqueElements } from 'array-wizard';

  console.log(uniqueElements([1, 2, 2, 3, 4, 4])); // [1, 2, 3, 4]
  console.log(uniqueElements(['a', 'b', 'b', 'c'])); // ['a', 'b', 'c']
  ```

## Check

- **isEmpty** 🏷️
  - Checks if a value is empty. For objects, it checks if the object has no own properties. For other types, it checks if the value is falsy.
  - Example:
  ```typescript
  import { isEmpty } from 'array-wizard';

  /*
    @param value: Object | Array | string | number | boolean
    @returns boolean
  */

  // Example usage
  console.log(isEmpty({})); // true
  console.log(isEmpty([])); // true
  console.log(isEmpty('')); // true
  console.log(isEmpty({ key: 'value' })); // false
  console.log(isEmpty([1, 2, 3])); // false
  console.log(isEmpty('string')); // false
  ```

- **isNullOrUndefined** ❓
  - Checks if a value is `null` or `undefined`.
  - Example:
  ```typescript
  import { isNullOrUndefined } from 'array-wizard';

  /*
    @param value: unknown
    @returns boolean
  */

  // Example usage
  console.log(isNullOrUndefined(null)); // true
  console.log(isNullOrUndefined(undefined)); // true
  console.log(isNullOrUndefined('string')); // false
  console.log(isNullOrUndefined(123)); // false
  ```

- **isObject** 🛠️
  - Checks if a value is an object. Returns `false` for `null` and non-object types.
  - Example:
  ```typescript
  import { isObject } from 'array-wizard';

  /*
    @param value: unknown
    @returns boolean
  */

  // Example usage
  console.log(isObject({})); // true
  console.log(isObject([])); // true
  console.log(isObject(null)); // false
  console.log(isObject('string')); // false
  console.log(isObject(123)); // false
  ```

- **isObjectLike** 🌐
  - Checks if a value is object-like. Excludes `Date`, `RegExp`, arrays, `null`, and other non-object types.
  - Example:
  ```typescript
  import { isObjectLike } from 'array-wizard';

  /*
    @param value: unknown
    @returns boolean
  */

  // Example usage
  console.log(isObjectLike({})); // true
  console.log(isObjectLike({ key: 'value' })); // true
  console.log(isObjectLike([])); // false
  console.log(isObjectLike(new Date())); // false
  console.log(isObjectLike(/regex/)); // false
  ```

- **isString** 🔤
  - Checks if a value is a string.
  - Example:
  ```typescript
  import { isString } from 'array-wizard';

  /*
    @param value: unknown
    @returns boolean
  */

  // Example usage
  console.log(isString('hello')); // true
  console.log(isString('')); // true
  console.log(isString(123)); // false
  console.log(isString({})); // false
  console.log(isString([])); // false
  ```

## Strings

- **capitalize** 🔠
  - Capitalizes the first letter of each word in a string and converts the rest of the letters to lowercase.
  - Example:
  ```typescript
  import { capitalize } from 'array-wizard';

  /*
    @param s: string
    @returns string
  */

  // Example usage
  console.log(capitalize('hello world')); // "Hello World"
  console.log(capitalize('javaScript is fun')); // "Javascript Is Fun"
  console.log(capitalize('capitalize this STRING')); // "Capitalize This String"
  console.log(capitalize('already Capitalized')); // "Already Capitalized"
  console.log(capitalize('')); // ""
  console.log(capitalize('a')); // "A"
  console.log(capitalize(123 as any)); // 123 (since 123 is not a string)
  ```

- **includes** 🔍
  - Checks if a string contains a specified substring. Returns `false` if either argument is not a string.
  - Example:
  ```typescript
  import { includes } from 'array-wizard';

  /*
    @param stringValue: string
    @param searchableValue: string
    @returns boolean
  */

  // Example usage
  console.log(includes('hello world', 'world')); // true
  console.log(includes('hello world', 'WORLD')); // false
  console.log(includes('JavaScript is fun', 'is')); // true
  console.log(includes('JavaScript is fun', 'funny')); // false
  console.log(includes('TypeScript', 'script')); // false
  console.log(includes('TypeScript', 'Script')); // true
  console.log(includes('TypeScript', 'Type')); // true
  console.log(includes('TypeScript', '')); // true
  console.log(includes('', '')); // true
  console.log(includes('', 'empty')); // false
  console.log(includes(123 as any, '23')); // false (since 123 is not a string)
  ```

## Timing

- **throttle** ⏳
  - Creates a throttled function that only invokes the provided function at most once per every specified delay period.
  - Example:
  ```typescript
  import { throttle } from 'array-wizard';

  // Function to handle button click
  const handleClick = () => {
    console.log('Button clicked');
    // Handle button click here
  };

  // Throttled version of the handleClick function
  const throttledHandleClick = throttle(handleClick, 800);

  // Simulate button clicks
  throttledHandleClick();
  throttledHandleClick();
  throttledHandleClick();
  // Only the first call will be executed immediately,
  // subsequent calls will be ignored for the next 800ms

  // Example usage in a React component
  import React from 'react';

  const MyComponent = () => {
    return (
      <button onClick={throttledHandleClick}>
        Click me
      </button>
    );
  };

  export default MyComponent;
  ```

- **debounce** ⌛
  - Creates a debounced function that delays the invocation of the provided function until after a specified delay period has elapsed since the last time the debounced function was invoked.
  - Example:
  ```typescript
  import { debounce } from 'array-wizard';

  // Function to fetch search results
  const fetchResults = (query: string) => {
    console.log(`Fetching results for ${query}`);
    // Make API request here
  };

  // Debounced version of the fetchResults function
  const debouncedFetchResults = debounce(fetchResults, 300);

  // Simulate typing
  debouncedFetchResults('a');
  debouncedFetchResults('ab');
  debouncedFetchResults('abc');
  // Only the last call will be executed after 300ms
  ```

## Contributing

To contribute to this project, please open an issue or pull request on GitHub. All contributions are welcome.

## License

This project is licensed under the MIT License.

