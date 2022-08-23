// function ePalindromo(palavra) {
//   for (let index in palavra) {
//     if (palavra[index] != palavra[(palavra.length - 1) - index])
//     return false;
//   }
//   return true;
// }

// console.log(ePalindromo('arara'))

function verificaPalindrome(string){
  let reverse = string.split('').reverse().join('');
  if (reverse === string) {
    return true;
  } else {
    return false;
  }
}

console.log(verificaPalindrome('arara'));
console.log(verificaPalindrome('desenvolvimento'));