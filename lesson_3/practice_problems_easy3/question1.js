//Write three different ways to remove all of the elements from the following array:

let numbers = [1, 2, 3, 4];

numbers.splice(0, numbers.length);
console.log(numbers);

//Used forEach at first :OOO
//numbers.forEach(num => numbers.pop());
//The forEach method is intended for operations where you don't modify the array being iterated over, because forEach operates on a snapshot of the array indices at the time it was called.Instead, use loops that are meant to handle array modifications, such as while or for loops.
while (numbers.length > 0) {
  numbers.pop();
}
console.log(numbers);

while (numbers.length > 0) {
  numbers.shift();
}
console.log(numbers);

//OR
numbers.length = 0;
console.log(numbers);
numbers = [];
console.log(numbers);
