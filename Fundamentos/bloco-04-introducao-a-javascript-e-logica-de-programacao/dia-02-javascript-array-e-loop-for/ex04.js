let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let somaValores = 0;
let media = 0;

for (index = 0; index < numbers.length; index += 1) {
  somaValores += numbers[index];
  media = somaValores / numbers.length;
}

if (media > 20) {
  console.log('Valor maior que 20')
} else {
  console.log('Valor menor ou igual a 20')
}

console.log(media)

