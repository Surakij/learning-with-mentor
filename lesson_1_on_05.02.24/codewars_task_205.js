function formatWords(words) {
  if (words === null) {
    return "";
  }

  const nonEmptyWords = words.filter((el) => el !== "");

  if (nonEmptyWords.length === 0) {
    return "";
  }
  if (nonEmptyWords.length === 1) {
    return nonEmptyWords[0];
  }
  // if (nonEmptyWords.length === 2) {
  //   return nonEmptyWords.join(" and ");
  // }
  // const arr1 = nonEmptyWords.slice(-2).join(" and ");
  // return `${nonEmptyWords.slice(0, nonEmptyWords.length - 2).join(", ")}, ${arr1}`;

  return `${nonEmptyWords.slice(0, -1).join(", ")} and ${nonEmptyWords.at(-1)}`;
  // ["one"].join(", ") === "one"

  // ["one", "four"]

  // "one, two" + ", " + "three and four"
  // "one, two, three" + " and " +  "four"
}

// console.log(formatWords(["one", "two", "three", "four"])) // .toEqual("one, two, three and four",);
// console.log(formatWords(["one"])) // .toEqual("one");
// console.log(formatWords(["one", "", "three"])) // .toEqual("one and three");
// console.log(formatWords(["", "", "three"])) // .toEqual("three");
// console.log(formatWords(["one", "two", ""])) // .toEqual("one and two");
// console.log(formatWords(null)) // .toEqual("");
console.log(formatWords([])); // .toEqual("");
console.log(formatWords([""])); // .toEqual("");
console.log(formatWords(["", "", "", ""])); // .toEqual("");
