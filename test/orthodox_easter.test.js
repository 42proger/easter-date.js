const getOrthodoxEaster = require("../src/orthodox_easter.js");

describe("getOrthodoxEaster", () => {
  test("should return correct date for 2022", () => {
    expect(getOrthodoxEaster(2022)).toBe(
      "In 2022 Orthodox Easter on 24.04"
    );
  });

  test("should return correct date for 1900", () => {
    expect(getOrthodoxEaster(1900)).toBe(
      "In 1900 Orthodox Easter on 22.04"
    );
  });

  test("should return correct date for 2000", () => {
    expect(getOrthodoxEaster(2000)).toBe(
      "In 2000 Orthodox Easter on 30.04"
    );
  });

  test("should return correct date for 2100", () => {
    expect(getOrthodoxEaster(2100)).toBe("In 2100 Orthodox Easter on 1.05");
  });
});
