'use strict'
const numbers = [1, 2, 3, 4, 5]

function max(numbers) {
  let maxNum = numbers[0];
  let i = 0;
  while (i < numbers.length) {
    i++; 
    if (numbers[i] > maxNum) {
      maxNum = numbers[i];
    }
  }
  console.log(maxNum);
}

max(numbers);
  
function min(numbers) {
  let minNum = numbers[0];
  let i = 0;
  while (i < numbers.length) {
    i++;
    if (numbers[i] < minNum) {
      minNum = numbers[i];
    }
  }
  console.log(minNum);
}

min(numbers);