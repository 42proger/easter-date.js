import getWesternEaster from "../src/utils/western_easter";

describe("getWesternEaster", () => {
  test("should return correct date for 2022", () => {
    expect(getWesternEaster(2022)).toEqual({ day: 17, month: 4, year: 2022 });
  });

  test("should return correct date for 1900", () => {
    expect(getWesternEaster(1900)).toEqual({ day: 15, month: 4, year: 1900 });
  });

  test("should return correct date for 2000", () => {
    expect(getWesternEaster(2000)).toEqual({ day: 23, month: 4, year: 2000 });
  });

  test("should return correct date for 2100", () => {
    expect(getWesternEaster(2100)).toEqual({ day: 28, month: 3, year: 2100 });
  });
});
