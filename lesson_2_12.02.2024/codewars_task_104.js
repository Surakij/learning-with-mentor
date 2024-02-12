function getCount(str) {
  return str
    .split("")
    .filter((letters) => ["a", "e", "i", "o", "u"].includes(letters)).length;
}

console.log(getCount("the last hope"), "=== 4");
console.log(getCount("abracadabra"), "=== 5");
