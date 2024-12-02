var fs = require('fs');
const input = fs.readFileSync('./day1/day1input.txt').toString()

let inputNoSpace = input.replace(/\s/g, "");
let inputSingleSpace = inputNoSpace.match(/.{5}/g).join(' ');
let combinedList = inputSingleSpace.split(" ")

let listOne = [];
let listTwo = [];

for (let i = 0; i < combinedList.length; i++) {
    if (i % 2 === 0) {
        listOne.push(Number(combinedList[i]));
    } 
    else {
        listTwo.push(Number(combinedList[i]));
    }
}

let similarityScoresArray = [];

for (let i= 0; i < listOne.length; i++) {
    let numberOfMatches = listTwo.filter((number) => number === listOne[i]).length
    if (numberOfMatches !== 0) {
        similarityScoresArray.push(listOne[i] * numberOfMatches);
    }
    // console.log(i + '. number from listOne is ' + listOne[i] + ' and it appears in listTwo ' + numberOfMatches + ' times' )
    // console.log(listOne[i] * numberOfMatches)
}
// console.log(similarityScoresArray);

// console.log(similarityScoresArray);

let similarityScore = 0;

for (let i = 0; i < similarityScoresArray.length; i++) {
    similarityScore += similarityScoresArray[i];
}


console.log(similarityScore)


