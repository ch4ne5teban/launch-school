//Write a function that takes a string, doubles every character in the string, and returns the result as a new string.

//Using split(), map(), and join()
function repeater(string) {
  return string.split('').map(char => char.repeat(2)).join('');
}

//Using an empty array and for loop
function repeater(string) {
  let repeaterArr = [];

  for (let i = 0; i < string.length; i++) {
    repeaterArr.push(string[i] + string[i]);
  }

  return repeaterArr.join('');
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""