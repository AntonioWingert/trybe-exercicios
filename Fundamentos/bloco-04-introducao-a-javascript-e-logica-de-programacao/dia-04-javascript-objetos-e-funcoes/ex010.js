let numero = 15;

function sum(numero) {
  let total = 0;
  for (let index = 0; index <= numero; index += 1) {
    total += index;
  }
  return total;
}

console.log(sum(numero));