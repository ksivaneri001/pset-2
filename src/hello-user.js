const readlineSync = require("readline-sync");

console.log("");

console.log("Hi! What's your name?");
const name = readlineSync.question("");
console.log("");

console.log("Hello, " + name + "!");
