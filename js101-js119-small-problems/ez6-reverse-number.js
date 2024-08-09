/*
Write a function that takes a positive integer as an argument and returns that number with its digits reversed.
*/

//Using math
function reverseNumber(int) {
  let reversedInt = [];
  do {
    let lastDigit = int % 10;
    reversedInt.push(lastDigit);
    int = Math.floor(int / 10);
  } while (int > 0)
  
  return Number(reversedInt.join(''));
}

//Using string manipulation
function reverseNumber(int) {
  return parseInt(String(int).split('').reverse().join(''));
}

console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that leading zeros in the result get dropped!
console.log(reverseNumber(1));        // 1