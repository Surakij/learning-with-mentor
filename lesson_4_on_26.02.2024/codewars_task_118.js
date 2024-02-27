// const dict = {
//   ".": " [dot] ",
//   "@": " [at] ",
// }
// function replacement(el) {
//   // return dict[el] ?? el;
//   // return el === "." ? " [dot] " : el === "@" ? " [at] " : el;
// }

// replace

function obfuscate(email) {
  return email.replaceAll(".", " [dot] ").replace("@", " [at] ");

  // return email.split("").map(replacement).join("");
}

console.log(obfuscate("test@123.com"));
console.log(obfuscate("Code_warrior@foo.ac.uk"));
