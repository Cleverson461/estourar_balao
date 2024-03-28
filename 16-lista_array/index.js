var lista = ['Matheus', 'Lucas', 'Henrique', 'Joao', 15]

console.log(lista)
console.log(lista[4])
console.log(lista.length)
console.log(lista.indexOf(15))
console.log(lista.join(';'))
lista.pop()
console.log(lista)
lista.shift()
console.log(lista)
lista[0] = 'Lucas Ferreira'
console.log(lista)
lista.push('Matheus')
console.log(lista)

if(lista.indexOf('Joao') > -1){
  alert('Este item está na lista')
  console.log(lista.indexOf('Joao1'))
} else {
  alert('Opa não encontrado')
}