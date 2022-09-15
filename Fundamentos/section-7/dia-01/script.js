const testingScope = (escopo) => { 
  if (escopo === true) { 
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo!`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = (array) => {
  for (let index = 1; index < array.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) { 
      if (array[index] < array[secondIndex]) {
        let position = array[index];
        array[index] = array[secondIndex];
        array[secondIndex] = position;
      }
    }
  }
  return array;
};

console.log(`Os números ${sortOddsAndEvens(oddsAndEvens)} se encontram ordenados de forma crescente`);

const factorial = (number) => {
  let result = 1;
  for (let index = 2; index <= number; index += 1) {
      result *= index;
  }
  return result;
};
const print = factorial(10);
console.log(`Esse é o fatorial ${print}`);

const substituaX = (nome) => {
  const frase = 'Tryber x aqui!';
  const fraseArray = frase.split(' ');
  for (let index = 0; index < fraseArray.length; index += 1) {
    if (fraseArray[index] === 'x') {
      fraseArray[index] = nome;
    }
  }  
  return fraseArray.join(' ');
};

console.log(substituaX('Bebeto'));