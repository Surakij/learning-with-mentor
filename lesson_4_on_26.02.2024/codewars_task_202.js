function getLengthOfMissingArray(arrayOfArrays) {
  if (arrayOfArrays.length < 1) {
    return 0;
  }
  const arr = arrayOfArrays.map((el) => el.length);

  const initialSum = arr.reduce((acc, current) => acc + current, 0);
  const fullSum =
    ((arrayOfArrays.length + 1) * (1 + (arrayOfArrays.length + 1))) / 2;

  //   Array.from(
  //     { length: arrayOfArrays.length + 1 },
  //     (_, ind) => ind + 1,
  //   ).reduce((acc, current) => acc + current, 0);
  return fullSum - initialSum;
}

console.log(
  getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]),
  3,
);
console.log(
  getLengthOfMissingArray([[5, 2, 9], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]),
  2,
);
console.log(getLengthOfMissingArray([[null], [null, null, null]]), 2);
console.log(
  getLengthOfMissingArray([
    ["a", "a", "a"],
    ["a", "a"],
    ["a", "a", "a", "a"],
    ["a"],
    ["a", "a", "a", "a", "a", "a"],
  ]),
  5,
);
console.log(getLengthOfMissingArray([]), 0);
console.log(
  getLengthOfMissingArray([
    [2, 2],
    [2, 2, 2],
  ]),
  1,
);
