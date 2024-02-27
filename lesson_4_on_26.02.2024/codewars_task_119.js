function checkExam(array1, array2) {
  // const result = array1.reduce(
  //   (acc, el, index) =>
  //     acc + (el === array2[index] ? 4 : array2[index] === "" ? 0 : -1),
  //   0,
  // );
  let count = 0;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      count += 4;
    } else if (array2[i] !== "") {
      count -= 1;
    }
  }

  return Math.max(0, count);
}

console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]), 6);
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""]), 7);
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]), 16);
console.log(checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"]), 0);
