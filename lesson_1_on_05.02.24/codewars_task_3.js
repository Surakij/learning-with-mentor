// const firstName = arr[0]
// const lastName = arr[1]

// const [firstName, lastName] = arr;

// export
function abbrevName(name) {
  const [firstName, lastName] = name.split(" ");

  return `${firstName[0]}.${lastName[0]}`.toUpperCase();

  // return name
  //   .split(" ")
  //   // .map((el) => el.split("").shift().toUpperCase())
  //   .map((el) => el[0])
  //   .join(".")
  //   .toUpperCase();
}

console.log(abbrevName("Qwe Rty"));

// "Qwe Rty" → "Q.R"
