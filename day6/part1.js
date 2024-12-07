var fs = require('fs');
const input = fs.readFileSync('./day6/input.txt').toString().split(/\r?\n/)

let currentCoordinate = [];
for (i=0; i < input.length; i++) {
    if (input[i].includes("^")) {
        for (n=0; n < input[i].length; n++) {
            if (input[i][n] === "^") {
                currentCoordinate.push("^");
                currentCoordinate.push(i);
                currentCoordinate.push(n);
            }
        }
    }
}

let positions = [];

while (currentCoordinate[1] > -1 && currentCoordinate[1] < (input[0].length - 1) &&currentCoordinate[2] > -1 && currentCoordinate[2] < (input[0].length - 1)) {
    let direction = currentCoordinate[0];
    let x = currentCoordinate[1];
    let y = currentCoordinate[2];
    if (direction === "^") {
        if (input[(x - 1)][y] !== "#") {
            currentCoordinate[1] = x - 1;
        }
        if (input[(x - 1)][y] === "#") {
            currentCoordinate[0] = ">";
        }
    }
    if (direction === ">") {
        if (input[x][y + 1] !== "#") {
            currentCoordinate[2] = y + 1;
        }
        if (input[x][y + 1] === "#") {
            currentCoordinate[0] = "v";
        }
    }
    if (direction === "v") {
        if (input[(x + 1)][y] !== "#") {
            currentCoordinate[1] = x + 1;
        }
        if (input[(x + 1)][y] === "#") {
            currentCoordinate[0] = "<";
        }
    }
    if (direction === "<") {
        if (input[x][y - 1] !== "#") {
            currentCoordinate[2] = y - 1;
        }
        if (input[x][y - 1] === "#") {
            currentCoordinate[0] = "^";
        }
    }
    if (checkIfAlreadyExists(positions, x, y)) {
        positions.push([x,y]);
    }
}

function checkIfAlreadyExists(positions, x, y) {
    let doesNotExistYet = true;
    for (i=0; i < positions.length; i++) {
        if (positions[i][0] === x && positions[i][1] === y) {
            doesNotExistYet = false;
        }
    }
    return doesNotExistYet;
}

console.log('total positions = ' + positions.length)

