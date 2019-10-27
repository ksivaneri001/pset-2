const readlineSync = require("readline-sync");

console.log("");

const HOMEWORK_WEIGHT = 0.15;
const QUIZ_WEIGHT = 0.35;
const TEST_WEIGHT = 0.5;

console.log("Enter three homework grades.");
let homework1 = readlineSync.question("");
let homework2 = readlineSync.question("");
let homework3 = readlineSync.question("");

console.log("");

console.log("Enter three quiz grades.");
let quiz1 = readlineSync.question("");
let quiz2 = readlineSync.question("");
let quiz3 = readlineSync.question("");

console.log("");

console.log("Enter three test grades.");
let test1 = readlineSync.question("");
let test2 = readlineSync.question("");
let test3 = readlineSync.question("");

console.log("");

let homeworkAverage = ((Number(homework1) + Number(homework2) + Number(homework3)) / 3) * HOMEWORK_WEIGHT;
let quizAverage = ((Number(quiz1) + Number(quiz2) + Number(quiz3)) / 3) * QUIZ_WEIGHT;
let testAverage = ((Number(test1) + Number(test2) + Number(test3)) / 3) * TEST_WEIGHT;

/* For testing purposes only

console.log(homeworkAverage);
console.log(quizAverage);
console.log(testAverage);

*/

let finalGradeUnrounded = homeworkAverage + quizAverage + testAverage;
let finalGrade = finalGradeUnrounded.toLocaleString("en", {minimumFractionDigits:2, maximumFractionDigits:2});

console.log("Your marking period grade is " + finalGrade + "%")
