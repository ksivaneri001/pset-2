const readlineSync = require("readline-sync");

console.log("");

const STUDENTS = readlineSync.question("Students: ");
const TEACHERS = readlineSync.question("Teachers: ");
const BUS_CAPACITY = readlineSync.question("Bus capacity: ");

let totalPeople = Number(STUDENTS) + Number(TEACHERS);

let busesNeededUnrounded = totalPeople / Number(BUS_CAPACITY);
let busesNeeded = Math.trunc(busesNeededUnrounded) + 1;

let peopleOnLastBus = totalPeople % Number(BUS_CAPACITY);

console.log("");
console.log(busesNeeded + " bus(es) is (are) needed, with " + peopleOnLastBus + " passanger(s) on the last bus.");
