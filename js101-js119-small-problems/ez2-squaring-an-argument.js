//Using the multiply() function from the "Multiplying Two Numbers" problem, write a function that computes the square of its argument (the square is the result of multiplying a number by itself).

const isValidNumber = (value) => {
  return value !== '' && !isNaN(Number(value));
}

const multiply = (num1, num2) => num1 * num2

const square = (num) => {
  if (!isValidNumber(num)) {
    return 'Please enter a valid number';
  } else {
    return multiply(num, num);
  } 
}

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true

//Further Exploration
//What if we wanted generalize this function to a "power to the n" type function: cubed, to the 4th power, to the 5th, etc. How would we go about doing so while still using the multiply() function?

const multiply = (num1, num2) => num1 * num2;

const exponentiation = (num, exp) => {
  if (exp <= 0) return 1;
  if (exp === 1) return num;
  return multiply(num, exponentiation(num, exp - 1));
};

//William Baker's
let multiply = (num1, num2) => num1 * num2;

let power = function(num, exp) {
  return Array(exp).fill(num).reduce(multiply);
};