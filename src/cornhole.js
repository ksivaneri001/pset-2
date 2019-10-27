console.log("");

const LENGTH = 48;
const WIDTH = 24;
const HOLE_DIAMETER = 6;

const HOLE_RADIUS = HOLE_DIAMETER / 2;

const pi = Math.PI;

let rectangleArea  = LENGTH * WIDTH;
let holeArea = pi * (HOLE_RADIUS ** 2);

let surfaceAreaUnrounded = rectangleArea - holeArea;
let surfaceArea = surfaceAreaUnrounded.toLocaleString("en", {minimumFractionDigits:2, maximumFractionDigits:2});

console.log("");
console.log("The surface area of a standard Cornhole board is " + surfaceArea + " square inch(es).");
