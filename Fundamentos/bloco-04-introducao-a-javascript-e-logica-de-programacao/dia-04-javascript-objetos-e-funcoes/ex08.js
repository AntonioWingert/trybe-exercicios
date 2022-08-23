let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maiorNome(nomes) {
  let indiceMaior = nomes[0];
  for (index in nomes) {
    if (indiceMaior.length < nomes[index].length) {
      indiceMaior = nomes[index];
    }
  }
  return indiceMaior;
}

console.log(maiorNome(nomes))