const READLINE = require("readline-sync");

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(num) {
  return num.trim() === '' || Number.isNaN(Number(num));
}

function performCalculation(num1, num2, operation) {
  switch (operation) {
    case "1":
      return num1 + num2;
    case "2":
      return num1 - num2;
    case "3":
      return num1 * num2;
    case "4":
      while (num2 === 0) {
        prompt("Cannot divide by zero. Enter a non-zero second number:");
        num2 = promptInput("Please enter the second number:");
      }
      return num1 / num2;
    default:
      prompt("Invalid operation selected.");
      return null;
  }
}

function promptInput(message) {
  prompt(message);
  let number = READLINE.prompt();
  while (invalidNumber(number)) {
    prompt("Invalid input. Enter a valid integer:");
    number = READLINE.prompt();
  }
  return parseInt(number, 10);
}

function chooseOperation() {
  prompt("What operation would you like to carry out on these numbers?\n1) Add 2) Subtract 3) Multiply 4) Divide");
  let operation = READLINE.prompt();
  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt("Can only choose 1, 2, 3, or 4:");
    operation = READLINE.prompt();
  }
  return operation;
}

function processAnotherCalculation() {
  prompt("Another calculation? Enter 'y' for yes or 'n' for no:");
  let userDecision = READLINE.prompt().toLowerCase();
  while (!['y', 'n'].includes(userDecision)) {
    prompt("Can only choose 'y' or 'n':");
    userDecision = READLINE.prompt().toLowerCase();
  }
  return userDecision === 'y';
}

function calculate() {
  prompt("Welcome to Calculator!");
  let num1 = promptInput("Please enter the first number:");
  let num2 = promptInput("Please enter the second number:");
  let operation = chooseOperation();
  let result = performCalculation(num1, num2, operation);
  prompt(`The result is: ${result}`);

  if (processAnotherCalculation()) {
    calculate();
  } else {
    prompt("Ciao, have a nice day!");
  }
}

calculate();