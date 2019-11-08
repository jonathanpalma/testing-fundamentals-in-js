const { currencyToNumber, getRandomNumberBetween } = require("../utils");

expect.extend({
  toBeWithinRange(received, floor, ceiling) {
    const pass = received >= floor && received <= ceiling;
    if (pass) {
      return {
        message: () =>
          `expected ${received} not to be within range ${floor} - ${ceiling}`,
        pass: true
      };
    } else {
      return {
        message: () =>
          `expected ${received} to be within range ${floor} - ${ceiling}`,
        pass: false
      };
    }
  }
});

describe("getRandomNumberBetween", () => {
  it("should return only numbers", () => {
    const start = 0;
    const end = 10;
    const number = getRandomNumberBetween(start, end);
    expect(typeof number).toBe("number");
  });

  it("should return numbers between a range", () => {
    const start = 0;
    const end = 10;
    for (let i = 0; i < 25; i++) {
      // const number = getRandomNumberBetween(start, end + 10);
      const number = getRandomNumberBetween(start, end);
      expect(number).toBeWithinRange(start, end);
    }
  });
});

describe("currencyToNumber", () => {
  it("should return only numbers", () => {
    const currency = "$10.25";
    const number = currencyToNumber(currency);
    expect(typeof number).toBe("number");
  });

  it("should has the same value", () => {
    const currency = "$10.25";
    const number = currencyToNumber(currency);
    expect(number).toBe(10.25);
  });
});
