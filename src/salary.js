const readlineSync = require("readline-sync");

console.log("");

const PRE_TAX = 0.07;
const FEDERAL_INCOME_TAX = 0.157;
const STATE_INCOME_TAX = 0.0447;
const SOCIAL_SECURITY_TAX = 0.062;
const MEDICARE_TAX = 0.0145;

let annualSalary = readlineSync.question("Annual salary: ");

let eachCheckBeforePreTax = annualSalary / 24;
let eachCheckBeforeTax = eachCheckBeforePreTax - (eachCheckBeforePreTax * PRE_TAX);

let totalTaxes = FEDERAL_INCOME_TAX + STATE_INCOME_TAX + SOCIAL_SECURITY_TAX + MEDICARE_TAX;

let eachCheckUnrounded = eachCheckBeforeTax - (eachCheckBeforeTax * totalTaxes);
let eachCheck = eachCheckUnrounded.toLocaleString("en", {minimumFractionDigits:2, maximumFractionDigits:2});

console.log("");
console.log("Your take-home pay each check will be $" + eachCheck + ".");
