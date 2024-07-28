//Write a function that takes one argument, a positive integer, and returns a string of alternating '1's and '0's, always starting with a '1'. The length of the string should match the given integer.

function stringy(number) {
  let intBits = "";

  for (let i = 0; i < number; i++) {
    if (!(i % 2)) {
      intBits += "1";
    } else {
      intBits += "0";
    }
  }

  return intBits;
}

//Using array methods
function stringy(number) {
  return [...Array(number)].map((_, i) => !(i % 2) ? "1" : "0").join("");
}

//OR
function stringy(number) {
  return Array.from({ length: number }, (_, i) => !(i % 2) ? "1" : "0").join("");
}

//Emil Raev's solution:
const stringy = length => ''.padStart(length, '10');

//Kowshik Islam's solution:
function stringy(num) {
  if (num % 2 == 0) {
    return '10'.repeat(num / 2);
  } else {
    return '10'.repeat((num - 1) / 2) + '1';
  }
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"