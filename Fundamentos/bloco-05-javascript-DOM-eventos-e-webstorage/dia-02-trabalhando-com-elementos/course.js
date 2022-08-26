// let inicio = document.getElementById('elementoOndeVoceEsta');

// inicio.parentNode.style.backgroundColor = 'blue';

// document.getElementById('primeiroFilhoDoFilho').innerHTML = 'alo som teste';

// document.getElementById('pai').nextElementSibling;

// inicio.previousElementSibling;

// inicio.parentNode;

// document.getElementById('pai').lastElementChild.previousElementSibling;

// let pai = document.querySelector('#pai');
// let filhoElementoOndeVoceEsta = document.createElement('section');
// filhoElementoOndeVoceEsta.id = 'filhoElementoOndeVoceEsta';
// elementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta);

// let primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
// let filhoPrimeiroFilhoDoFilho = document.createElement('section');
// filhoPrimeiroFilhoDoFilho.id = 'filhoPrimeiroFilhoDoFilho';
// primeiroFilhoDoFilho.appendChild(filhoPrimeiroFilhoDoFilho);

// let terceiroFilho = filhoPrimeiroFilhoDoFilho.parentElement.parentElement.nextElementSibling;

// console.log(terceiroFilho)

let pai = document.querySelector('#pai');
let todosOsFilhos = pai.childNodes;

for (let index = todosOsFilhos.length -1; index >= 0; index -= 1) {
  let filhoAtual = todosOsFilhos[index];
  if (filhoAtual.id !== 'elementoOndeVoceEsta') {
    filhoAtual.remove();
  }
}

let segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
segundoEUltimoFilhoDoFilho.remove();