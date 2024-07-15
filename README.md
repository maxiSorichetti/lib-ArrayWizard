# Prop Seeker 📜

![Build](https://img.shields.io/badge/build-passing-brightgreen)
![Coverage](https://img.shields.io/badge/coverage-100%25-brightgreen)

## Description

Prop Seeker is a utility library developed in TypeScript with support for React and Vite projects. This library provides useful methods for array manipulation, validations, string operations, among others.

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

# Scripts

These are the available scripts in the project:

- `build`: Compiles the project and builds the production files.
- `lint`: Runs ESLint to analyze the code.
- `check:types`: Verifies TypeScript types without emitting files.
- `prepare`: Sets up Husky for pre-commit hooks.
- `test`: Runs the tests using Vitest and generates a coverage report.
- `test:watch`: Runs the tests in watch mode.

To run these scripts, use:

```bash
npm run <script>
```

# Usage

To use this library, import the necessary methods into your TypeScript or JavaScript project.

```typescript
import { sum, map, difference, flattering, intersection, uniqueElements } from 'prop-seeker';
import { isEmpty, isNullOrUndefined, isObject, isObjectLike, isString } from 'prop-seeker';
import { capitalize, includes } from 'prop-seeker';
import { throttle } from 'prop-seeker';
```

## Arrays

- **arraylable** 🧩
  - Converts a value to an array if it is not already an array. If the value is `null`, it returns an empty array.

- **chunks** 🍰
  - Splits an array into chunks of a specified size. Returns an array of arrays, each containing a subset of the original array.

- **difference** ➖
  - Returns the elements of the first array that are not present in the second array.

- **flattering** 🌟
  - Flattens an array up to a specified depth. Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

- **intersection** ✴️
  - Returns an array containing the elements common to both arrays.

- **map** 🗺️
  - Applies a transformation function to each element of an array and returns a new array with the transformed elements.

- **sum** ➕
  - Sums all the numbers in an array and returns the total.

- **uniqueElements** 🌈
  - Returns a new array with unique elements, removing duplicates from the original array.

## Check

- **isEmpty** 🏷️
  - Checks if a value is empty. For objects, it checks if the object has no own properties. For other types, it checks if the value is falsy.

- **isNullOrUndefined** ❓
  - Checks if a value is `null` or `undefined`.

- **isObject** 🛠️
  - Checks if a value is an object. Returns `false` for `null` and non-object types.

- **isObjectLike** 🌐
  - Checks if a value is object-like. Excludes `Date`, `RegExp`, arrays, `null`, and other non-object types.

- **isString** 🔤
  - Checks if a value is a string.

## Strings

- **capitalize** 🔠
  - Capitalizes the first letter of each word in a string and converts the rest of the letters to lowercase.

- **includes** 🔍
  - Checks if a string contains a specified substring. Returns `false` if either argument is not a string.

## Timing

- **throttle** ⏳
  - Creates a throttled function that only invokes the provided function at most once per every specified delay period.

- **debounce** ⌛
  - (Not yet implemented) Creates a debounced function that delays the invocation of the provided function until after a specified delay period has elapsed since the last time the debounced function was invoked.

## Contributing

To contribute to this project, please open an issue or pull request on GitHub. All contributions are welcome.

## License

This project is licensed under the MIT License.

