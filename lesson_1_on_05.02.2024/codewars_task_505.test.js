import { compose } from "./codewars_task_505";

describe("compose", () => {
  const addOne = (a) => a + 1;
  const multTwo = (b) => b * 2;

  test("compose is a function", () => {
    expect(compose).toBeInstanceOf(Function);
  });
  test("function should coupose any nubmer of functionS together", () => {
    expect(compose(multTwo, addOne)(5)).toBe(12);
    expect(compose(addOne, multTwo, addOne, addOne)(2)).toBe(9);
    expect(compose(addOne)(3)).toBe(4);
    expect(compose()(10)).toBe(10);
  });
});
