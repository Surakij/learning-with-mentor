function filterList(l) {
  return l.filter((el) => typeof el === "number");
}

console.log("==", filterList([1, 2, "a", "b"])); //= = [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
