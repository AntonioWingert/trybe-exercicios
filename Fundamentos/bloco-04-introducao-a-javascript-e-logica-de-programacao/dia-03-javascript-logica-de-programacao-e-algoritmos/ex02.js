let word = 'banana';
let palavraInversa = [];

for (index = 0; index < word.length; index += 1) {
  palavraInversa += word[word.length - 1 - index];
}

console.log(palavraInversa);

