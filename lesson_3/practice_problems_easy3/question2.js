//What will the following code output?

console.log([1, 2, 3] + [4, 5]);

//1,2,34,5
//To concat arrays, use .concat() instead. + operator works with strings. In this case, it coerces arrays to strings and then concats 3 and 4 as `34`.
console.log([1, 2, 3].concat([4, 5]));

//LS:
//In some languages you can use + to concatenate two arrays, but not in JavaScript. In JavaScript, the + operator first converts the arrays to strings, and then concatenates the strings, so the output is the string 1,2,34,5.