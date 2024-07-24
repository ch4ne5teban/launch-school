/*
The || operator returns a truthy value if either or both of its operands are truthy, a falsey value if both operands are falsey. The && operator returns a truthy value if both of its operands are truthy, and a falsey value if either operand is falsey. This works great until you need only one, but not both, of two conditions to be truthy: the so-called exclusive or.

In this exercise, you will write a function named xor that takes two arguments, and returns true if exactly one of its arguments is truthy, false otherwise. Note that we are looking for a boolean result instead of a truthy/falsy value as returned by || and &&.
*/

function xor(value1, value2) {
  return Boolean(value1) !== Boolean(value2);
}

console.log(xor(5, 0) === true);          // true
console.log(xor(false, true) === true);   // true
console.log(xor(1, 1) === false);         // true
console.log(xor(true, true) === false);   // true
console.log(xor(0, false) === false);     // true
console.log(xor(0, 0) === false);         // true

/*
Bob Rodes' note:
You can use the bitwise XOR this way:

function xor(a, b) {
  return !!(!!a ^ !!b);
}

There's a lot of conversion going on here, some explicit and some implicit. !!a and !!b convert the inputs to boolean. Then ^ implicitly converts both boolean conversions to numbers: 0 if false and 1 if true. This makes the bitwise XOR return 1 if 01 or 10, or 0 if 11 or 00. Then the outer !! converts that number to true or false.

If we don't convert the inputs to boolean, then if they are integers ^ does a bitwise XOR comparison of those integers. This can lead to undesired results here. For example, if the inputs are 5 and 3, the result we need to return is false. But 5 ^ 3 compares the two binary values 101 and 011, taking the XOR of each bit one by one. The result is 110, which is 6 in base 10. And then, !!6 converts to boolean true.

If we first convert 5 and 3 to boolean, we get true and true. true ^ true gets converted to 1 ^ 1 by the ^ operator, which then returns 0. Then !!0 returns false.

Further Exploration
Another example of XOR logic in real life: magnetic poles. Given two magnets, where positive is 1 and negative is 0, then pole XOR pole determines whether the poles attract (10 or 01)) or repel (00 or 11).

Short-circuit evaluators in XOR operations do not make sense. With OR operations, if the first value is true, then the result is true no matter the value of the comparison value. With AND operations, if the first value is false, the result is false no matter the value of the comparison value. With an XOR operation, by definition the second value must be the opposite of the first value. So both bits must always be evaluated. So no, XOR operations do not perform short-circuit evaluations. They can't.
*/