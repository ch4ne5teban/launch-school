//Write a function that takes a number as an argument. If the argument is a positive number, return the negative of that number. If the argument is a negative number, return it as-is.

function negative(number) {
  return number < 0 ? number : number * -1;
  //return number < 0 ? number : -number;
}

//LS:
function negative(number) {
  return Math.abs(number) * -1;
}

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0

/*
Further exploration:
0 is represented as 00000000 (first 0 is for + sign) 
-0 is represented as 10000000 (1 is for - sign) 

Their internal representation is different but their value is still the same.
=> console.log(0 === -0);

How to differentiate between 0 and -0 in a program.
=> console.log(Object.is(0, -0));
*/