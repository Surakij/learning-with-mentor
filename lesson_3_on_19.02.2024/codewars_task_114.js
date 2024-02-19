function expandedForm(num) {
  return num
    .toString()
    .split("")
    .map((el, i, strArr) => el + "0".repeat(strArr.length - (i + 1)))
    .filter((el) => !el.startsWith("0"))
    .join(" + ");
}

// for (let i = 0; i < strArr.length; i++) {
//   if (+strArr[i] > 0) {
//     result.push( strArr[i] + "0".repeat(strArr.length - (i + 1)));
//   }
// }

// startsWith

console.log(expandedForm(12)); // === "10 + 2");
console.log(expandedForm(42)); // === "40 + 2");
console.log(expandedForm(70304)); // === "70000 + 300 + 4");
