function expandedForm(num) {
  const strArr = num.toString();
  let result = "";

  for (let i = 0; i < strArr.length; i++) {
    if (i > 0 && +strArr[i] > 0) {
      result += " + ";
    }
    if (+strArr[i] > 0) {
      result += strArr[i] + "0".repeat(strArr.length - (i + 1));
    }
  }
  return result;
}

console.log(expandedForm(12) === "10 + 2");
console.log(expandedForm(42) === "40 + 2");
console.log(expandedForm(70304) === "70000 + 300 + 4");
