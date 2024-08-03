/*
Write a program that solicits six numbers from the user and logs a message that describes whether the sixth number appears among the first five numbers.

Example:
Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 17

The number 17 appears in 25,15,20,17,23.

-----

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 18

The number 18 does not appear in 25,15,20,17,23.
*/

const READLINE = require("readline-sync");
let numberSet = [];

for (let i = 1; i <= 5; i++) {
  let suffix = "th";
  switch (i) {
      case 1: suffix = "st"; break;
      case 2: suffix = "nd"; break;
      case 3: suffix = "rd"; break;
  }
  let num = parseInt(READLINE.question(`Enter the ${i}${suffix} number: `));
  numberSet.push(num);
}

let lastNumber = parseInt(READLINE.question("Enter the last number: "));

if (numberSet.includes(lastNumber)) {
  console.log(`The number ${lastNumber} appears in ${numberSet.join(',')}.`);
} else {
  console.log(`The number ${lastNumber} does not appear in ${numberSet.join(',')}.`);
}