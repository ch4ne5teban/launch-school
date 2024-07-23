//What will the following two lines of code output?

console.log(0.3 + 0.6); //0.8999999999999999 (not 0.9)

console.log(0.3 + 0.6 === 0.9); //false (not true)

//Biggest takeaway: Floating point rounding errors are not exclusive to JavaScript, nor are they a "fault". They stem from the IEEE 754 specification for floating point numbers, which chose to allow for a compromise between the range of numbers that can be represented and the precision with which they can be represented. 