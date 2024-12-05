const { time } = require('console');
var fs = require('fs');
const input = fs.readFileSync('./day5/input.txt').toString().split(/\r?\n/)
let rules = [];
let updates = [];
for (i=0; i < input.length; i++) {
    if (input[i].includes("|")) {
        rules.push(input[i]);
    } else {
        updates.push(input[i]);
    }
};
let correctUpdates = [];
for (i = 0; i < updates.length; i++) {
    let update = updates[i];
    let updateArray = update.split(",")
    if (checkRules(updateArray) === true) {
        correctUpdates.push(updateArray);
    }
};

let middleNumbers = [];
for (i=0; i < correctUpdates.length; i++) {
    let amountToSubtract = (correctUpdates[i].length - 1) / 2;
    let middleNumber = Number(correctUpdates[i][amountToSubtract]);
    middleNumbers.push(middleNumber);
}

let total = 0;
for (i=0; i < middleNumbers.length; i++) {
    total += middleNumbers[i];
}
console.log(total)

function checkRules(updateArray) {
    let passed;
    let timesFailed = [];
    for (n=0; n < rules.length; n++) {
        let firstPage = rules[n].substring(0, 2);
        let secondPage = rules[n].slice(-2);
        if (updateArray.includes(firstPage) && updateArray.includes(secondPage) && updateArray.indexOf(firstPage) < updateArray.indexOf(secondPage)) {
        }
        if (updateArray.includes(firstPage) && updateArray.includes(secondPage) && updateArray.indexOf(firstPage) > updateArray.indexOf(secondPage)) {
            timesFailed.push(n);
        }
    }
    if (timesFailed.length > 0) {
        passed = false;
    } else {
        passed = true;
    }
    return passed;
}