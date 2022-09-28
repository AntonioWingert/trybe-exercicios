const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
  console.log(rectangleArea(...rectangle)); // Altere o parâmetro recebido por rectangleArea()
});

const sum = (...numbers) => numbers.reduce(((acc, val) => acc + val), 0);

const alex = {
  name: 'Alex',
  age: 26,
  likes: ['fly fishing'],
  nationality: 'Australian',
 };
 const gunnar = {
  name: 'Gunnar',
  age: 30,
  likes: ['hiking', 'scuba diving', 'taking pictures'],
  nationality: 'Icelandic',
 };
 const personLikes = ({ name, age, likes }) => (
  `${name} is ${age} years old and likes ${likes.join(', ')}.`
 );
 console.log(personLikes(alex)); 
 
 console.log(personLikes(gunnar)); 

const filterPeople = (arr) => {
  return people.filter(({ nationality, bornIn }) => {
    return nationality === 'Australian' && bornIn > 1900 & bornIn <= 2000;
  });
}

const myList = [5, 2, 3];
const swap = ([a, b, c]) => [c, b, a];

const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

const toObject = ([name, brand, year]) => ({ name, brand, year });

const ships = [
  {
    name: 'Titanic',
    length: 269.1,
    measurementUnit: 'meters',
  },
  {
    name: 'Queen Mary 2',
    length: 1132,
    measurementUnit: 'feet',
  },
  {
    name: 'Yamato',
    length: 256,
    measurementUnit: 'meters',
  },
     // measurementUnit: unidade de medida
];

// escreva shipLength abaixo
const shipLength = ({ name, length, measurementUnit }) => `${name} is ${length} ${measurementUnit} long`;

// retorno esperado
console.log(shipLength(ships[0])); // 'Titanic is 269.1 meters long'
console.log(shipLength(ships[1])); // 'Queen Mary 2 is 1132 feet long'
console.log(shipLength(ships[2])); // 'Yamato is 256 meters long'

// escreva greet abaixo
const greet = (name, msg = 'Hi') => `${msg} ${name}`;
// Retornos esperados:
console.log(greet('John')); // 'Hi John'
console.log(greet('John', 'Good morning')); // 'Good morning John'
console.log(greet('Isabela', 'Oi')); // 'Oi Isabela'


const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};
// yearSeasons: estações do ano.
const { spring, summer, autumn, winter } = yearSeasons;
const months = [...spring, ...summer, ...autumn, ...winter];
console.log(months);