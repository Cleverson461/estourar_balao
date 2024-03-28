// Desafio Mega Sena JS
// 1. Crie uma função que espere como argumento um numero e esse precisa ser de 6 até 9, caso seja um numero menor que 6 ou maior que 9 essa função deverá retornar um array vazio.

// 2. Dentro da função você deverá pegar o numero recebido como argumento e gerar uma lista de numeros aleatórios com base no tamanho do argumento, exemplo se o usuário mandou 6 você deverá gerar uma lista de numeros contendo 6 numeros aleatório sem repetir nenhum e os numeros gerados precisam ser entre 01 até 60.

// 3. E ao final deverá retornar uma lista com os numeros gerados.

function gerarNumero(quantidadesNumeros){
  if(quantidadesNumeros < 6 || quantidadesNumeros > 9){
    console.log("Apenas numeros de 6 até 9")
    return []
  }

  const numeros = []

  while(numeros.length < quantidadesNumeros){
    const numerosAleatorio = Math.floor(Math.random() * 60) + 1;

    if(!numeros.includes(numerosAleatorio)){
      numeros.push(numerosAleatorio)
    }
  } 
  return numeros;
}

const numeroSorteado = gerarNumero(9)
console.log(numeroSorteado)

