function dataReverse(data) {
  const newarr1 = [].concat(data);
  const newArr3 = [];
  while (newarr1.length > 0) {
    newArr3.push(...newarr1.splice(-8));
  }
  return newArr3;
}

console.log(
  dataReverse([
    1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1,
    0, 1, 0, 1, 0, 1, 0,
  ]),
  " = [1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1]",
);

console.log(
  dataReverse([0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1]),
  " = [0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0]",
);
