const READLINE = require("readline-sync");

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(num) {
  return num.toString().trimStart() === '' || Number.isNaN(Number(num));
}

prompt("Welcome to Calculator!");

prompt("Please enter the first number:");
let num1 = parseInt(READLINE.prompt(), 10);

while (invalidNumber(num1)) {
  prompt("Invalid input. Enter a valid integer");
  num1 = parseInt(READLINE.prompt(), 10);
}

prompt("Please enter the second number:");
let num2 = parseInt(READLINE.prompt(), 10);

while (invalidNumber(num2)) {
  prompt("Invalid input. Enter a valid integer");
  num2 = parseInt(READLINE.prompt(), 10);
}

prompt("What operation would you like to carry out on these numbers?\n1) Add 2) Subtract 3) Multiply 4) Divide");
let operation = READLINE.prompt();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt("Can only choose 1, 2, 3, or 4");
  operation = READLINE.prompt();
}

let output;

switch (operation) {
  case "1":
    output = num1 + num2;
    break;
  case "2":
    output = num1 - num2;
    break;
  case "3":
    output = num1 * num2;
    break;
  case "4":
    output = num1 / num2;
    break;
}
prompt(`The result is: ${output}`);