// Will the code below raise an error?

let numbers = [1, 2, 3];
numbers[6] = 5;

//No, it won't. The code modifies the array assigned to the variable `numbers` by assigning number 5 to the array index [6]. Indices [4] and [5], i.e. slots 3 through 5, will be empty but if returned, will output `undefined` instead.

//Bonus
let numbers = [1, 2, 3];
numbers[6] = 5;
numbers[4];  // what will this line return?

//`undefined` even though the slot is empty.

