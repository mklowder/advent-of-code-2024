var fs = require('fs');
const input = fs.readFileSync('./day6/input.txt').toString().split(/\r?\n/)

let loopsFound = [];
const startingCoordinate = [];
for (w=0; w < input.length; w++) {
    input[w] = input[w].split("")
    if (input[w].includes("^")) {
        for (z=0; z < input[w].length; z++) {
            if (input[w][z] === "^") {
                startingCoordinate.push("^");
                startingCoordinate.push(w);
                startingCoordinate.push(z);
            }
        }
    }
}
Object.freeze(startingCoordinate);
let positions = [startingCoordinate];

for (i=0; i < input.length; i++) {
    input[i] = Array.from(input[i]);
    for (n=0; n < input[i].length; n++) {
        if (input[i][n] !== "#" && input[i][n] !== "^" ) {
            input[i][n] = "#";
            checkForLoop(input);
            input[i][n] = ".";
        }
    }
}
console.log("total loops found = " + loopsFound.length)

function checkForLoop(input) {
    let currentCoordinate = [];
    
    currentCoordinate[0] = startingCoordinate[0];
    currentCoordinate[1] = startingCoordinate[1];
    currentCoordinate[2] = startingCoordinate[2];
    while (currentCoordinate[1] > -1 && currentCoordinate[1] < (input[0].length) && currentCoordinate[2] > -1 && currentCoordinate[2] < (input[0].length)) {
        let direction = currentCoordinate[0];
        let x = currentCoordinate[1];
        let y = currentCoordinate[2];
        if (direction === "^") {
            if (input[(x - 1)] && input[(x - 1)][y] !== "#") {
                currentCoordinate[1] = x - 1;
            }
            if (input[(x - 1)] && input[(x - 1)][y] === "#") {
                currentCoordinate[0] = ">";
            }
        }
        if (direction === ">") {
            if (input[x][y + 1] && input[x][y + 1] !== "#") {
                currentCoordinate[2] = y + 1;
            }
            if (input[x][y + 1] && input[x][y + 1] === "#") {
                currentCoordinate[0] = "v";
            }
        }
        if (direction === "v") {
            if (input[x + 1] && input[(x + 1)][y] !== "#") {
                currentCoordinate[1] = x + 1;
            }
            if (input[x + 1] && input[(x + 1)][y] === "#") {
                currentCoordinate[0] = "<";
            }
        }
        if (direction === "<") {
            if (input[x][y - 1] && input[x][y - 1] !== "#") {
                currentCoordinate[2] = y - 1;
            }
            if (input[x][y - 1] && input[x][y - 1] === "#") {
                currentCoordinate[0] = "^";
            }
        }
        if (!input[x + 1] || !input[x][y + 1] || !input[x - 1] || !input[x][y - 1]) {
            positions = [startingCoordinate];
            break;
        }
        positions.push([currentCoordinate[0], currentCoordinate[1], currentCoordinate[2]]);
        if (checkIfAlreadyExists(positions, currentCoordinate[0], currentCoordinate[1], currentCoordinate[2]) === true) {
            loopsFound.push("lol")
            positions = [startingCoordinate];
            break;
        }

    }
}

    



function checkIfAlreadyExists(positions, direction, x, y) {
    let alreadyExists = false;
    for (j=0; j < (positions.length - 1); j++) {
        if (positions[j][0] === direction && positions[j][1] === x && positions[j][2] === y) {
            alreadyExists = true;
            break;
        }

    }
    return alreadyExists;
}


