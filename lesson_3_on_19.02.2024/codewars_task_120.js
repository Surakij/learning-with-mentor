function countSmileys(arr) {
  const arrExemples = [
    ":)",
    ":-)",
    ":D",
    ":-D",
    ":~D",
    ":~)",
    ";)",
    ";-)",
    ";D",
    ";-D",
    ";~D",
    ";~)",
  ];
  // let count = 0;
  // arr.forEach(element => {
  //    count += arrExemples.includes(element)? 1 : 0;
  // });
  // return count;

  return arr.filter((el) => arrExemples.includes(el)).length;
}

console.log(countSmileys([]), 0);
console.log(countSmileys([":D", ":~)", ";~D", ":)"]), 4);
console.log(countSmileys([":)", ":(", ":D", ":O", ":;"]), 2);
console.log(countSmileys([";]", ":[", ";*", ":$", ";-D"]), 1);
