function insertDash(num) {
  const strNum = num.toString();
  let result = strNum[0];

  for (let i = 1; i < strNum.length; i++) {
    if (+strNum[i - 1] % 2 !== 0 && +strNum[i] % 2 !== 0) {
      result += `-${strNum[i]}`;
    } else {
      result += strNum[i];
    }
  }
  return result;
}

console.log(insertDash(454793), "= 4547-9-3");
console.log(insertDash(123456), "= 123456");
console.log(insertDash(1003567), "= 1003-567");
