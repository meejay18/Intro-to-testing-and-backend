import { firstTest, fourthTest, secondTest, thirdTest } from "../Assignment";

// FIRST TEST
describe("Testing if the function returns a string", () => {
  test("should return a string", () => {
    let result = firstTest("sam");

    expect(result).toBe("sam");
  });

  test("Testing if a function returns a positive number", () => {
    let result = secondTest(6, 5);
    expect(result).toBe(1);
  });

  test("Testing if a number returns boolean", () => {
    let result = thirdTest(false);
    expect(result).toBeFalsy;
    expect(result).not.toBeTruthy;
  });

  test("Testing if a variable returns Null", () => {
    let result = fourthTest(null);
    expect(result).toBeNull;
  });

  test("Testing if a function returns undefined", () => {});
});
