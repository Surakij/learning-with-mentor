function scrollingText(text) {
  let currentStr = text.toUpperCase();
  const result = [];
  for (let i = 0; i < text.length; i++) {
    result.push(currentStr);
    currentStr = currentStr.slice(1) + currentStr[0];
  }
  return result;
}

console.log(scrollingText("abc"), '= ["ABC","BCA","CAB"]');
