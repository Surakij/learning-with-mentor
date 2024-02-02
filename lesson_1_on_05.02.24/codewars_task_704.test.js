import { smartSum } from "./codewars_task_704";

describe("smartSum", () => {
  test("smartSum is function", () => {
    expect(smartSum).toBeInstanceOf(Function);
  });
  test("should return sum of numbers with array of any nasting", () => {
    expect(smartSum(1, 2)).toBe(3);
    expect(smartSum([1, 2], 3)).toBe(6);
    expect(smartSum([1, [2, 3, [4]]], 5)).toBe(15);
    expect(smartSum(1, 2, [3], [4, [5, [6, [7, [8, [9], 10], 11], 12]]])).toBe(
      78,
    );
  });
});
