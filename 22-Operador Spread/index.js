// Spread Operator
let primeiros = [1, 2, 3, 4]

let numeros = [ 5, 10, 12, ...primeiros, 14]
console.log(numeros)

let pessoa = {
  nome: "Matheus", idade: 45, cargo: "RH"
}

let novaPessoa = {
  ...pessoa, status: "Ativo", cidade: "Campo Grande / MS", telefone: 69992817763
}

console.log(novaPessoa)

function novoUsuario(info){
  let dados = {
    ...info,
    status: "Ativo",
    inicio: "20/03/2023",
    codigo: "123123"
  }
  console.log(dados)
}

novoUsuario({ nome: "Jose", sobrenome: "Silva", cargo: "DEV"})