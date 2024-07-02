// Using array methods

function multisum(int) {
  let multiplesArray = [... new Array(int + 1).keys()].filter(int => int > 0 && (int % 3 === 0 || int % 5 === 0));
  
  let sum = 0;
  multiplesArray.forEach(multiple => sum += multiple);
  return sum;
}

// Could've used the reduce method to calculate the sum. The .reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value. It is particularly useful for operations like summing up all elements where each element contributes to a cumulative result.
// <return multiplesArray.reduce((sum, multiple) => sum + multiple, 0);/>
// *removing the keyword "new" won't make any difference.

// Using the arithmetic series formula:
function sumOfMultiples(k = 1, max) {
  const n = Math.floor(max / k);
  return k * n * (n + 1) / 2;
}

function multisum(max) {
  return (sumOfMultiples(3, max) + sumOfMultiples(5, max) - sumOfMultiples(15, max));
}

// Better than iterating through each number up to `max`. Using a mathematical formula leads to a constant time complexity of big O(1).
// - sumOfMultiples(15, max) => multiples of 15 are counted twice (once in multiples of 3 and once in multiples of 5). Subtracting them once corrects this overlap.