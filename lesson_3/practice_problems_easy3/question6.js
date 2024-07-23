//Examine the following code carefully. Can you identify all of the variables, primitive values, and objects that exist when this code executes?

let arr = [1, 2, 3];
let newArr = arr;

const num = arr[0];
let newNum = num;

function double(num) {
  return num * 2;
}

double(newNum);

// six variables: arr, newArr, num (as a global variable), newNum, double as function name, num (as function parameter), newNum (as function parameter), 
//nine primitive values: 1, 2, 3, 0 in arr[0], newNum = 1 num*2
//two objects: arr / newArr = [1, 2, 3], the function double 