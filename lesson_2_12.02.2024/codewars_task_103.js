function generateShape(integer) {
  let str = "";

  for (let i = 0; i < integer; i++) {
    str += "\n";
    for (let j = 0; j < integer; j++) {
      str += "+";
    }
  }
  return str.trim();
}

console.log(generateShape(3));
