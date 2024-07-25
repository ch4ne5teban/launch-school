//Write a function that takes a non-empty string argument and returns the middle character(s) of the string. If the string has an odd length, you should return exactly one character. If the string has an even length, you should return exactly two characters.

//Using template literal
function centerOf(string) {
  let length = string.length;
  let center = Math.floor(length / 2);

  if (length % 2 !== 0) {
    return `${string[center]}`;
  } else {
    return `${string[center - 1]}${string[center]}`;
  }
}

//Using slice
function centerOf(string) {
  let length = string.length;
  let center = Math.floor(length / 2);

  if (length % 2 !== 0) {
    return string.slice(center, center + 1);
  } else {
    return string.slice(center - 1, center + 1);
  }
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"