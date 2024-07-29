//Write a function that takes a year as input and returns the century. The return value should be a string that begins with the century number, and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.
//New centuries begin in years that end with 01. So, the years 1901 - 2000 comprise the 20th century.

//Initial solution using string manipulation
function century(year) {
  let yearString = year.toString();
  let century = yearString.substring(0, yearString.length - 2);

  if (yearString[yearString.length - 1] === "0") {
    return appendSuffix(century);
  } else {
    century = `${(Number(century) + 1)}`;
    return appendSuffix(century);
  }
}

function appendSuffix (century) {
  const lastTwoDigits = century.slice(-2);
  if (lastTwoDigits === "11" || lastTwoDigits === "12" || lastTwoDigits === "13") return century + "th";

  let lastDigit = century.slice(-1);
  switch (lastDigit) {
    case '1': return century + "st";
    case '2': return century + "nd";
    case '3': return century + "rd";
    default: return century + "th";
  }
}

//Alternative solution using Math and dictionary. Inspiration: S. Pathak's solution.
// function century(year) {
//   let century = Math.ceil(year / 100);

//   let lastTwoDigits = century % 100;
//   let lastDigit = century % 10;
//   let suffix = {1: 'st', 2: 'nd', 3: 'rd'};
//   if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
//     return(`${century}th`);
//   } else {
//     return(`${century}${suffix[lastDigit] || 'th'}`);
//   }
// }

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"
console.log(century(300));         // "3rd"