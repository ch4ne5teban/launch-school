// Build a program that randomly generates Teddy's age, and logs it to the console. Have the age be a random number between 20 and 120 (inclusive).
// Also, how can we make the function more robust? What if the user inadvertently gave the inputs in reverse order (i.e., the value passed to min was greater than max)?

function teddyAge() {
  const age = calcRandomAge(20, 120);
  printTeddyAge(age);
}

function calcRandomAge(min, max) {
  if (min > max) {
    [min, max] = [max, min];
  }

  const randomAge = Math.floor(Math.random() * (max - min + 1) + min);
  return randomAge;
}

function printTeddyAge(age) {
  console.log(`Teddy is ${age} years old!`);
}

teddyAge();
