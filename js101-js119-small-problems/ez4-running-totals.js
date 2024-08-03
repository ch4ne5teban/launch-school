//Write a function that takes an array of numbers and returns an array with the same number of elements, but with each element's value being the running total from the original array.

// function runningTotal(array) {

//   let runningTotalArray = [];
//   if (array.length === 0) {
//     return runningTotalArray;
//   }
//   let total = 0;

//   for (let i = 0; i < array.length; i++) {
//     total += array[i];
//     runningTotalArray.push(total);
//   }

//   return runningTotalArray;
// } 


function runningTotal(array) {
  let runningTotalArray = [];
  let total = 0;

  array.forEach((int) => {
    total += int;
    runningTotalArray.push(total);
  });

  return runningTotalArray;
}

const p = console.log;
p(runningTotal([2, 5, 13]));             // [2, 7, 20]
p(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
p(runningTotal([3]));                    // [3]
p(runningTotal([]));                     // []