//Write a function that returns the next to last word in the String passed to it as an argument.

//Words are any sequence of non-blank characters.

//You may assume that the input String will always contain at least two words.

function penultimate(string) {
  let wordsArr = string.trim().split(/\s+/); // This splits the string by one or more spaces
  return wordsArr[wordsArr.length - 2];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true
console.log(penultimate("Hello    world!") === "Hello"); // logs true