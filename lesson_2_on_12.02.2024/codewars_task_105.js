function digPow(n, p) {
  // const arrNumberN = n.toString().split("").map(x => Number(x))
  const arrNumberN = n.toString().split("").map(Number);
  // let sum = 0;
  // for (let i = 0; i < arrNumberN.length; i++) {
  //   sum += arrNumberN[i] ** (p + i);
  // }

  const sum = arrNumberN.reduce(
    (acc, currentValue, index) => acc + currentValue ** (p + index),
    0,
  );
  return sum % n === 0 ? sum / n : -1;
}

// console.log(digPow(89, 1), "is equal =  1?");
// console.log(digPow(92, 1), "is equal =  -1?");
console.log(digPow(46288, 3), "is equal = 51?");

// 4 ** 3 + 6 ** 4 + 2 ** 5 + 8 ** 6 + 8 ** 7
// ------   ------   ------
//  64       1296
//-----------------
//     1360

//   acc   index  currentValue
//     0   0      4              →  64
//    64   1      6              →  64+1296 = 1360
//  1360   2      2              →  1360+32 = 1392
