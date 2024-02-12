const capitals = function (word) {
  return word.match(/[A-Z]/g).map((lt) => word.indexOf(lt));
};

console.log(capitals("CodEWaRs"), " = [0,3,4,6]");
