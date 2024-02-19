function checkExam(array1, array2) {
  const result = array1.reduce(
    (acc, el, index) =>
      acc + (el === array2[index] ? 4 : array2[index] === "" ? 0 : -1),
    0,
  );
  return result <= 0 ? 0 : result;
}

console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]), 6);
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""]), 7);
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]), 16);
console.log(checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"]), 0);
