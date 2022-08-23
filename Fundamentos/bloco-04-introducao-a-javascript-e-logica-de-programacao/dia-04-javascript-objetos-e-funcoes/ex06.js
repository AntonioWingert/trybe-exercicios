let array = [2, 4, 6, 7, 10, 0, -3, 14];

function maiorValor(array) {
  let indiceMaior = 0;
  for (let index in array) {
    if (array[indiceMaior] < array[index]) {
      indiceMaior = index;
    }
  }
  return indiceMaior;
}

console.log(maiorValor(array));