// Criando Objetos

let pessoa = {
  nome: "Davi",
  idade: 9,
  altura: 1.22,
  cargo: "Programador FullStack",
};

console.log(pessoa.nome);
console.log(pessoa.cargo);

let carro = {
  nome: 'Golf 1.6',
  cor: "Branco",
  potencia: '140cv'
}

console.log(carro);
console.log(carro.potencia);

let usuarios = [
  {nome: 'Davi', cargo: 'Programador', status: 'ATIVO'},
  {nome: 'Nicolas', cargo: 'Programador JR', status: 'ATIVO'},
  {nome: 'Cleverson', cargo: 'Programador FullStack Senior', status: 'ATIVO'},
  {nome: 'Marcileia', cargo: 'Corretora', status: 'ATIVO'},
]

console.log(usuarios)
console.log(usuarios[1])
console.log(usuarios[2].cargo)