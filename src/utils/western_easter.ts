/*
  Calculates Easter in the Gregorian/Western (Catholic and Protestant) calendar 
  using Gauss's algorithm.
*/

import { EasterDate } from "../types/types";

function getWesternEaster(year: number): EasterDate {
  if (!Number.isInteger(year)) {
    throw new TypeError("year must be an integer");
  }

  const a: number = year % 19,
    b: number = year % 4,
    c: number = year % 7,
    k: number = Math.floor(year / 100),
    p: number = Math.floor((13 + 8 * k) / 25),
    q: number = Math.floor(k / 4),
    M: number = (15 - p + k - q) % 30,
    N: number = (4 + k - q) % 7,
    d: number = (19 * a + M) % 30,
    e: number = (2 * b + 4 * c + 6 * d + N) % 7,
    f: number = d + e + 22;
  const easterMonth: number = f <= 31 ? 3 : 4;
  let easterDay: number;

  if (d === 29 && e === 6) {
    easterDay = 19;
  } else if (d === 28 && e === 6 && (11 * M + 11) % 30 < 19) {
    easterDay = 18;
  } else {
    easterDay = f <= 31 ? f : d + e - 9;
  }

  return { day: easterDay, month: easterMonth, year };
}

export default getWesternEaster;
