const vowels = ["a", "e", "i", "o", "u"];

function getCount(str) {
  return str.split("").filter((letters) => vowels.includes(letters)).length;
}

console.log(getCount("the last hope"), "=== 4");
console.log(getCount("abracadabra"), "=== 5");
