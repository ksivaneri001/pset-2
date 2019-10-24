const readlineSync = require("readline-sync");

const HOURLY_WAGE = 12.5;

console.log("Hourly Wage: " + HOURLY_WAGE);
console.log("");

let mondayHours = readlineSync.question("Monday: ");
let tuesdayHours = readlineSync.question("Tuesday: ");
let wednesdayHours = readlineSync.question("Wednesday: ");
let thursdayHours = readlineSync.question("Thursday: ");
let fridayHours = readlineSync.question("Friday: ");
let saturdayHours = readlineSync.question("Saturday: ");
let sundayHours = readlineSync.question("Sunday: ");

let totalHours = Number(mondayHours) + Number(tuesdayHours) + Number(wednesdayHours) + Number(thursdayHours) + Number(fridayHours) + Number(saturdayHours) + Number(sundayHours);

let payUnrounded = totalHours * HOURLY_WAGE;
let pay = payUnrounded.toLocaleString("en", {minimumFractionDigits:2, maximumFractionDigits:2});

console.log("");
console.log("You'll make $" + pay + " this week.");
