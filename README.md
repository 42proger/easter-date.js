# Easter Dates Calculator

This project provides two algorithms for calculating the date of Easter in the Western (Catholic and Protestant) and Orthodox calendars.

Based on Gauss's Easter algorithm:
https://doi.org/10.1007/s00407-004-0078-5

## Usage/Examples

To use the algorithms, import them into your JavaScript code and pass the desired year as an argument. For example:

```javascript
import { getWesternEaster, getOrthodoxEaster } from "./lib/easter.js";

console.log(getWesternEaster(2024)); // Output: { day: 31, month: 3, year: 2024 }
console.log(getOrthodoxEaster(2024)); // Output: { day: 5, month: 5, year: 2024 }
```

## Run Locally

Clone the project

```bash
  git clone https://github.com/42proger/easter.js
```

Go to the project directory

```bash
  cd easter.js
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
