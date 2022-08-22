let maiorNumeroPrimo = [];

for (numeroAtual = 2; numeroAtual <= 50; numeroAtual += 1) {
  let ePrimo = true;
  for (let numeroDivisor = 2; numeroDivisor < numeroAtual; numeroDivisor += 1) {
    if (numeroAtual % numeroDivisor === 0) {
      ePrimo = false;
    }
  }
  if (ePrimo) {
    maiorNumeroPrimo = numeroAtual;
  }

}


console.log(maiorNumeroPrimo);