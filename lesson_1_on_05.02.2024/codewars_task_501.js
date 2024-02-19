export function zipWith(fn, a1, a2) {
  const arrNew = [];
  if (a1.length <= a2.length) {
    for (let i = 0; i < a1.length; i++) {
      arrNew.push(fn(a1[i], a2[i]));
    }
  } else {
    for (let i = 0; i < a2.length; i++) {
      arrNew.push(fn(a1[i], a2[i]));
    }
  }
  return arrNew;
}
