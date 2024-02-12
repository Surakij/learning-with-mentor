function rowWeights(array) {
  const result = [0, 0];
  for (let i = 0; i < array.length; i++) {
    i % 2 === 0 ? (result[0] += array[i]) : (result[1] += array[i]);
  }
  return result;
}

console.log(rowWeights([80]), "= [80,0]");
console.log(rowWeights([100, 50]), "= [100,50]");
console.log(rowWeights([50, 60, 70, 80]), "= [120,140]");
console.log(rowWeights([13, 27, 49]), "= [62,27]");
console.log(rowWeights([70, 58, 75, 34, 91]), "= [236,92]");
