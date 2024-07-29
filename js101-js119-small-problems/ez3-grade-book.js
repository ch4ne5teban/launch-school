/*
Write a function that determines the mean (average) of the three scores passed to it, and returns the letter associated with that grade.

Numerical score letter grade list:

90 <= score <= 100: 'A'
80 <= score < 90: 'B'
70 <= score < 80: 'C'
60 <= score < 70: 'D'
0 <= score < 60: 'F'
Tested values are all between 0 and 100. There is no need to check for negative values or values greater than 100.
*/

function getGrade(numScore1, numScore2, numScore3) {
  
  let meanScore = (numScore1 + numScore2 + numScore3) / 3;
  
  if (meanScore >= 90) return 'A';
  if (meanScore >= 80) return 'B';
  if (meanScore >= 70) return 'C';
  if (meanScore >= 60) return 'D';
  return 'F';
}

// r.afansiev's solution:

const GRADE_MAP = {
  A: (grade) => grade >= 90 && grade <= 100,
  B: (grade) => grade >= 80 && grade < 90,
  C: (grade) => grade >= 70 && grade < 80,
  D: (grade) => grade >= 60 && grade < 70,
  F: (grade) => grade >= 0 && grade < 60,
};

function getGrade(grade1, grade2, grade3) {
  let mean = (grade1 + grade2 + grade3) / 3;
  for (let key in GRADE_MAP) {
    if (GRADE_MAP[key](mean)) return key;
  }
}

//`switch` doesn't do range-based comparisons. But see Brandon Corey's solution:
function getGrade(grade1, grade2, grade3) {
  let mean = ((grade1 + grade2 + grade3) / 3);
  mean = Math.floor(mean / 10);
  switch (mean) {
    case 10: // edge case
      return 'A';
    case 9:
      return 'A';
    case 8:
      return 'B';
    case 7:
      return 'C';
    case 6:
      return 'D';
  }
  return 'F';
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"