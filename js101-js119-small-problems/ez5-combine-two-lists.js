/*
Write a function that combines two arrays passed as arguments, and returns a new array that contains all elements from both array arguments, with each element taken in alternation.

You may assume that both input arrays are non-empty, and that they have the same number of elements.

*/
//Using loop and push
function interleave(arr1, arr2) {
  let newArray = [];
  for (let i = 0; i < arr1.length; i++) {
    newArray.push(arr1[i], arr2[i]);
  }
  return newArray;
}

//Using loop and index reassignment / manipulation
function interleave(arr1, arr2) {
  let newArray = new Array(arr1.length + arr2.length);
  let arr1Index = 0;
  let arr2Index = 0;

  for (let i = 0; i < newArray.length; i += 2) {
    newArray[i] = arr1[arr1Index];
    arr1Index++;
  }

  for (let i = 1; i < newArray.length; i += 2) {
    newArray[i] = arr2[arr2Index];
    arr2Index++;
  }

  return newArray;
}

//Using map and flat
function interleave(arr1, arr2) {
  return arr1.map((elem, index) => [elem, arr2[index]]).flat();
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]