// export
function arrayDiff(a, b) {
  // if (a.length === 0 || b.length === 0) {
  //   return a;
  // }
  return a.filter((el) => !b.includes(el));
}

const a = [1, 2, 3, 4];
const b = [1];

const d = arrayDiff(a, b); // [1, 2, 3, 4]

d.push(100);

console.log("a", a);
console.log("d", d);
