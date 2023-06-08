const unsortedArray = [5, 4, 3, 2, 8, 34, 52, 1];

const selectionSort = (array) => {
  let copy = array.slice();

  const swap = (arr, j, i) => {
    let temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  };

  for(let i=0; i < array.length; i++){
    let min = copy[i];

    for(let j=i+1; j< array.length; j++){
      
      if( copy[j] < min){
        min = copy[j];
        swap(copy, j, i);
      }
    }
  };

  return copy;
};


console.log(' ***** Ordering with selection sorting algorithm - Input Array: ', unsortedArray);
console.log('Sorted array: ', selectionSort(unsortedArray));

