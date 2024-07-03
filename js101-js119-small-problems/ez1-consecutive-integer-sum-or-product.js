
const SUM = (userInt) => {
  let sum = 0;
  for (let int = 1; int <= userInt; int += 1) {
    sum += int;
  }
  return sum;
};

const PRODUCT = (userInt) => {
  let product = 1;
  for (let int = 1; int <= userInt; int += 1) {
    product *= int;
  }
  return product;
};

const READLINE = require("readline-sync");

let getValidInteger = () => {
  while (true) {
    console.log("Please enter an integer greater than 0:");
    let input = READLINE.prompt();
    let userInt = parseInt(input, 10);
    if (!isNaN(userInt) && userInt > 0) {
      return userInt;
    }
    console.log("Invalid input.");
  }
};

let getValidOperation = () => {
  while (true) {
    console.log("Enter 's' to compute the sum, 'p' to compute the product:");
    let operation = READLINE.prompt().toLowerCase();
    if (operation === 's' || operation === 'p') {
      return operation;
    } else {
    console.log("Invalid selection.");
    }
  }
};

try {
  let userInt = getValidInteger();
  let operation = getValidOperation();

  switch (operation) {
    case 's':
      console.log(`The sum of the integers between 1 and ${userInt} is ${SUM(userInt)}.`);
      break;
    case 'p':
      console.log(`The product of the integers between 1 and ${userInt} is ${PRODUCT(userInt)}.`);
      break;
  }
} catch (error) {
  console.error("An unexpected error occurred:", error.message);
}