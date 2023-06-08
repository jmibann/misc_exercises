 function generateMagicSquares(magicSquare1){
	const magicSquares = [];
	magicSquares.push(magicSquare1);

	// we need to rotate it 3 times to get all rotations
	for(let i = 0; i < 3; i++){
		var rotation = magicSquares[i].map((val, index) => 
      magicSquares[i].map(row => row[index]).reverse()
    );
		// console.log(rotation)
		magicSquares.push(rotation);
	}

	// and then flip each one
	for(let i = 0; i < 4; i++){
		var flipped = magicSquares[i].map((_, colIndex) =>
      magicSquares[i].map(row => row[colIndex])
    );
		magicSquares.push(flipped);
	}

	return magicSquares;
}

 function determineCost(inputArray, validMagicSquare){
	let cost = 0;
	
	for(let i = 0; i < 3; i++){ // each row
		
		for(let j = 0; j < 3; j++){ // each digit

			cost += Math.abs(inputArray[i][j] - validMagicSquare[i][j]);
		}
	}

	return cost;

}

function formingMagicSquare(s){
  
  // const magicSquares2 = [
  //   [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
  //   [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
  //   [[8, 1, 6], [3, 5, 7], [4, 9, 2]],
  //   [[2, 9, 4], [7, 5, 3], [6, 1, 8]],
  //   [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
  //   [[4, 3, 8], [9, 5, 1], [2, 7, 6]],
  //   [[6, 7, 2], [1, 5, 9], [8, 3, 4]],
  //   [[2, 7, 6], [9, 5, 1], [4, 3, 8]]];
	const magicSquare1 = [[4, 9, 2], [3, 5, 7], [8, 1, 6]];
	const magicSquares = generateMagicSquares(magicSquare1);
	
	// let minCost = 100000;
	let minCost = Number.MAX_SAFE_INTEGER;
	let cost = 0;
	for(let i = 0; i < magicSquares.length; i++){
		cost = determineCost(s, magicSquares[i]);
		if(cost < minCost){
			minCost = cost;
		}
	}
	return minCost;
}

module.exports = { formingMagicSquare }