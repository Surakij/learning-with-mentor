function digPow(n, p) {
  const arrNumberN = `${n}`.split("");
  let sum = 0;
  for (let i = 0; i < arrNumberN.length; i++) {
    sum += (+arrNumberN[i]) ** (p + i);
  }

  return sum % n === 0 ? sum / n : -1;
}

console.log(digPow(89, 1), "is equal =  1?");
console.log(digPow(92, 1), "is equal =  -1?");
console.log(digPow(46288, 3), "is equal = 51?");
