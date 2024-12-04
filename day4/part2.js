var fs = require('fs');
const input = fs.readFileSync('./day4/input.txt').toString().split(/\r?\n/)

 let foundMOnTop = [];
 let foundMOnBottom = [];
 let foundMOnLeft = [];
 let foundMOnRight = [];
 for (i=1; i < (input.length - 1); i++) {
    let rowMiddle = input[i];
    let rowTop = input[i-1];
    let rowBottom = input[i+1];
    for (n=1; n < (rowMiddle.length - 1); n++) {
        if (rowMiddle[n].includes("A")) {
            //check if M on top
            // M   M
            //   A
            // S   S
            if (rowTop[n-1] === "M" && rowTop[n+1] === "M" && rowBottom[n-1] === "S" && rowBottom[n+1] === "S") {
                foundMOnTop.push(n);
            }
            //check if M on bottom
            // S   S
            //   A
            // M   M
            if (rowTop[n-1] === "S" && rowTop[n+1] === "S" && rowBottom[n-1] === "M" && rowBottom[n+1] === "M") {
                foundMOnBottom.push(n);
            }
            //check  if M on left
            // M   S
            //   A
            // M   S
            if (rowTop[n-1] === "M" && rowTop[n+1] === "S" && rowBottom[n-1] === "M" && rowBottom[n+1] === "S") {
                foundMOnLeft.push(n);
            }
            //check if M on right
            // S   M
            //   A
            // S   M
            if (rowTop[n-1] === "S" && rowTop[n+1] === "M" && rowBottom[n-1] === "S" && rowBottom[n+1] === "M") {
                foundMOnRight.push(n);
            }
        }
    }
 }

console.log(foundMOnTop.length + foundMOnBottom.length + foundMOnLeft.length + foundMOnRight.length)