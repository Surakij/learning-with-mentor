function getLengthOfMissingArray(arrayOfArrays) {
  if (!arrayOfArrays || arrayOfArrays.length === 0) {
    return 0;
  }

  for (let i = 0; i < arrayOfArrays.length; i++) {
    if (arrayOfArrays[i] === null || arrayOfArrays[i].length === 0) {
      return 0;
    }
  }
  const arrOfLength = arrayOfArrays.map((el) => el.length);
  const minLength = Math.min(...arrOfLength);
  const initialSumOfLength = arrOfLength.reduce(
    (acc, current) => acc + current,
    0,
  );

  let fullSum = 0;

  for (let i = 0; i < arrayOfArrays.length + 1; i++) {
    fullSum += i + minLength;
  }
  return fullSum - initialSumOfLength;
}

console.log(
  getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]),
  3,
);
console.log(
  getLengthOfMissingArray([[5, 2, 9], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]),
  2,
);
console.log(getLengthOfMissingArray([[null], [null, null, null]]), 2); //! !!!!!!!!??????????
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
  4,
);
console.log(
  getLengthOfMissingArray([
    [4, 0],
    [3],
    [0, 4, 3, 1],
    [1, 4, 1, 3, 1],
    [0, 0, 2, 1, 3, 3],
    [],
  ]),
  0,
);
console.log(
  getLengthOfMissingArray([
    [1, 4, 3, 2],
    [1, 0, 4, 0, 2, 2],
    [3, 0, 2, 4, 1, 2, 4],
    [2, 0, 4, 1, 3, 4, 2, 2],
    [2, 4, 2, 1, 0, 1, 2, 0, 1],
  ]),
  5,
);
console.log(
  getLengthOfMissingArray([
    [3, 1, 3, 3],
    [2, 1, 1, 3, 1],
    [4, 3, 0, 1, 0, 0],
    [1, 0, 1, 2, 1, 3, 2, 3],
    [2, 4, 2, 0, 1, 2, 1, 2, 4],
  ]),
  7,
);

console.log(
  getLengthOfMissingArray([
    [],
    [0],
    [0, 4],
    [0, 0, 3, 3, 2, 4, 2, 4],
    [1, 1, 3],
    [3, 2, 0, 2],
    [4, 3, 0, 4, 4, 1, 1, 3, 2],
    [0, 0, 4, 4, 3, 0, 2],
    [4, 2, 3, 4, 3],
  ]),
  0,
);
