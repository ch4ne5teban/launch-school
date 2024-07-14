//Write a one-line expression to count the number of lower-case t characters in each of the following strings:

let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

console.log(statement1.split('').reduce((acc, char) => acc + (char === 't' ? 1 : 0), 0));
console.log(statement2.split('').reduce((acc, char) => acc + (char === 't' ? 1 : 0), 0));

//LS:
statement1.split('').filter(char => char === 't').length;
statement2.split('').filter(char => char === 't').length;