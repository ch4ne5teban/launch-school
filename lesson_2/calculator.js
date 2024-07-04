const READLINE = require("readline-sync");
const MESSAGES = require('./calculator_messages.json');

function promptWithArrow(message) {
  console.log(`=> ${message}`);
}

function isInputInvalid(num) {
  return num.trim() === '' || Number.isNaN(Number(num));
}

function requestNumberInput(message) {
  promptWithArrow(message);
  let number = READLINE.prompt();
  while (isInputInvalid(number)) {
    promptWithArrow(MESSAGES.invalid_input);
    number = READLINE.prompt();
  }
  return parseInt(number, 10);
}

function requestOperationChoice() {
  promptWithArrow(MESSAGES.choose_operation);
  let operation = READLINE.prompt();
  while (!['1', '2', '3', '4'].includes(operation)) {
    promptWithArrow(MESSAGES.operation_prompt);
    operation = READLINE.prompt();
  }
  return operation;
}

function calculateResult(num1, num2, operation) {
  switch (operation) {
    case "1":
      return num1 + num2;
    case "2":
      return num1 - num2;
    case "3":
      return num1 * num2;
    case "4":
      while (num2 === 0) {
        promptWithArrow(MESSAGES.divide_zero);
        num2 = requestNumberInput(MESSAGES.enter_second_number);
      }
      return num1 / num2;
    default:
      prompt(MESSAGES.invalid_operation);
      return null;
  }
}

function performSingleCalculationCycle() {
  let num1 = requestNumberInput(MESSAGES.enter_first_number);
  let num2 = requestNumberInput(MESSAGES.enter_second_number);
  let operation = requestOperationChoice();
  let result = calculateResult(num1, num2, operation);
  promptWithArrow(MESSAGES.result.replace('%result%', result));
}

function askUserIfAnotherCalculation() {
  promptWithArrow(MESSAGES.another_calculation);
  let userDecision = READLINE.prompt().toLowerCase();
  while (!['y', 'n'].includes(userDecision)) {
    promptWithArrow(MESSAGES.yes_no_prompt);
    userDecision = READLINE.prompt().toLowerCase();
  }
  return userDecision === 'y';
}

function runCalculator() {
  promptWithArrow(MESSAGES.welcome);
  do {
    performSingleCalculationCycle();
  } while (askUserIfAnotherCalculation());
  promptWithArrow(MESSAGES.goodbye);
}

runCalculator();