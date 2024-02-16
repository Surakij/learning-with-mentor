function bingo(ticket, win) {
  let count = 0;
  for (let i = 0; i < ticket.length; i++) {
    if (ticket[i][0].includes(String.fromCharCode(ticket[i][1]))) {
      count++;
    }
  }
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
