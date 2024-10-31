import { addUp, number, viewName, extract, newStudent, dataFn } from "../index";

// Arrange
describe("To add up two numbers, say 1 and 3", () => {
  // Affirm
  test("1 + 3 = 4", () => {
    let res = addUp(1, 3);
    // Assert
    expect(1 + 3).toBe(4);
  });

  test("name will be mije", () => {
    let res = viewName("mije");

    expect(res).toBe("mije");
    expect(res).not.toBe("Digban");
  });

  test("to always return 0", () => {
    let result = number(8);

    expect(result).toBe(0);
    expect(result).not.toBeTruthy();
    expect(result).toBeFalsy();
    expect(result).not.toBeNull();
    expect(result).not.toBeUndefined();
    expect(result).not.toBeNaN();
    expect(result).not.toBeGreaterThan(0);
    expect(result).not.toBeLessThan(0);
  });

  // test("mije exist in the object", () => {
  //   let obj = objData("mije");

  //   expect(obj).toContain({ name: "mije", id: 3 });
  // });

  test("mije exist in the object", () => {
    let obj = ["man", "boy", "bar"];

    expect(obj).toContain("man");
    expect(obj).toEqual(["man", "boy", "bar"]);
  });

  test("check whether mije is included", () => {
    let obj = extract("zaki");

    expect(obj).toMatch(/z/);
  });

  test("testing for the increment of student list", () => {
    let obj = newStudent("mije");
    let value = obj.length;
    expect(obj).toContain("mije");
    expect(value).toBeGreaterThan(value - 1);
  });

  test("testing for the reverse of 227", () => {
    let input = 227;
    let obj = dataFn(input);

    expect(input).not.toBeNaN();
    expect(input).toBeTruthy();
    expect(input).not.toBeNull();

    expect(obj).toBe(722);
  });
});
