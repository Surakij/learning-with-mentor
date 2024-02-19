import { formatWords } from "./codewars_task_205";

describe("formatWords", () => {
  test("formatWords is a finction", () => {
    expect(formatWords).toBeInstanceOf(Function);
  });
  test("return single string with , mark betwin words and last words go with and", () => {
    expect(formatWords(["one", "two", "three", "four"])).toEqual(
      "one, two, three and four",
    );
    expect(formatWords(["one"])).toEqual("one");
    expect(formatWords(["one", "", "three"])).toEqual("one and three");
    expect(formatWords(["", "", "three"])).toEqual("three");
    expect(formatWords(["one", "two", ""])).toEqual("one and two");
    expect(formatWords([])).toEqual("");
    expect(formatWords(null)).toEqual("");
    expect(formatWords([""])).toEqual("");
  });
});
