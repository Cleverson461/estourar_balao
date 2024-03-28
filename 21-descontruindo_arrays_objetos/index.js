let pessoa = {
  nome: 'Matheus', sobrenome: 'Fraga', empresa: 'Sujeito Programador', cargo: 'Programador FullStack'
}

const { nome, cargo, empresa, sobrenome} = pessoa

console.log(nome)
console.log(sobrenome)

console.log(empresa)
console.log(cargo)


// ==============================
// Desconstructor Array
let nomes = ["Matheus", "Cleverson", "Henrique"]
// let { 0:matheus, 2:terceiraPessoa } = nomes

// console.log(matheus)
// console.log(terceiraPessoa)

let [primeiroNome, segundoNome] = nomes 
console.log(primeiroNome)
console.log(segundoNome)