//Log all even numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

[...Array(99).keys()].splice(1).filter(int => int % 2 === 0).forEach(num => console.log(num));
//Inspiration: Brian Fontillas' solution to the Odd Numbers problem

//OR
Array(49).fill(0).map((_, i) => 2 * (i + 1)).forEach(num => console.log(num));
// //`fill` initializes all elements in the array to a static value of `0`
