var fs = require('fs');
const input = fs.readFileSync('./day2/input.txt').toString().split(/\r?\n/);

function checkIfIncreasingDifferenceIsSafe(report) {
    let isSafe;
    let timesItWasNotSafe = [];
    for (let i=0; i < (report.length); i++) {
        let difference = report[i + 1] - report[i];
        if (difference > 3 || difference < 1) {
            timesItWasNotSafe.push(i);
        }
    }
    if (timesItWasNotSafe.length > 0) {
        isSafe = false;
    }
    if (timesItWasNotSafe.length === 0) {
        isSafe = true;
    }
    return isSafe;
}

function checkIfDecreasingDifferenceIsSafe(report) {
    let isSafe;
    let timesItWasNotSafe = [];
    for (let i=0; i < (report.length); i++) {
        let difference = report[i] - report[i + 1];
        if (difference > 3 || difference < 1) {
            timesItWasNotSafe.push(i);
        }
    }
    if (timesItWasNotSafe.length > 0) {
        isSafe = false;
    }
    if (timesItWasNotSafe.length === 0) {
        isSafe = true;
    }
    return isSafe;
}

function checkSafety(report) {
    let isSafe = false;
    for (i=0; i < (report.length); i++) {
        let modifiedReport;
        let isIncreasingSafely;
        let isDecreasingSafely;
        if (i === 0) {
            modifiedReport = report.slice((i+1), report.length);
        }
        if (i === (report.length - 1)) {
            modifiedReport = report.slice(0, -1);
        }
        if (i > 0 && i < (report.length - 1)) {
            let modifiedReportFirstPart = report.slice(0, i);
            let modifiedReportSecondPart = report.slice(i+1, report.length)
            modifiedReport = modifiedReportFirstPart.concat(modifiedReportSecondPart);
        }
        if (modifiedReport[0] > modifiedReport[modifiedReport.length - 1]) {
            isDecreasingSafely = checkIfDecreasingDifferenceIsSafe(modifiedReport);
        }
        if (modifiedReport[0] < modifiedReport[modifiedReport.length - 1]) {
            isIncreasingSafely = checkIfIncreasingDifferenceIsSafe(modifiedReport);
        }
        if (isDecreasingSafely === true || isIncreasingSafely === true) {
            isSafe = true;
        }
    }
    return isSafe;
}

let safeReports = [];
for (let i= 0; i < input.length; i++) {
    let splitIndex = input[i].split(" ");
    let report = splitIndex.map(Number);
    if ((checkSafety(report)) === true) {
        safeReports.push(i+1)
    }
}
console.log(safeReports);











