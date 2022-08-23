let inteiros =  [2, 3, 2, 5, 8, 2, 3];

function numeroRepete(inteiros) {
  let contRepetido = 0;
  let contNumero = 0;
  let indexNumeroRepetido = 0;
  for (index in inteiros) {
    let verificaNumero = inteiros[index];
    for (index2 in inteiros) {
      if (verificaNumero === inteiros[index2]) {
        contNumero += 1;
      }
    }
    if (contNumero > contRepetido) {
      contRepetido = contNumero;
      indexNumeroRepetido = index;
    }
    contNumero = 0;
  }
  return inteiros[indexNumeroRepetido];
}

console.log(numeroRepete(inteiros))