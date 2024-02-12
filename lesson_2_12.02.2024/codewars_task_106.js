function min(arr, toReturn) {
  return toReturn === "value"
    ? Math.min(...arr)
    : arr.indexOf(Math.min(...arr));
}

console.log(min([1, 2, 3, 4, 5], "value"), "is = 1?");
console.log(min([1, 2, 3, 4, 5], "index"), "is = 0?");
