const READLINE = require("readline-sync");
const MESSAGES = require("./messages.json");

let currentLang = getUserLanguage();
let currentCurrency = setUserCurrency(currentLang);

function distinctivePrompt(message) {
  console.log(`=> ${message}`);
}

function getUserLanguage() {
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

function setUserCurrency(language) {
  const currencyMap = { en: 'USD', es: 'EUR', hi: 'INR' };
  return currencyMap[language];
}

function setCurrencyFormat(amount, currency, language) {
  return new Intl.NumberFormat(language, { style: 'currency', currency: currency }).format(amount);
}

function getValidInput(message, type) {
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
  let cleanedInput = input.trim();
  if (type === 'float') {
    return isValidFloat(cleanedInput);
  } else if (type === 'int') {
    return isValidInteger(cleanedInput);
  }
  return false;
}

function isValidFloat(input) {
  let inputWithoutPercent = input.endsWith('%') ? input.slice(0, -1) : input;
  if (!/^\d*\.?\d+$/.test(inputWithoutPercent)) {
    return false;
  }
  let floatValue = parseFloat(inputWithoutPercent);
  let isParsedCorrectly = parseFloat(floatValue.toString()) === floatValue;
  return !isNaN(floatValue) && floatValue >= 0 && isParsedCorrectly;
}

function isValidInteger(input) {
  if (!/^\d+$/.test(input)) {
    return false;
  }
  let intValue = parseInt(input, 10);
  let isInputMatch = intValue.toString() === input;
  return !isNaN(intValue) && intValue > 0 && isInputMatch;
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

function userWantsAnotherCalc() {
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

function runEMICalculator() {
  do {
    console.clear();
    const principal = getValidInput(MESSAGES[currentLang]['principal_prompt'], 'float');
    const annualInterestRate = getValidInput(MESSAGES[currentLang]['interest_prompt'], 'float');
    const termInYears = getValidInput(MESSAGES[currentLang]['term_prompt'], 'int');
    const monthlyInterestRate = calcMonthlyInterestRate(annualInterestRate);
    const termInMonths = calcTermInMonths(termInYears);
    const monthlyPayment = calcMonthlyRepaymentAmount(principal,
      monthlyInterestRate, termInMonths);
    const formattedPayment = setCurrencyFormat(monthlyPayment,
      currentCurrency, currentLang);
    console.clear();
    distinctivePrompt(`${MESSAGES[currentLang]['result']} ${formattedPayment}`);
  } while (userWantsAnotherCalc());
  console.clear();
  distinctivePrompt(MESSAGES[currentLang]['goodbye']);
}

runEMICalculator();


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