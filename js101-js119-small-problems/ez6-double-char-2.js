//Write a function that takes a string, doubles every consonant character in the string, and returns the result as a new string. The function should not double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.

//Using for loop, regex, and push()
function doubleConsonants(string) {
  let newString = [];
  
  for (let i = 0; i < string.length; i++) {
    if (string[i].match(/[^aeiouAEIOU\d\p{P}\s]/)) {
      newString.push(string[i], string[i]);
    } else {
      newString.push(string[i]);
    }
  }

  return newString.join('');
}

//Using split(), map(), regex, and join()
function doubleConsonants(string) {
  let newString = string.split('').map(char => {
    if (char.match(/[^aeiouAEIOU\d\p{P}\s]/)) {
      return char.repeat(2);
    } else {
      return char;
    }
  });  
  return newString.join('');
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""