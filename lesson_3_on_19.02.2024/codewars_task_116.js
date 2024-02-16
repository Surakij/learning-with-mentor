function box(n) {
  const initArr = Array(n).fill("-".repeat(n));
  for (let i = 1; i < initArr.length - 1; i++) {
    const newRow = initArr[i].split("");
    for (let j = 1; j < initArr[i].length - 1; j++) {
      newRow[j] = " ";
    }
    initArr[i] = newRow.join("");
  }
  return initArr;
}

console.log(box(5), ["-----", "-   -", "-   -", "-   -", "-----"]);
console.log(box(2), ["--", "--"]);
console.log(box(4), ["----", "-  -", "-  -", "----"]);
console.log(box(6), [
  "------",
  "-    -",
  "-    -",
  "-    -",
  "-    -",
  "------",
]);
console.log(box(3), ["---", "- -", "---"]);
