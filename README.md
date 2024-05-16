# Easter Date Calculation

[![NPM Type Definitions](https://img.shields.io/npm/types/easter-date.js)](https://www.npmjs.com/package/easter-date.js)
[![CodeQL](https://github.com/42proger/easter-date.js/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/42proger/easter-date.js/actions/workflows/github-code-scanning/codeql)
[![npm bund#le size](https://img.shields.io/bundlephobia/minzip/easter-date.js)](https://www.npmjs.com/package/easter-date.js)

This project provides two algorithms for calculating the date of Easter in the Western (Catholic and Protestant) and Orthodox calendars.

Based on Gauss's Easter algorithm:
https://doi.org/10.1007/s00407-004-0078-5

## Installing

Install with npm

```bash
  npm install easter-date.js
```
or yarn:

```bash
  yarn add easter-date.js
```

## Usage/Examples

To use the algorithms, import them into your JavaScript code:
```javascript
// ES Modules
import { getWesternEaster, getOrthodoxEaster } from "easter-date.js";
```

```javascript
// CommonJS
const { getWesternEaster, getOrthodoxEaster } = require('easter-date.js');
```

and pass the desired year as an argument:

```javascript
getWesternEaster(2024); 
// Output: { day: 31, month: 3, year: 2024 }

getOrthodoxEaster(2024); 
// Output: { day: 5, month: 5, year: 2024 }
```

## Run Locally

Clone the project

```bash
  git clone https://github.com/42proger/easter-date.js
```

Go to the project directory

```bash
  cd easter-date.js
```

Install dependencies

```bash
  npm install
```

Run a compile

```bash
  npm run build
```

## Running Tests

To run the tests, install the required dependencies and run the following command:

```bash
  npm run test
```

## License

[MIT](https://opensource.org/licenses/MIT)
