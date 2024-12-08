var fs = require('fs');
const input = fs.readFileSync('./day7/input.txt').toString().split(/\r?\n/)
let workableEquations = [];


for (i=0; i < input.length; i++) {
input[i] = input[i].split(" ");
input[i][0] = input[i][0].replace(/:/g, "")
}

for (i=0; i < input.length; i++) {
    checkIfAnyComboWillWork(input[i]);
}


function checkIfAnyComboWillWork(array) {
    let numberArray = array.map(Number);
    let goalNumber = numberArray[0];
    numberArray.shift();
    if (randomOperations(numberArray).includes(goalNumber)) {
        workableEquations.push(goalNumber);
    }
}



function randomOperations(arr) {
    const results = [];
    function helper(arr, current) {
      if (arr.length === 0) {
        results.push(current);
        return;
      }
      const num = arr[0];
      const rest = arr.slice(1);
      // Add
      helper(rest, current + num);
      // Multiply
      helper(rest, current * num);
      //Concatenate
      helper(rest, concatenate(current, num))
    }
    helper(arr, 0);
    return results;
}

function concatenate(num1, num2) {
    let combinedString = num1.toString() + num2.toString();
    return Number(combinedString)
}



  let total = 0;
for (let i = 0; i < workableEquations.length; i++) {
  total += workableEquations[i];
}
console.log(total);