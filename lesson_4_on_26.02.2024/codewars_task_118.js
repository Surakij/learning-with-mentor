function replacement(el) {
  return el === "." ? " [dot] " : el === "@" ? " [at] " : el;
}

function obfuscate(email) {
  return email.split("").map(replacement).join("");
}

console.log(obfuscate("test@123.com"));
console.log(obfuscate("Code_warrior@foo.ac.uk"));
