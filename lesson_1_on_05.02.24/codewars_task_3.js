export function abbrevName(name) {
  return name
    .split(" ")
    .map((el) => el.split("").shift().toUpperCase())
    .join(".");
}
