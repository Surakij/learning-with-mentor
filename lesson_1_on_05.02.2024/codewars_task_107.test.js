import { arrayDiff } from "./codewars_task_107";

describe("arrayDiff", () => {
  test("is a function", () => {
    expect(arrayDiff).toBeInstanceOf(Function);
  });
  test("It should remove all the values from first argument array, which are present in the argument two and keeping their order", () => {
    expect(arrayDiff([1, 2], [1])).toEqual([2]);
    expect(arrayDiff([1, 2, 2], [1])).toEqual([2, 2]);
    expect(arrayDiff([1, 2, 2], [2])).toEqual([1]);
    expect(arrayDiff([1, 2, 2], [])).toEqual([1, 2, 2]);
    expect(arrayDiff([], [1, 2])).toEqual([]);
    expect(arrayDiff([1, 2, 3], [1, 2])).toEqual([3]);
  });
});
