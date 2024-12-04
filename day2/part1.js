var fs = require('fs');
const input = fs.readFileSync('./day2/input.txt').toString().split(/\r?\n/);

function checkIfIncreasingDifferenceIsSafe(report) {
    let isSafe = true;
    for (let i=0; i < (report.length - 1); i++) {
            let difference = report[i + 1] - report[i];
            if (difference >= 4 || difference < 1) {
                isSafe = false;
            }
    }
    return isSafe;
}

function checkIfDecreasingDifferenceIsSafe(report) {
    let isSafe = true;
    for (let i=0; i < (report.length - 1); i++) {
            let difference = report[i] - report[i + 1];
            if (difference >= 4 || difference < 1) {
                isSafe = false;
            }
    }
    return isSafe;
}

let safetyStatus = [];

for (let i= 0; i < input.length; i++) {
    let reportIsSafe;
    let reportIsSafelyIncreasing;
    let reportIsSafelyDecreasing;
    let splitIndex = input[i].split(" ");
    let report = splitIndex.map(Number);

    //check if increasing safely
    if (report[0] < report[report.length - 1]) {
        reportIsSafelyIncreasing = checkIfIncreasingDifferenceIsSafe(report);
    }
    
    //check if decreasing safely
    if (report[0] > report[report.length - 1]) {
        reportIsSafelyDecreasing = checkIfDecreasingDifferenceIsSafe(report);
    }
    
    //add to list
    if (reportIsSafelyIncreasing === true || reportIsSafelyDecreasing === true) {
        safetyStatus.push(reportIsSafe);
    }
}

console.log(safetyStatus.length);
