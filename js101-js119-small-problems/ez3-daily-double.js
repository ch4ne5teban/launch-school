/*Write a function that takes a string argument and returns a new string that contains the value of the original string with all consecutive duplicate characters collapsed into a single character.
*/

function crunch(string) {

  const hasConsecutiveRepeatChar = (string) => /([\w\s])\1/.test(string);

  if (!hasConsecutiveRepeatChar(string)) {
    return string
  }
  let editedString = '';
  let prevChar = null;
    for (let char of string) {
      if (char !== prevChar) {
        editedString += char;
        prevChar = char;
      }
    }
  return editedString;

  /*Another option:
  let editedString = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== string[i - 1]) {
      editedString += string[i];
    }
  }
  */
}

//Using the reduce method from Aman's solution below
function crunch(string) {
  return [...string].reduce((acc, char) => {
      if (acc.slice(-1) !== char) {
          acc += char;
      }
      return acc;
  }, '');
}

//Aman's solution
function crunch(string) {
  let result = string.split("").reduce((acc, char, idx) => {
    if (!(char === string[idx + 1])) acc += char;
    return acc;
  }, "");

  return result;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""

//The reduce method might not offer significant performance benefits compared to a simple loop and could even be slightly less efficient due to the overhead of function calls and the creation of an array from the string.