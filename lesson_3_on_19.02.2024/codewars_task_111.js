// // const letters = ticket[i][0];
// // const code = ticket[i][1];
// const [letters, code] = ticket[i]

function bingo(ticket, win) {
  let count = 0;

  ticket.forEach(([letters, code]) => {
    if (letters.includes(String.fromCharCode(code))) {
      count++;
    }
  });

  // for (const [letters, code] of ticket) {
  //   if (letters.includes(String.fromCharCode(code))) {
  //     count++;
  //   }
  // }
  return count >= win ? "Winner!" : "Loser!";
}

console.log(
  bingo(
    [
      ["WIYCOPMB", 79],
      ["LP", 66],
      ["ABSGFSJI", 77],
      ["LP", 88],
      ["JBPNA", 65],
      ["SVHJEYD", 80],
      ["BFGOQHFD", 72],
      ["OWJ", 73],
    ],
    1,
  ),
  " = Winner!",
);
console.log(
  bingo(
    [
      ["FOZK", 70],
      ["IZNON", 73],
      ["ZWHHES", 88],
      ["QR", 66],
      ["KK", 70],
      ["CC", 73],
      ["TBGYFR", 74],
    ],
    1,
  ),
  " = Winner!",
);
console.log(
  bingo(
    [
      ["KTEYHO", 84],
      ["GCTKVTKF", 75],
      ["MB", 74],
    ],
    1,
  ),
  " = Winner",
);
console.log(
  bingo(
    [
      ["VZGABWM", 81],
      ["TNJYB", 84],
      ["WJZOI", 87],
      ["QVPOW", 78],
    ],
    1,
  ),
  " = Winner",
);
