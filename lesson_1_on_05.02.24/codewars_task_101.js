export function findShort(s) {
  return s
    .split(" ")
    .map((el) => el.length)
    .sort((a, b) => a - b)
    .shift();
}
