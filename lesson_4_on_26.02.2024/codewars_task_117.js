function findMagic(arr) {
  //   let result = -1;
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] === i) {
  //       result = i;
  //     }
  //   }
  //   return result;

  return arr.findIndex((el, ind) => el === ind);
}

console.log(findMagic([-20, -10, 2, 10, 20]));
