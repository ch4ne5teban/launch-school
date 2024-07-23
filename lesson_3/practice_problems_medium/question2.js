//Starting with the string:

let munstersDescription = "The Munsters are creepy and spooky.";

//Return a new string that swaps the case of all of the letters:

//`tHE mUNSTERS ARE CREEPY AND SPOOKY.`;

function swapCase (str) {
  let newStr = '';
  for (let char = 0; char < str.length; char++) {
    if (str.charCodeAt(char) >= 65 && str.charCodeAt(char) <= 90) {
      newStr += str[char].toLowerCase();
    } else {
      newStr += str[char].toUpperCase();
    }
  }
  return newStr;
}

console.log(swapCase(munstersDescription));

//LS:
console.log(
  munstersDescription
    .split("")
    .map(function (char) {
      if (char === char.toUpperCase()) {
        return char.toLowerCase();
      } else {
        return char.toUpperCase();
      }
    })
    .join("")
);