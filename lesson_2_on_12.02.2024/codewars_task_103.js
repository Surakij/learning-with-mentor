function generateShape(integer) {
  return Array(integer).fill("+".repeat(integer)).join("\n");
}
// fill
// repeat
// join
const s = "+++\n+++\n+++"; // ['+++', '+++', '+++']

console.log(generateShape(3) === s);
console.log(generateShape(3));
