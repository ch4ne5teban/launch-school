//What will the following code output?

let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);

//[{ first: 42 }, { second: "value2" }, 3, 4, 5]
//In JS, array is not a primitive value so it appears as passed by reference. This means on line 2, it's arr1 whose shallow copy is passed by reference. The objects within the arrays point to the same memory location. On line 3 when the value of the object property at the first index of the arr2 is mutated, it's the initial array assigned to arr1 that is mutated. So line 6 logs [{ first: 42 }, { second: "value2" }, 3, 4, 5]