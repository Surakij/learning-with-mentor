export function formatWords(words) {
  const arrException = ["", null];
  if (
    !words ||
    words === null ||
    words.length === 0 ||
    words.toString() === ""
  ) {
    return "";
  }
  const newArr = words.flat().filter((el) => !arrException.includes(el));

  if (newArr.length === 1) {
    return newArr.toString();
  } if (newArr.length === 2) {
    return newArr.join(" and ");
  } 
    const arr1 = newArr.slice(-2).join(" and ");
    return `${newArr.slice(0, newArr.length - 2).join(", ")  }, ${  arr1}`;
  
}
