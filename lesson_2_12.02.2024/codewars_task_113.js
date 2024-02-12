function scrollingText(text) {
  let currentStr = text.toUpperCase();
  const result = [currentStr];
  for (let i = 1; i < text.length; i++) {
    result.push((currentStr = currentStr.slice(1) + currentStr.charAt(0)));
  }
  return result;
}

console.log(scrollingText("abc"), '= ["ABC","BCA","CAB"]');
