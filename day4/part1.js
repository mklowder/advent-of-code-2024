var fs = require('fs');
const input = fs.readFileSync('./day4/input.txt').toString().split(/\r?\n/)

let foundForwards = [];
let foundBackwards = [];
//find forwards and backwards words
for (i=0; i < input.length; i++) {
    if (input[i].includes("XMAS")) {
        let count = input[i].match(/XMAS/g).length;
        foundForwards.push(count);
    }
    if (input[i].includes("SAMX")) {
        let count = input[i].match(/SAMX/g).length;
        foundBackwards.push(count);
    }
}
let foundForwardsTotal = 0;
for (let i = 0; i < foundForwards.length; i++) {
    foundForwardsTotal += foundForwards[i];
}

let foundBackwardsTotal = 0;
for (let i = 0; i < foundBackwards.length; i++) {
    foundBackwardsTotal += foundBackwards[i];
}

let foundDown = [];
//find vertical words going down
for (i=0; i < (input.length - 3); i++) {
    let row1 = input[i].split("");
    let row2 = input[i+1].split("");
    let row3 = input[i+2].split("");
    let row4 = input[i+3].split("");
    for (n=0; n < row1.length; n++) {
        if (row1[n] === "X" && row2[n] === "M" && row3[n] === "A" && row4[n] === "S") {
            foundDown.push(n);
        }
    }
}

let foundUp = [];
//find vertical words going up
for (i=3; i < input.length; i++) {
    let row1 = input[i].split("");
    let row2 = input[i-1].split("");
    let row3 = input[i-2].split("");
    let row4 = input[i-3].split("");
    for (n=0; n < row1.length; n++) {
        if (row1[n] === "X" && row2[n] === "M" && row3[n] === "A" && row4[n] === "S") {
            foundUp.push(n);
        }
    }
}

let foundDiagonallyForwardDown = [];
for (i=0; i < (input.length - 3); i++) {
    let row1 = input[i].split("");
    let row2 = input[i+1].split("");
    let row3 = input[i+2].split("");
    let row4 = input[i+3].split("");
    for (n=0; n < row1.length; n++) {
        if (row1[n] === "X" && row2[n+1] === "M" && row3[n+2] === "A" && row4[n+3] === "S") {
            foundDiagonallyForwardDown.push(n);
        }
    }
}

let foundDiagonallyBackwardDown = [];
for (i=0; i < (input.length - 3); i++) {
    let row1 = input[i].split("");
    let row2 = input[i+1].split("");
    let row3 = input[i+2].split("");
    let row4 = input[i+3].split("");
    for (n=3; n < row1.length; n++) {
        if (row1[n] === "X" && row2[n-1] === "M" && row3[n-2] === "A" && row4[n-3] === "S") {
            foundDiagonallyBackwardDown.push(n);
        }
    }
}

let foundDiagonallyForwardUp = [];
for (i=3; i < input.length; i++) {
    let row1 = input[i].split("");
    let row2 = input[i-1].split("");
    let row3 = input[i-2].split("");
    let row4 = input[i-3].split("");
    for (n=0; n < row1.length; n++) {
        if (row1[n] === "X" && row2[n+1] === "M" && row3[n+2] === "A" && row4[n+3] === "S") {
            foundDiagonallyForwardUp.push(n);
        }
    }
}

let foundDiagonallyBackwardUp = [];
for (i=3; i < input.length; i++) {
    let row1 = input[i].split("");
    let row2 = input[i-1].split("");
    let row3 = input[i-2].split("");
    let row4 = input[i-3].split("");
    for (n=3; n < row1.length; n++) {
        if (row1[n] === "X" && row2[n-1] === "M" && row3[n-2] === "A" && row4[n-3] === "S") {
            foundDiagonallyBackwardUp.push(n);
        }
    }
}


console.log(foundForwardsTotal + foundBackwardsTotal + foundDown.length + foundUp.length + foundDiagonallyForwardDown.length + foundDiagonallyBackwardDown.length + foundDiagonallyForwardUp.length + foundDiagonallyBackwardUp.length)