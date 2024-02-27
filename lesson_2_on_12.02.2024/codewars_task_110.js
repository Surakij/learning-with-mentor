function isHomogenous(array) {
  return array.every((el) => typeof el === typeof array[0]);
}

function filterHomogenous(arrays) {
  return arrays.filter(isHomogenous);
  // const result = [];
  // for (let array of arrays) {
  //   if (array.length > 0 && isHomogenous(array)) {
  //     result.push(array);
  //   }
  // }
  // return result;
}

console.log(
  filterHomogenous([[1, 5, 4], ["a", 3, 5], ["b"], [], ["1", 2, 3]]),
  ` = [[1, 5, 4], ['b']]`,
);
console.log(
  filterHomogenous([
    [123, 234, 432],
    ["", "abc"],
    [""],
    ["", 1],
    ["", "1"],
    [],
  ]),
  ` =[[123, 234, 432], ['', 'abc'], [''], ['', '1']]`,
);

// can use filter()
