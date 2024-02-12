function findShort(s) {
  const lengths = s.split(" ").map((el) => el.length);
  // let count = Infinity;
  // for (const length of lengths) {
  //   if (length < count) {
  //     count = length;
  //   }
  // }
  // return count;
  return Math.min(...lengths);
}

console.log(Math.min(3, 8, 2, 9)); // 2

const arr = [3, 8, 2, 9];
console.log(Math.min(...arr)); // 2

// 20 25 21 15 18 12 33 24 28

// >>> 7
// >>> 4
// >>> 4
// >>> 3
// >>> 5
// >>> 5
// >>> 3
// >>> 5
// >>> 7

console.log(
  "===",
  findShort("bitcoin take over the world maybe who knows perhaps"),
);
