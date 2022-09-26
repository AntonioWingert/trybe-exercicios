const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

const ex01 = (arr) => arr.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);

// console.log(ex01(books));

const ex02 = (arr) => arr.map((book) => ({
  author: book.author.name,
  age: book.releaseYear - book.author.birthYear,
})).sort((obj1, obj2) => obj1.age - obj2.age);

// console.log(ex02(books));

const ex03 = (arr) => arr.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia');

// console.log(ex03(books));

const ex04 = (arr) => arr.filter((book) => {
  currentYear = new Date().getFullYear();
  return currentYear - book.releaseYear > 60;
}).sort((bookA, bookB) => bookA.releaseYear - bookB.releaseYear);

// console.log(ex04(books));

const ex05 = (arr) => arr.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia').map((book) => book.author.name).sort();

// console.log(ex05(books))

function ex06() {
  const currentYear = new Date().getFullYear();
  return books
    .filter((book) => currentYear - book.releaseYear > 60)
}

// console.log(ex06(books));

const ex07 = (arr) => {
  return arr.find((book) => (
    book.author.name.split(' ')
      .filter((word) => word.endsWith('.')).length === 3
  )).name;
};

console.log(ex07(books));