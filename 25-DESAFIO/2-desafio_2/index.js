// 1. Verificador de Número Negativo, Positivo ou Zero: Escreva uma função que recebe um número como parâmetro e verifica se é negativo, positivo ou igual a zero. A função deve retornar uma string indicando o resultado.

const verifica = (numero) => {
  if(numero < 0){
    console.log(`Este numero ${numero} é Negativo`)
  }else if(numero > 0){
    console.log(`Este numero ${numero} é Positivo`)
  }else{
    console.log(`Este numero ${numero} é Zero`)
  }
}

console.log(verifica(0))
// 2. Desafio da Verificação de Elemento em um Array: Crie uma função que deve esperar receber 2 parâmetros, primeiro deve ser um array de números e o segundo parâmetro é um numero que deseja conferir se esse numero existe dentro do array e com isso você deve mostrar o resultado se esse numero que colocou existe dentro do seu array de números. 
function containsValue(array, value) {
  return array.includes(value);
}

// Exemplo de uso
const lista = [1, 2, 3, 4, 5];
console.log(containsValue(lista, 3)); // Saida: true
console.log(containsValue(lista, 6)); // Saida: false

//------------------------------

// 3. Com base no array abaixo o desafio como você pode percorrer e encontrar o produto com Preço Igual a R$20 e o resultado deve mostrar apenas o produto que tem o preço igual a R$20:​

const products = [
  { name: 'Maça', price: 2.5 },
  { name: 'Coca cola', price: 8 },
  { name: 'Guarana', price: 5 },
  { name: 'Chocolate', price: 20 }
];

const verificaProduto = products.map((product) => {
  if(product.price === 20){
    console.log(product)
  }
})

console.log(verificaProduto)

// ​3.1 Com o mesmo array de produtos acima como você pode Filtrar Produtos com Preço Menor que R$8?
const filtrarProtudo = products.filter((product) => {
  if(product.price < 8){
    console.log(product)
  }
})
console.log(filtrarProtudo)
