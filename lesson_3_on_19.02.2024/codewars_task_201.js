function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i, j];
      }
    }
  }
}

console.log(twoSum([1, 2, 3], 4), "returns [0, 2] or [2, 0]");
console.log(twoSum([3, 2, 4], 6), "returns [1, 2] or [2, 1]");
