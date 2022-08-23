let stringWord = 'trybe';
let stringEnding = 'be';

function verificaPalavra(stringWord, stringEnding) {
  stringWord = stringWord.split('');
  stringEnding = stringEnding.split('');
  let controle = true;


  for (let index = 0; index < stringEnding.length; index += 1) {
    if (stringWord[stringWord.length - stringEnding.length + index] != stringEnding[index]){
      controle = false;
    }
  }
  return controle;
}

console.log(verificaPalavra(stringWord, stringEnding))