const capitals = function (word) {
  // return word.match(/[A-Z]/g).map((lt, index) => word.indexOf(lt));
  const arrNew = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      arrNew.push(i);
    }
  }
  return arrNew;
};

console.log(capitals("CodEWaRs"));
console.log(capitals("LEETCODE"));
