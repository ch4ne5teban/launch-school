//Build a program that asks the user to enter the length and width of a room in meters, and then logs the area of the room to the console in both square meters and square feet.

//Note: 1 square meter == 10.7639 square feet

//Do not worry about validating the input at this time. Use the readlineSync.prompt method to collect user input.

const READLINE = require("readline-sync");

const SQMETER_TO_SQFEET = 10.7639;

let lengthInMeters = parseFloat(READLINE.question("Enter the room length in meters: "));
let widthInMeters = parseFloat(READLINE.question("Enter the room width in meters: "));

const AREA_IN_SQ_METERS = lengthInMeters * widthInMeters;

const AREA_IN_SQ_FEET = AREA_IN_SQ_METERS * SQMETER_TO_SQFEET;

console.log(`The room's area is: ${AREA_IN_SQ_METERS.toFixed(2)} (${AREA_IN_SQ_FEET.toFixed(2)} square feet)`);