var fs = require('fs');
const input = fs.readFileSync('./day3/input.txt').toString()

let multipliers = input.match(/\bdo\(\)|\bdon't\(\)|\bmul\(\d{1,3},\d{1,3}\)/g)?.join(' ') || "";
let multipliersArray = multipliers.split(" ");

let multipliedArray = [];
let multiply;
function runThroughlist(array) {
    for (i=0; i < array.length; i++) {
        if (i === 0) {
            let firstNumber = Number(array[i].match(/\(([^,]+),/)[1]);
            let secondNumber = Number(array[i].match(/,(\d+)\)/)[1])
            let multiplied = firstNumber * secondNumber;
            multipliedArray.push(multiplied);
        }
        if (array[i] === "don't()") {
            multiply = false;
        }
        if (array[i] === "do()") {
            multiply = true;
        }
        if (multiply === true && array[i].includes('mul')) {
            let firstNumber = Number(array[i].match(/\(([^,]+),/)[1]);
            let secondNumber = Number(array[i].match(/,(\d+)\)/)[1])
            let multiplied = firstNumber * secondNumber;
            multipliedArray.push(multiplied);
        }
    }
    return multipliedArray;
}

runThroughlist(multipliersArray);

let total = 0;

for (let i = 0; i < multipliedArray.length; i++) {
  total += multipliedArray[i];
}

console.log(total);