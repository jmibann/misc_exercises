const unsortedArray = [5, 4, 3, 2, 8, 34, 52, 1];

const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const insertionSort = (array) => {
  let copy = array.slice();

  for(let i=1; i < array.length; i++){
    for(let j=i; j > 0; j--){
      if( copy[j] < copy[j-1] ){
          swap(copy, j, j-1);
        }
      }
    }
  
  return copy;
};

console.log('============> INSERTION SORT <==============');
console.log('============> Input array: ', unsortedArray);
console.log('============> Output array: ', insertionSort(unsortedArray));
