const readlineSync = require("readline-sync");

const INCH_TO_CM = 2.54;

let width = readlineSync.question("Width: ");
let length = readlineSync.question("Length: ");

let perimeterInInches = (width * 2) + (length * 2);
let perimeterUnrounded = perimeterInInches * INCH_TO_CM;
let perimeterFinal = perimeterUnrounded.toLocaleString("en", {minimumFractionDigits:2, maximumFractionDigits:2});

console.log("");
console.log("A(n) " + width + "-by-" + length + "-inch sheet of paper has a perimeter of " + perimeterFinal + " square centimeter(s).");
