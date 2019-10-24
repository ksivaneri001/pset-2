const readlineSync = require("readline-sync");

const CONTRIBUTION = 0.07;
const FEDERAL_INCOME_TAX = 0.157;
const STATE_INCOME_TAX = 0.0447;
const SOCIAL_SECURITY_TAX = 0.062;
const MEDICARE_TAX = 0.0145;

let annualSalary = readlineSync.question("Annual salary: ");

let annualSalaryAfter401K = annualSalary - (annualSalary * CONTRIBUTION);

let eachCheckBeforeTax = annualSalaryAfter401K / 24;
let eachCheck = eachCheckBeforeTax - (eachCheckBeforeTax * FEDERAL_INCOME_TAX * STATE_INCOME_TAX * SOCIAL_SECURITY_TAX * MEDICARE_TAX);

console.log(eachCheck);
