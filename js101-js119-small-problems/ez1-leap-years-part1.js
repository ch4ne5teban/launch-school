const READLINE = require('readline-sync');

function getValidYear() {
  let userYear;
  do {
    userYear = parseInt(READLINE.question("Please enter a year greater than 0: "), 10);
    if (!isNaN(userYear) && userYear > 0) return userYear;
    console.log("Invalid input.");
  } while (true);
}

function isLeapYear(year) {
  return ((year % 4 === 0) && !(year % 100 === 0)) || year % 400 === 0;
}

function main() {
  let validUserYear = getValidYear();
  console.log(`${validUserYear} is ${isLeapYear(validUserYear) ? "" : "not "}a leap year`);
}

main();