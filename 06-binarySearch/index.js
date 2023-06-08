const binarySearch = (array , x) => {
  let low = 0;
  let high = array.length - 1;
  let mid

  while(low <= high){
    mid = low + Math.floor((high - low)/2);

    if(array[mid] === x) return mid;
   
    if(x > array[mid]){
      low = mid + 1;
    }else{
      high = mid - 1;
    }
  }

  return -1;
};



const numeros = [1, 2, 3, 4, 5, 6, 7, 8 , 9, 10];
const numero = 1;

const resultado = binarySearch(numeros, numero);

console.log(' Buscando el numero: ',  numero, 'en el array: ', numeros);
console.log(' posicion >>>>>  ',  resultado);