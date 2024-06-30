console.log("Welcome to Calculator!");
const READLINE = require("readline-sync");

console.log("Please enter the first number:");
let num1 = parseInt(READLINE.prompt());

console.log("Please enter the second number:");
let num2 = parseInt(READLINE.prompt());

console.log("What operation would you like to carry out on these numbers?\n1) Add 2) Subtract 3) Multiply 4) Divide");
let operation = READLINE.prompt();

let output;
if (operation === "1") {
  output = num1 + num2;
} else if (operation === "2") {
    output = num1 - num2;
} else if (operation === "3") {
    output = num1 * num2;
} else if (operation === "4") {
    output = num1 / num2;
}
console.log(`The result is: ${output}`);