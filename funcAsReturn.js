'use strict'

function hazardWarningCreator(typeOfWarning){
  let warningCounter = 0;
  return location => {
    warningCounter ++;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`)
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
  };
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const rainWarning = hazardWarningCreator('Rain on the road');
const hailWarning = hazardWarningCreator('Hail on the Road');
 
// rocksWarning('Main St and Pacific Ave');
// rainWarning('Olympic and 7th');
hailWarning('Brooks and PCH');
hailWarning('Brooks and PCH');