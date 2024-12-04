var fs = require('fs');
const input = fs.readFileSync('./day3/input.txt').toString()

let multipliers = input.match(/mul\(\d{1,3},\d{1,3}\)/g)?.join(' ') || "";
let multipliersArray = multipliers.split(" ")

let multipliedArray = [];
for (i=0; i < multipliersArray.length; i++) {
    let firstNumber = Number(multipliersArray[i].match(/\(([^,]+),/)[1]);
    let secondNumber = Number(multipliersArray[i].match(/,(\d+)\)/)[1])
    let multiplied = firstNumber * secondNumber;
    multipliedArray.push(multiplied);
}

let total = 0;

for (let i = 0; i < multipliedArray.length; i++) {
  total += multipliedArray[i];
}

console.log(total);