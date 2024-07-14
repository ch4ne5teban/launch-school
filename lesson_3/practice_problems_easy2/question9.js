//Back in the stone age (before CSS), we used spaces to align things on the screen. If we have a 40-character wide table of Flintstone family members, how can we center the following title above the table with spaces?

let title = "Flintstone Family Members";

let totalLength = title.length;
let titleCenterPoint = totalLength / 2;
const HALF_OF_FORTY = 20;

let centeredTitle = title.padStart(HALF_OF_FORTY - titleCenterPoint);
centeredTitle = centeredTitle.padEnd(40);
