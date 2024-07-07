const READLINE = require("readline-sync");
const MESSAGES = require("./messages.json");

function distinctivePrompt(message) {
  console.log(`=> ${message}`);
}

function selectLanguage() {
  console.clear();
  distinctivePrompt(MESSAGES['welcome']);
  const languages = ['en', 'es', 'hi'];
  let langChoice = parseInt(READLINE.prompt(), 10) - 1;
  while ((isNaN(langChoice)) || (langChoice < 0)
    || (langChoice >= languages.length)) {
    console.clear();
    distinctivePrompt(MESSAGES['invalid_language_choice']);
    langChoice = parseInt(READLINE.prompt(), 10) - 1;
  }
  return languages[langChoice];
}

function getValidInput(message, type, currentLang) {
  distinctivePrompt(message);
  let input = READLINE.prompt();
  while (!isValidInput(input, type)) {
    console.clear();
    distinctivePrompt(MESSAGES[currentLang]['invalid_input']);
    input = READLINE.prompt();
  }
  return type === 'float' ? parseFloat(input) : parseInt(input, 10);
}

function isValidInput(input, type) {
  input = input.replace('%', '').trim();
  return type === 'float' ? !isNaN(parseFloat(input))
    : !isNaN(parseInt(input, 10)) && parseInt(input, 10) > 0;
}

function calcMonthlyInterestRate(interestRate) {
  let monthlyInterestRate = interestRate / 1200;
  return monthlyInterestRate;
}

function calcTermInMonths(termInYears) {
  let termInMonths = termInYears * 12;
  return termInMonths;
}

function calcMonthlyRepaymentAmount(principal,
  monthlyInterestRate, termInMonths) {
  let monthlyRepaymentAmount;
  if (monthlyInterestRate === 0) { // no-interest scenario
    monthlyRepaymentAmount = principal / termInMonths;
    return monthlyRepaymentAmount;
  } else {
    monthlyRepaymentAmount = principal * (monthlyInterestRate
      / (1 - Math.pow((1 + monthlyInterestRate), (-termInMonths))));
    return monthlyRepaymentAmount;
  }
}

function askUserIfAnotherCalculation(currentLang) {
  const YES_NO_MAPPING = {
    en: { yes: ['y', 'yes'], no: ['n', 'no'] },
    es: { yes: ['s', 'si'], no: ['n', 'no'] },
    hi: { yes: ['h', 'haan'], no: ['n', 'nahi'] },
  };

  distinctivePrompt(MESSAGES[currentLang]['another_calculation']);
  let userDecision = READLINE.prompt().toLowerCase();
  const validYes = YES_NO_MAPPING[currentLang]['yes'];
  const validNo = YES_NO_MAPPING[currentLang]['no'];
  while (!validYes.includes(userDecision) && !validNo.includes(userDecision)) {
    console.clear();
    distinctivePrompt(MESSAGES[currentLang]['yes_no_prompt']);
    userDecision = READLINE.prompt().toLowerCase();
  }
  return validYes.includes(userDecision);
}

function runLoanCalculator(currentLang) {
  do {
    console.clear();
    const principal = getValidInput(MESSAGES[currentLang]['principal_prompt'], 'float');
    const annualInterestRate = getValidInput(MESSAGES[currentLang]['interest_prompt'], 'float');
    const termInYears = getValidInput(MESSAGES[currentLang]['term_prompt'], 'int');
    const monthlyInterestRate = calcMonthlyInterestRate(annualInterestRate);
    const termInMonths = calcTermInMonths(termInYears);
    const monthlyPayment = calcMonthlyRepaymentAmount(principal,
      monthlyInterestRate, termInMonths);
    console.clear();
    distinctivePrompt(`${MESSAGES[currentLang]['result']} $${monthlyPayment.toFixed(2)}`);
  } while (askUserIfAnotherCalculation());
  console.clear();
  distinctivePrompt(MESSAGES[currentLang]['goodbye']);
}

let currentLang = selectLanguage();
runLoanCalculator(currentLang);


/* before refactoring:
let currentLang;

function selectLanguage() {
  console.log("Select a language:\n
  Enter '1' for English, '2' for Spanish, or '3' for Hindi");
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
  en: { yes: ['y', 'yes'], no: ['n', 'no'] },
  es: { yes: ['s', 'si'], no: ['n', 'no'] },
  hi: { yes: ['h', 'haan'], no: ['n', 'nahi'] },
};

function distinctivePrompt(message) {
  console.log(=> ${message});
}

function clearConsole() {
  console.clear();
}

function isInputInvalid(num) {
  return num.trim() === '' || Number.isNaN(Number(num));
}

function getPrincipalAmount(message) {
  clearConsole();
  distinctivePrompt(message);
  let principal = READLINE.prompt();
  while (isInputInvalid(principal)) {
    clearConsole();
    distinctivePrompt(MESSAGES[currentLang]['invalid_input']);
    principal = READLINE.prompt();
  }
  return parseFloat(principal);
}

function getInterestRate(message) {
  distinctivePrompt(message);
  let interestRate = READLINE.prompt();
  interestRate = interestRate.replace('%', '').trim();
  while (isInputInvalid(interestRate)) {
    clearConsole();
    distinctivePrompt(MESSAGES[currentLang]['invalid_input']);
    interestRate = READLINE.prompt();
    interestRate = interestRate.replace('%', '').trim();
  }
  return parseFloat(interestRate);
}

function getLoanTermInYears(message) {
  distinctivePrompt(message);
  let termInYears = READLINE.prompt();
  while (isInputInvalid(termInYears)) {
    clearConsole();
    distinctivePrompt(MESSAGES[currentLang]['invalid_input']);
    termInYears = READLINE.prompt();
  }
  return parseInt(termInYears, 10);
}

...

function askUserIfAnotherCalculation() {
  distinctivePrompt(MESSAGES[currentLang].another_calculation);
  let userDecision = READLINE.prompt().toLowerCase();
  while (!userDecision.includes(YES_NO_MAPPING[currentLang].yes) &&
  !userDecision.includes(YES_NO_MAPPING[currentLang].no)) {
    clearConsole();
    distinctivePrompt(MESSAGES[currentLang].yes_no_prompt);
    userDecision = READLINE.prompt().toLowerCase();
  }
  return userDecision.includes(YES_NO_MAPPING[currentLang].yes);
}

function runLoanCalculator() {
  do {
    clearConsole();
    /*
    const principal = getPrincipalAmount
    (MESSAGES[currentLang]['principal_prompt']);
    const annualInterestRate = getInterestRate
    (MESSAGES[currentLang]['interest_prompt']);
    const termInYears = getLoanTermInYears
    (MESSAGES[currentLang]['term_prompt']);
    const monthlyInterestRate = calcMonthlyInterestRate(annualInterestRate);
    const termInMonths = calcTermInMonths(termInYears);
    const monthlyPayment = calcMonthlyRepaymentAmount(principal,
      monthlyInterestRate, termInMonths);
    clearConsole();
    distinctivePrompt(`${MESSAGES[currentLang]['result']}
    $${monthlyPayment.toFixed(2)}`);
  } while (askUserIfAnotherCalculation());
  clearConsole();
  distinctivePrompt(MESSAGES[currentLang]['goodbye']);
}

runLoanCalculator();
*/