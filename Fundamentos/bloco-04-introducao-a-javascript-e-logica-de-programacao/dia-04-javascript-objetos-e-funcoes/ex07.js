let array = [2, 4, 6, 7, 10, 0, -3, 14];

function menorValor(array) {
  let indiceMenor = 0;
  for (let index in array) {
    if (array[indiceMenor] > array[index]) {
      indiceMenor = index;
    }
  }
  return indiceMenor;
}

console.log(menorValor(array));