/*
  Calculates Orthodox Easter date
  using Gauss's algorithm.
*/

import { EasterDate } from "../types/types";

function getOrthodoxEaster(year: number): EasterDate {
  const a: number = year % 19,
    b: number = year % 4,
    c: number = year % 7,
    d: number = (19 * a + 15) % 30,
    e: number = (2 * b + 4 * c + 6 * d + 6) % 7,
    f: number = d + e;
  const easterMonth = f <= 26 ? 4 : 5;
  const easterDay = f <= 26 ? f + 4 : f - 26;

  return { day: easterDay, month: easterMonth, year };
}

export default getOrthodoxEaster;
