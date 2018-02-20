'use strict'

function turtleMovement() {
  const allMovements = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];
  let actualMoves = allMovements.filter(allMovement => allMovement[0] >= 0 && allMovement[1] >=0);
  let totalMoves = actualMoves.map(actualMoves => actualMoves[0] + actualMoves[1]);
  totalMoves.forEach(totalMove => {
    console.log(totalMove);
  });
}

turtleMovement();