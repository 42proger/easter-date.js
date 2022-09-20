
# Easter Dates Calculator

This project provides two algorithms for calculating the date of Easter in the Western (Catholic and Protestant) and Orthodox calendars.

Based on Gauss's Easter algorithm:
https://en.wikipedia.org/wiki/Date_of_Easter#Gauss's_Easter_algorithm

---

# Вычисление даты Пасхи

В данном проекте представлены два алгоритма расчёта даты Пасхи по католическому (протестантскому) и православному календарям.

На основе алгоритма Гаусса вычисления даты Пасхи:
https://ru.wikipedia.org/wiki/Алгоритм_Гаусса_вычисления_даты_Пасхи

---


## Usage/Examples

To use the algorithms, import them into your JavaScript code and pass the desired year as an argument. For example:

```javascript

import { getWesternEaster } from './western_easter.js';

console.log(getWesternEaster(2022)); // Output: "In 2022 Catholic and Protestant Easter on 17.04"

```
or 

```javascript

import { getOrthodoxEaster } from './orthodox_easter.js';

console.log(getOrthodoxEaster(2022)); // Output: "In 2022 Orthodox Easter on 24.04"
```


## Deployment

To run the tests, install the required dependencies and run the following command:

```bash
  npm run test
```


## License

[MIT](https://opensource.org/licenses/MIT)

