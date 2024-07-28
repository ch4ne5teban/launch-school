// Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

Array.from({length: 50}, (_, i) => (2 * i) + 1).forEach(num => console.log(num));