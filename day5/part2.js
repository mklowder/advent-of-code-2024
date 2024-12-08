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
let incorrectUpdates = [];
for (i = 0; i < updates.length; i++) {
    let update = updates[i];
    let updateArray = update.split(",")
    if (checkRules(updateArray) === false) {
        incorrectUpdates.push(updateArray);
    }
};

function checkRules(updateArray) {
    let passed;
    let timesFailed = [];
    for (n=0; n < rules.length; n++) {
        let firstPage = rules[n].substring(0, 2);
        let secondPage = rules[n].slice(-2);
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

let repairedIncorrectOrders = [];
function repairIncorrectOrders(incorrectUpdates) {
    let update = [];
    for (i=0; i < incorrectUpdates.length; i++) {
        update = incorrectUpdates[i].map(Number);
        repairedIncorrectOrders.push(runThroughRules(update));
    }
    
}

function runThroughRules(update) {
    for (n=0; n < rules.length; n++) {
        let firstPage = Number(rules[n].substring(0, 2));
        let secondPage = Number(rules[n].slice(-2));
        if (update.includes(firstPage) && update.includes(secondPage)) {
            if (update.indexOf(firstPage) > update.indexOf(secondPage)) {
                let element = update.splice(update.indexOf(secondPage), 1)[0];
                update.splice((update.indexOf(firstPage) + 1), 0, element);
                runThroughRules(update);
            }
        }
    }
    return update;
}

repairIncorrectOrders(incorrectUpdates)

let middleNumbers = [];
for (i=0; i < repairedIncorrectOrders.length; i++) {
    let amountToSubtract = (repairedIncorrectOrders[i].length - 1) / 2;
    let middleNumber = Number(repairedIncorrectOrders[i][amountToSubtract]);
    middleNumbers.push(middleNumber);
}

let total = 0;
for (i=0; i < middleNumbers.length; i++) {
    total += middleNumbers[i];
}
console.log(total);












