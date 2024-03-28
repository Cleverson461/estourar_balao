//​Crie uma lista de produtos
 // A lista produtos deve conter os seguintes produtos: Computador, Telefone, Mouse, Teclado Exiba essa lista no console quando abrir o index.html.
 let produtos = ["Computador", "Telefone", "Mouse", "Teclado"]
 console.log('Lista produtos: ' + produtos)

//  Mostre no console quantos produtos tem nessa lista.
console.log('Quantidade Produtos: ' + produtos.length)
//  Retire o produto Mouse da lista e retorne no console a lista com os produtos restantes.
console.log('Tirando produto Mouse: ' + produtos.filter((item) => {
  return item !== "Mouse"
}))
//  Faça uma busca na sua lista por algum produto, por exemplo procure por Computador e caso exista esse produto na sua lista exiba um console falando que este produto existe e mostre tambem o nome deste produto caso não exista mostre uma mensagem avisão que o produto não foi encontrado.
const buscaProduto = produtos.find((item) => {
  if(item === "Computador"){
    console.log('este produto existe ' + item)
  } else {
    console.log('este produto não foi encontrado ')
  }
})

// Remova o segundo item da sua lista.
produtos.splice(1, 1)
console.log(produtos)

//Crie uma lista de apenas numeros 1,3,5,7,0,9​
const numeros = [1,3,5,7,0,9]

 // Ordene essa lista do menor para o maior.
 console.log('Numeros Ordenados: ' + numeros.sort());

 //Retire o primeiro numero desta lista.
 console.log('Primeiro numero da lista ' + numeros.shift())

 //Inverta toda ordem da sua lista por exemplo: [1,3,5,7,9] para [9,7,5,3,1]*/
 console.log('Numeros Ordenados: ' + numeros.reverse());

// Adicionando um novo numero na lista
numeros.push(8);
console.log(numeros);

// Crie uma string que contenha o dia de hoje, exemplo: 
const string = new Date()
//let hoje = '20/07/2019';
console.log(`${string.getDate()}/${string.getMonth() + 1}/${string.getFullYear()}`)

 //Separe essa data em variaveis dia onde contenha apenas o dia, mes onde contenha apenas o mes, e ano onde contenha apenas o ano.*/
const dia = string.getDate()
console.log(dia)
console.log('--------')
const mes = string.getMonth() + 1
console.log(mes)
console.log('--------')
const ano = string.getFullYear()
console.log(ano)
console.log('--------')

/*
​1) Verificador de Número Negativo, Positivo ou Zero: Escreva uma função que recebe um número como parâmetro e verifica se é negativo, positivo ou igual a zero. A função deve retornar uma string indicando o resultado.



2) Desafio da Verificação de Elemento em um Array: Crie uma função que deve esperar receber 2 parâmetros, primeiro deve ser um array de números e o segundo parâmetro é um numero que deseja conferir se esse numero existe dentro do array e com isso você deve mostrar o resultado se esse numero que colocou existe dentro do seu array de números. 



3) Com base no array abaixo o desafio como você pode percorrer e encontrar o produto com Preço Igual a R$20 e o resultado deve mostrar apenas o produto que tem o preço igual a R$20:​

const products = [
  { name: 'Maça', price: 2.5 },
  { name: 'Coca cola', price: 8 },
  { name: 'Guarana', price: 5 },
  { name: 'Chocolate', price: 20 }
];
​3.1) Com o mesmo array de produtos acima como você pode Filtrar Produtos com Preço Menor que R$8 ?



👉 Resultado dos desafios disponível para baixar mas lembre-se de primeiro praticar tentar fazer, todos conteúdos sobre os desafios estão nas aulas anteriores.​


*/