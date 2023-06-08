const unsortedArray = [8, 4, 7, 2, 11, 1, 15, 3];

const merge = (left, right) => {
  let merged = [];

  while(left.length && right.length){
    if( left[0] <= right[0]){
      merged = [...merged, left.shift()];
    }else{
      merged = [...merged, right.shift()];
    }
  };

  return [...merged, ...left, ...right];
};

const pureMergeSort = (array) => {
  if(array.length < 2)
    return array;

  const mid = Math.ceil(array.length/2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);
  return merge(pureMergeSort(left), pureMergeSort(right));
};

const impureMergeSort = (array) => {
  if(array.length < 2)
    return array;

  const mid = Math.ceil(array.length/2);
  const left = array.splice(0, mid);
  return merge(impureMergeSort(left), impureMergeSort(array));
}

console.log("************ RUNNING MERGE SORT ALGORITHM ************");
console.log("-----------> Input array: ", unsortedArray);
console.log("-----------> Sorted array: ", pureMergeSort(unsortedArray));

console.log('===> Pure function <== Original array: ', unsortedArray);

console.log("-----------> Sorted array: ", impureMergeSort(unsortedArray));
console.log('===> Impure function <== Original array: ', unsortedArray)