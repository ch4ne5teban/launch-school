const READLINE = require("readline-sync");
const MESSAGES = require('./calculator_messages.json');

let currentLang;

function selectLanguage() {
  console.log("Select a language:\n Enter '1' for English, '2' for Spanish, or '3' for Hindi");
  let choice = READLINE.prompt();
  switch (choice) {
    case '1':
      return 'en';
    case '2':
      return 'es';
    case '3':
      return 'hi';
    default:
      return 'en';
  }
}

const YES_NO_MAPPING = {
  en: { yes: 'y', no: 'n' },
  es: { yes: 's', no: 'n' },
  hi: { yes: 'h', no: 'n' },
};

function makePromptDistinctive(message) {
  console.log(`=> ${message}`);
}

function clearConsole() {
  console.clear();
}

function isInputInvalid(num) {
  return num.trim() === '' || Number.isNaN(Number(num));
}

function getNumberInput(message) {
  makePromptDistinctive(message);
  let number = READLINE.prompt();
  while (isInputInvalid(number)) {
    clearConsole();
    makePromptDistinctive(MESSAGES[currentLang].invalid_input);
    number = READLINE.prompt();
  }
  return parseInt(number, 10);
}

function getOperationChoice() {
  clearConsole();
  makePromptDistinctive(MESSAGES[currentLang].choose_operation);
  let operation = READLINE.prompt();
  while (!['1', '2', '3', '4'].includes(operation)) {
    makePromptDistinctive(MESSAGES[currentLang].operation_reminder_prompt);
    operation = READLINE.prompt();
  }
  return operation;
}

function operationSymbol(operation) {
  if (operation === "1") {
    return "+";
  } else if (operation === "2") {
    return "-";
  } else if (operation === "3") {
    return "*";
  } else return "/";
}

function calculateResult(num1, num2, operation) {
  let symbol = operationSymbol(operation);
  switch (operation) {
    case "1":
      return [num1 + num2, symbol];
    case "2":
      return [num1 - num2, symbol];
    case "3":
      return [num1 * num2, symbol];
    case "4":
      return [num1 / num2, symbol];
    default:
      prompt(MESSAGES[currentLang].operation_reminder_prompt);
      return null;
  }
}

function performSingleCalculationCycle() {
  console.clear();
  let num1 = getNumberInput(MESSAGES[currentLang].enter_first_number);
  let num2 = getNumberInput(MESSAGES[currentLang].enter_second_number);
  let operation = getOperationChoice();
  if (operation === '4' && num2 === 0) {
    while (num2 === 0) {
      makePromptDistinctive(MESSAGES[currentLang].divide_zero);
      num2 = getNumberInput(MESSAGES[currentLang].enter_second_number);
    }
  }
  let [result, symbol] = calculateResult(num1, num2, operation);
  clearConsole();
  makePromptDistinctive(`${num1} ${symbol} ${num2} = ${result}`);
}

function askUserIfAnotherCalculation() {
  makePromptDistinctive(MESSAGES[currentLang].another_calculation);
  let userDecision = READLINE.prompt().toLowerCase();
  while (userDecision !== YES_NO_MAPPING[currentLang].yes &&
    userDecision !== YES_NO_MAPPING[currentLang].no) {
    clearConsole();
    makePromptDistinctive(MESSAGES[currentLang].yes_no_prompt);
    userDecision = READLINE.prompt().toLowerCase();
  }
  return userDecision === YES_NO_MAPPING[currentLang].yes;
}

function runCalculator() {
  currentLang = selectLanguage();
  makePromptDistinctive(MESSAGES[currentLang].welcome);
  do {
    performSingleCalculationCycle();
  } while (askUserIfAnotherCalculation());
  clearConsole();
  makePromptDistinctive(MESSAGES[currentLang].goodbye);
}

runCalculator();