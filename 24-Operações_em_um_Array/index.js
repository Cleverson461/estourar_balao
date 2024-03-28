/* Map = Percorrer Todo um Array
let lista = ["Matheus", "Jose", "Maria"]
const novaLista = lista.map((item, index) => {
  console.log(`PASSANDO: ${item} - Esta na posicao ${index}`)
})*/

/*Reduce = O reduce busca a reduzir um array

let numeros = [5, 3, 2, 5]
let total = numeros.reduce((acumulador, numero, indice, original) => {
  console.log(`${acumulador} - Total ate o momento`)
  console.log(`${numero} - Valor atual`)
  console.log(`${indice} - indice atual`)
  console.log(`${original} - array original`)
  console.log('===================')

  return acumulador += numero
}, 0)

console.log("Total do Reduce: " + total)*/

/*Find*/

let listagem = [5, 3, "Jose", 2, "Matheus"]

let busca = listagem.find((item) => {
  // if(item === "Jose"){
  //   return console.log("Item encontrado com sucesso")
  // }
  return item === "Jose"
})

console.log(busca)

/* Filter */
let palavras = ["Matheus", "Ana", "Jose", "Ricardo Silva", "Sujeito Programador"]

let resultado = palavras.filter((item) => {
  return item.length <= 4
})

console.log(resultado)