let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log('Bem vinda, ', info.personagem);

info.recorrente = 'Sim';

console.log(info.recorrente);

for (let index in info) {
  console.log(index);
};

for (let index in info) {
  console.log(info[index]);
}

let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
}

for (let index in info, info2) {
  if (index === 'recorrente' && info[index] === 'Sim' && info2[index] === 'Sim') {
    console.log('Ambos recorrentes')
  }
  console.log(info[index], ' e ', info2[index]);
}