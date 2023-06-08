const {formingMagicSquare} = require('./solution');

const INPUT_1 = [[4, 9, 2], [3, 5, 7], [8, 1, 5]];
const INPUT_2 = [[5, 3, 4], [1, 5, 8], [6, 4, 2]];
const INPUT_3 = [[4, 8, 2], [4, 5, 7], [6, 1, 6]];

const getAllSquares = (square) => {
  let magicSquares = [[...square]];

  for(let squareIndex = 0; squareIndex<3; squareIndex++){

    const rotation = magicSquares[squareIndex].map((_, columnIndex) => 
      magicSquares[squareIndex].map((row) => row[columnIndex]).reverse()
    );

    magicSquares = [...magicSquares, [...rotation]];
  };

  for(let i=0; i<4; i++){
    let flipped = magicSquares[i].map((_, columnIndex) => 
      magicSquares[i].map(row => row[columnIndex])
    );
    
    magicSquares = [...magicSquares, [...flipped]];
  }

  return magicSquares;
};

const calculateCost = (square, solution) => {
  let cost = 0;
  
  for(let i=0; i<3; i++){
    for(let j=0; j<3; j++){
      cost += Math.abs( square[i][j] - solution[i][j]);
    }
  }

  return cost;
}

const myFunction = (square) => {
  const solution1 = [[4, 9, 2], [3, 5, 7], [8, 1, 6]];
  let minCost = 0;
  const solutions = getAllSquares(solution1);
  
  for(let i=0; i< solutions.length; i++){
    const cost = calculateCost(square, solutions[i]);
    if( i === 0 )
      minCost = cost;

    if(cost < minCost)
      minCost = cost;
  }

  return minCost;
}


console.log('\n');
console.log('=======> INPUT: ', INPUT_1)
console.log('======> Running function: myFunction ');
console.log('************** myFunction', myFunction(INPUT_1));

console.log('======> Running function: formingMagicSquare ');
console.log('************** finalCost', formingMagicSquare(INPUT_1));

console.log('\n');
console.log('=======> INPUT: ', INPUT_2)
console.log('======> Running function: myFunction ');
console.log('************** myFunction', myFunction(INPUT_2));

console.log('======> Running function: formingMagicSquare ');
console.log('************** finalCost', formingMagicSquare(INPUT_2));

console.log('\n');
console.log('=======> INPUT: ', INPUT_3)
console.log('======> Running function: myFunction ');
console.log('************** myFunction', myFunction(INPUT_3));

console.log('======> Running function: formingMagicSquare ');
console.log('************** finalCost', formingMagicSquare(INPUT_3));