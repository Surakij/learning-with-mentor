function box(n) {
  const outer = "-".repeat(n);
  const inner = `-${" ".repeat(n - 2)}-`;
  const initArr = Array(n).fill(outer);

  for (let i = 1; i < initArr.length - 1; i++) {
    initArr[i] = inner;
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
