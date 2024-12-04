var fs = require('fs');
const input = fs.readFileSync('./day1/input.txt').toString()

let inputNoSpace = input.replace(/\s/g, "");
let inputSingleSpace = inputNoSpace.match(/.{5}/g).join(' ');
let combinedList = inputSingleSpace.split(" ")
console.log(combinedList)

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

let addedDifference = [];

for (let i= 0; i < 1000; i++) {
    let smallestInListOne = Math.min(...listOne);
    let smallestInListTwo = Math.min(...listTwo);
    addedDifference.push(Math.abs(smallestInListOne - smallestInListTwo));
    let indexOfSmallestInOne = listOne.findIndex((number) => number === smallestInListOne);
    listOne.splice(indexOfSmallestInOne, 1);
    let indexOfSmallestInTwo = listTwo.findIndex((number) => number === smallestInListTwo);
    listTwo.splice(indexOfSmallestInTwo, 1);
    // console.log(i +'. length of listOne is ' + listOne.length, 'lenth of listTwo is ' + listTwo.length);
}

let totalDifference = 0;

for (let i = 0; i < 1000; i++) {
  totalDifference += addedDifference[i];
}


// console.log(totalDifference);


