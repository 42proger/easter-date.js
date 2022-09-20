const getWesternEaster = require("../src/western_easter.js");

describe("getWesternEaster", () => {
  test("should return correct date for 2022", () => {
    expect(getWesternEaster(2022)).toBe(
      "In 2022 Catholic and Protestant Easter on 17.04"
    );
  });

  test("should return correct date for 1900", () => {
    expect(getWesternEaster(1900)).toBe(
      "In 1900 Catholic and Protestant Easter on 15.04"
    );
  });

  test("should return correct date for 2000", () => {
    expect(getWesternEaster(2000)).toBe(
      "In 2000 Catholic and Protestant Easter on 23.04"
    );
  });

  test("should return correct date for 2100", () => {
    expect(getWesternEaster(2100)).toBe(
      "In 2100 Catholic and Protestant Easter on 28.03"
    );
  });
});
