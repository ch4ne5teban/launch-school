//Write a function that counts the number of occurrences of each element in a given array. Once counted, log each element alongside the number of occurrences. Consider the words case sensitive e.g. ("suv" !== "SUV").

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'suv', 'motorcycle', 'car', 'truck'];

function countOccurrences(array) {
  let counter = {};

  array.forEach((elem) => {
    if (counter[elem]) {
      counter[elem] += 1;
    } else {
      counter[elem] = 1;
    }
  });

  for (let elem in counter) {
    console.log(`${elem} => ${counter[elem]}`);
  }
}

countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
// suv => 1

