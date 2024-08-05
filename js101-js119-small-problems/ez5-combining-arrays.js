/*
Write a function that takes two arrays as arguments and returns an array containing the union of the values from the two. There should be no duplication of values in the returned array, even if there are duplicates in the original arrays. You may assume that both arguments will always be arrays.
*/
function union(array1, array2) {
  let returnedArray = Array.from(array1);
  
  for (let i = 0; i < array2.length; i++) {
    if (! array1.includes(array2[i])) {
      returnedArray.push(array2[i]);
    }
  }
  
  return returnedArray;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]