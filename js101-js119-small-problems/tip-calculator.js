//Obvious one
const READLINE = require("readline-sync");

let billAmount = parseFloat(READLINE.question("Enter the bill amount: ₹ "));
let tipPercentage = parseFloat(READLINE.question("Enter the tip percentage: ₹ "));

const TIP_AMOUNT = (tipPercentage / 100) * billAmount;
const TOTAL_BILL = billAmount + TIP_AMOUNT;

console.log(`The tip is: ₹ ${TIP_AMOUNT.toFixed(2)}`) 
console.log(`The total is: ₹ ${TOTAL_BILL.toFixed(2)}`);

// Without parseFloat, if we entered values 200 and 15 for bill and percentage the tip would be calculated correctly as 30. The reason for this is that /, * and - operators implicitly coerce string operand to a number. Thus, if you added console.log(typeof tip === 'number') below the tip variable initialization, the output would be true. The value assigned to tip would be a number.However, if we want to apply the same logic to let total = bill + tip; line, we would encounter a problem. Since bill is a string and since + performs concatenation when either operand is a string, the value assigned to total variable would be the string "20030". Finally, since total is a string it doesn't have a toFixed method and the final line of our program would raise an error.

//Using array destructuring and map method
const READLINE = require("readline-sync");

let [billAmount, tipPercentage] = ['bill amount', 'tip percentage'].map(userInput => 
parseFloat(READLINE.question(`What's the ${userInput}?\n ₹ `)));

const TIP_AMOUNT = (tipPercentage / 100) * billAmount;
const TOTAL_BILL = billAmount + TIP_AMOUNT;

console.log(`The tip is: ₹ ${TIP_AMOUNT.toFixed(2)}`);
console.log(`The total is: ₹ ${TOTAL_BILL.toFixed(2)}`);

/* Output:
What's the bill amount?
 ₹ 4500
What's the tip percentage?
 ₹ 20
The tip is: ₹ 900.00
The total is: ₹ 5400.00
*/