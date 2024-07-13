//What will the following code output?

console.log(false == '0');
console.log(false === '0');

//true - here due to the weak equality operator, false undergoes implicit coercion to the number 0 and so does the string '0'. So the statement evaluates to true.
//false - here since a strict equality operator is used, it looks for the same type and value of expressions on either side. So the Boolean `false` and the string `0` are treated as unequal and it returns false.