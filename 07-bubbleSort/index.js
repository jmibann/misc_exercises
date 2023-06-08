const unsortedArray = [5,4,3,2];

const bubbleSort = (array) => {
  let copy = array.slice();
  let counter = 0;

  for(let i=0; i < array.length; i++){
    for(let j=0; j < array.length; j++){
      if( copy[j] > copy[j+1] ) {
        const temp = copy[j];
        copy[j] = copy[j+1];
        copy[j+1] = temp;
      }

    }
  };

  return copy;
};

const optimizedBubbleSort = (array) => {
  let copy = array.slice();

  for(let i=0; i < array.length; i++){
    for(let j=0; j < array.length - 1 - i; j++){
      if( copy[j] > copy[j+1]){
        const temp = copy[j];
        copy[j] = copy[j+1];
        copy[j+1] = temp;
      }
    }
  }
}


console.log(' ***** Ordering with bubble sorting algorithm - Input Array: ', unsortedArray);
console.log('Sorted array: ', bubbleSort(unsortedArray));

console.log(' ***** Ordering with optimized bubble sorting algorithm - Input Array: ', unsortedArray);
console.log('Sorted array: ', bubbleSort(unsortedArray))
