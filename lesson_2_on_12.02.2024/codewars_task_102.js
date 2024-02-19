function positiveSum(arr) {
  return arr.reduce((acc, current) => (current > 0 ? acc + current : acc), 0);
}

console.log(positiveSum([1, -2, 3, 4, 5])); // 13
console.log(positiveSum([]));
