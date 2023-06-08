const INPUT_1 = [ 2, 34, 3, 5, 87, 99, 345];

const funcion = (array) => {
  const isDivisibleBy = (number, divider) => Boolean(number % divider === 0);
  const containsDigit = (number, digit) =>
    number.toString().includes(digit.toString());

  const isFizz = (number) =>
    isDivisibleBy(number, 3) || containsDigit(number, 3);

  const isBuzz = (number) =>
    isDivisibleBy(number, 5) || containsDigit(number, 5)

  const result = array.map( number => {
    const isFizzNumber = isFizz(number);
    const isBuzzNumber = isBuzz(number);

    if(isFizzNumber && isBuzzNumber){
      return 'FizzBuzz';
    }
    if( isFizzNumber ){
      return 'Fizz';
    }
    return 'Buzz';
  });


  return result;
}


const resultado = funcion(INPUT_1);
console.log('-------->>>> resultado: ', resultado);