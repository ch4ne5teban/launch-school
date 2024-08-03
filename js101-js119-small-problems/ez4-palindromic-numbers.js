//Write a function that returns true if its integer argument is palindromic, or false otherwise. A palindromic number reads the same forwards and backwards.

function isPalindromicNumber(number) {
    let numString = number.toString();
    let reversedNumString = numString.split('').reverse().join('');
    
    return numString === reversedNumString;
}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true