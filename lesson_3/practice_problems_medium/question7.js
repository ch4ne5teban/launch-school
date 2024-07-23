//What is the output of the following code?

let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer);

console.log(answer - 8);

//This code logs the number `34`. 
//The global variable `answer` is passed as an argument to the function `messWithIt()`, where it is incremented by `8` to `50`, but this modification does not affect the original `answer` variable because numbers in JavaScript are passed by value. The result of this function is stored in `newAnswer`, but it is not used thereafter. Thus, when `answer - 8` is logged, it calculates `42 - 8`, which is `34`. 