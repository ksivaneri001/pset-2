const readlineSync = require("readline-sync");

let width = readlineSync.question("Width: ");
let length = readlineSync.question("Length: ");

let diagonalUnrounded = Math.sqrt((width**2) + (length**2));
let diagonalFinal = diagonalUnrounded.toLocaleString("en", {minimumFractionDigits:2, maximumFractionDigits:2});

console.log("");
console.log("A(n) " + width + "-by-" + length + "-inch sheet of paper has a diagonal of " + diagonalFinal + " square inch(es).");
