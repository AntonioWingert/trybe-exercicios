const a = 4;
const b = 6;
const c = 8;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

if (a > b) {
  console.log(a);
} else {
  console.log(b);
}

if (a > b && a > c) {
  console.log(a);
} else if (b > a && b > c) {
  console.log(b);
} else {
  console.log(c);
}

if (a === 4) {
  console.log('positive');
} else if (a !== 4) {
  console.log('negative');
} else {
  console.log('zero');
}

let somaAngulos = a + b + c;

let angulosPositivos = a > 0 && b > 0 && c > 0;

if(angulosPositivos === 180) {
  console.log(true);
} else if (angulosPositivos !== 180) {
  console.log(false);
} else {
  console.log('Erro:Angulo Invalido')
};

const chessPiece = 'bispo';

switch (chessPiece.toLowerCase()) {
  case 'rei':
    console.log('Rei-> Uma casa apenas para qualquer direção.');
    break;
  case 'bispo':
    console.log('Bispo-> Diagonal.');
    break;
  case 'rainha':
    console.log('Rainha-> Diagonal, horizontal e vertical.');
    break;
  case 'cavalo':
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case 'torre':
    console.log('Torre -> Horizontal e vertical.');
    break;
  case 'peão':
    console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  default:
    console.log('Erro, peça inválida!');
    break;
};


const grade = 76;

if (grade < 0 || grade > 100) {
  console.log("Erro, nota incorreta!");
} else if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else if (grade >= 60) {
  console.log("D");
} else if (grade >= 50) {
  console.log("E");
} else {
  console.log("F");
}

const num1 = 15;
const num2 = 16;
const num3 = 17;
let  ePar = false;

if ((num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0)) {
  ePar = true;
};
console.log(ePar);

const custo = 20;
const venda = 55;

let valorCusto = custo * 1000;
let valorVenda = venda * 1000;
let impostoSobreOCusto = valorCusto * (20/100)
let valorCustoTotal = valorCusto + impostoSobreOCusto;
let lucro = valorVenda - valorCustoTotal
console.log(lucro)

let aliquotaINSS;
let aliquotaIR;

let salarioBruto = 3000.00;

if(salarioBruto <= 1556.94) {
  aliquotaINSS = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92) {
  aliquotaINSS = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82) {
  aliquotaINSS = salarioBruto * 0.11;
} else {
  aliquotaINSS = 570.88;
};

let salarioBase = salarioBruto - aliquotaINSS;

if(salarioBase <= 1903.98) {
  aliquotaIR = 0;
} else if (salarioBase <= 2826.65) {
  aliquotaIR = (salarioBase * 0.075) - 142.80;
} else if (salarioBase <= 3751.05) {
  aliquotaIR = (salarioBase * 0.15) - 354.80;
} else if (salarioBase <= 4664.68) {
  aliquotaIR = (salarioBase * 0.225) - 636.13;
} else {
  aliquotaIR = (salarioBase * 0.275) - 869.36;
};

console.log('Salario Líquido: ' + (salarioBase - aliquotaIR))