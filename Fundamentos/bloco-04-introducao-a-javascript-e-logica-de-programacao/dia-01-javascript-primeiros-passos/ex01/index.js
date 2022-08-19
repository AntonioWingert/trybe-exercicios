const notaPessoa = 40;
let resultado;
if (notaPessoa >= 80) {
  resultado = "Aprovado!!"
}
else if (notaPessoa < 80 && notaPessoa >= 60) {
  resultado = 'Lista de espera!'
}
else {
  resultado = "Voce foi reprovado!"
}
console.log(resultado)