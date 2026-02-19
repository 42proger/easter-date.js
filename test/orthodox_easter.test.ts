import getOrthodoxEaster from "../src/utils/orthodox_easter";

describe("getOrthodoxEaster", () => {
  test("should return correct date for 2022", () => {
    expect(getOrthodoxEaster(2022)).toEqual({ day: 24, month: 4, year: 2022 });
  });

  test("should return correct date for 1900", () => {
    expect(getOrthodoxEaster(1900)).toEqual({ day: 22, month: 4, year: 1900 });
  });

  test("should return correct date for 2000", () => {
    expect(getOrthodoxEaster(2000)).toEqual({ day: 30, month: 4, year: 2000 });
  });

  test("should return correct date for 2100", () => {
    expect(getOrthodoxEaster(2100)).toEqual({ day: 1, month: 5, year: 2100 });
  });

  test("should throw for non-integer year", () => {
    expect(() => getOrthodoxEaster(2024.5)).toThrow("year must be an integer");
  });
});
