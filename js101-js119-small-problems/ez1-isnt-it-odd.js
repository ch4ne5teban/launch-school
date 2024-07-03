function isOdd(int) { 
  return (int % 2 !== 0);
}

// alternative
function isOdd(int) { 
  return Boolean(int % 2);
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true