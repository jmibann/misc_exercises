const INPUT_1 = [1,2,2,3,1,2];
const INPUT_2 = [4,6,5,3,3,1];
const INPUT_3 = [1,1,2,2,4,4,5,5,5];


const pickingNumbers = (array) => {
  const sortedArray = array.sort();
  let maximum = 0;

  for(let i=0; i < sortedArray.length; i++){
    let subarray = [];
    let number = array[i];
    let nextNumber = array[i] + 1;
    
    for(let j=i; j < sortedArray.length ; j++){
      if( array[j] === number || array[j] === nextNumber ){
        subarray = [...subarray, array[j]];
        isLastItem = j === (sortedArray.length - 1);
        isLargerSubArray = subarray.length > maximum;

        if(isLastItem &&  isLargerSubArray){
            maximum = subarray.length;
        }
      } else {
        i = j - 1;
        if( subarray.length > maximum){
          maximum = subarray.length;
        }
        break;
      }
    }
  }

  return maximum;
}

console.log('=======> INPUT_1: ', pickingNumbers(INPUT_1));
console.log('=======> INPUT_2: ', pickingNumbers(INPUT_2));
console.log('=======> INPUT_3: ', pickingNumbers(INPUT_3));

