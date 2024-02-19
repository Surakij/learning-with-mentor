import { findShort } from "./codewars_task_101";

describe("findShort", () => {
  test("is function", () => {
    expect(findShort).toBeInstanceOf(Function);
  });
  test("return number of length a shortest word ", () => {
    expect(
      findShort("bitcoin take over the world maybe who knows perhaps"),
    ).toBe(3);
    expect(
      findShort(
        "turns out random test cases are easier than writing out basic ones",
      ),
    ).toBe(3);
    expect(findShort("Let's travel abroad shall we")).toBe(2);
  });
});
