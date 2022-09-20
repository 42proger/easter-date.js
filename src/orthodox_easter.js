/*
  Calculates Orthodox Easter date
  using Gauss's algorithm.
*/

function getOrthodoxEaster(year) {
  const a = year % 19,
    b = year % 4,
    c = year % 7,
    d = (19 * a + 15) % 30,
    e = (2 * b + 4 * c + 6 * d + 6) % 7,
    f = d + e;
  let easterDay, easterMonth;

  if (f <= 26) {
    easterDay = f + 4;
    easterMonth = "04";
  } else {
    easterDay = f - 26;
    easterMonth = "05";
  }

  // Return Orthodox Easter date
  return `In ${year} Orthodox Easter on ${easterDay}.${easterMonth}`;
}

module.exports = getOrthodoxEaster;
