import { abbrevName } from "./codewars_task_3";

describe("function abbrevName", () => {
  test("is a function", () => {
    expect(abbrevName).toBeInstanceOf(Function);
  });

  test("shout convert a name into initials with dot betwen two capital letters", () => {
    expect(abbrevName("Sam Harris")).toEqual("S.H");
    expect(abbrevName("Patrick Feenan")).toEqual("P.F");
    expect(abbrevName("Evan Cole")).toEqual("E.C");
    expect(abbrevName("harry Potter")).toEqual("H.P");
  });
});
