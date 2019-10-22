const readlineSync = require("readline-sync");

const INCH_TO_MM = 25.4;

let width = readlineSync.question("Width: ");
let length = readlineSync.question("Length: ");

let areaInInches = width * length;
let areaUnrounded = areaInInches * (INCH_TO_MM**2);
let areaFinal = areaUnrounded.toLocaleString("en", {minimumFractionDigits:2, maximumFractionDigits:2});

console.log("");
console.log("A(n) " + width + "-by-" + length + "-inch sheet of paper has an area of " + areaFinal + " square millimeter(s).");
