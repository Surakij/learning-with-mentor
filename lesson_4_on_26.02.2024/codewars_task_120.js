function isSmile(str) {
  // const hasSmile = [")", "D"].includes(str[str.length - 1]);
  const hasEyes = [":", ";"].includes(str[0]);
  const hasNose = ["~", "-"].includes(str[1]);
  const hasSmile = [")", "D"].includes(str.at(-1));

  if (str.length === 3) {
    return hasEyes && hasNose && hasSmile;
  }
  if (str.length === 2) {
    return hasEyes && hasSmile;
  }
  return false;
}

function countSmileys(arr) {
  return arr.filter(isSmile).length;

  // const arrExemples = [
  //   ":)",
  //   ":-)",
  //   ":D",
  //   ":-D",
  //   ":~D",
  //   ":~)",
  //   ";)",
  //   ";-)",
  //   ";D",
  //   ";-D",
  //   ";~D",
  //   ";~)",
  // ];
  // let count = 0;
  // arr.forEach(element => {
  //    count += arrExemples.includes(element)? 1 : 0;
  // });
  // return count;
  // return arr.filter((el) => arrExemples.includes(el)).length;
}

console.log(countSmileys([]), 0);
console.log(countSmileys([":D", ":~)", ";~D", ":)"]), 4);
console.log(countSmileys([":)", ":(", ":D", ":O", ":;"]), 2);
console.log(countSmileys([";]", ":[", ";*", ":$", ";-D"]), 1);
