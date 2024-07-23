//What will the following code output?

let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1);

//"hello there"
//Since the code logs str1 on line 6, "hello there", which is assigned to str1 in line 1, is logged. "hello there", as a string, is a primitive value so it appears as pass by value. On line 2, str1 is assigned to str2 but that points to a new memory space. On line 5, it is reassigned to "goodbye!" but that has no effect on the string value assigned to str1 on line 1 as strings (and other primitives) are immutable.

//LS:
//The output is hello there since we are dealing with strings. In JavaScript, strings are primitive values and are immutable; they can't be changed. That also means that JavaScript creates a new copy of the string when assigning a string to a variable. Thus, line 2 assigns str2 a new string that happens to be a copy of str1's value. Line 3, in turn, assigns str2 to an entirely new string.