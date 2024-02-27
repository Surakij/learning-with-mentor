function rgb(r, g, b) {
  return (
    [r, g, b]
      // .map((el) => (el > 255 ? 255 : el <= 0 ? 0 : el))
      .map((el) => {
        if (el < 0) return 0;
        if (el > 255) return 255;
        return el;
      })
      .map((current) => current.toString(16).padStart(2, "0"))
      .join("")
      // .reduce(
      //   (acc, current) =>
      //     (acc +
      //       current.toString(16).padStart(2, "0")
      //       // current < 16 ? `0${current.toString(16)}` : current.toString(16)),
      //   "",
      // )
      .toUpperCase()
  );
}

console.log(rgb(0, 0, 0), " = 000000");
console.log(rgb(0, 0, -20), " = 000000");
console.log(rgb(300, 255, 255), " = FFFFFF");
console.log(rgb(173, 255, 47), " = ADFF2F");
console.log(rgb(5, 44, 249), " = 052CF9");
console.log(rgb(11, 3, 64), " = 0B0340");
