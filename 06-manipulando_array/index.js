var lista = ['Matheus', 'Lucas', 'Henrique', 'João', 15]

console.log(lista)
console.log(lista.length)
console.log(lista[1])
console.log(lista.indexOf('Henrique'))
console.log(lista[2])
console.log(lista.indexOf('Lucas'))
console.log(lista.indexOf('Lucas123'))
console.log(lista[1] = 'José Silva')
console.log(lista)
console.log(lista[3] = 500)
lista.push('Matheus')
console.log(lista)
lista.shift()
console.log(lista)
lista.pop()
console.log(lista)
console.log(lista.join(' / '))
if(lista.indexOf(15) > -1){
    alert('Esse item está na lista!!')
} else {
    alert('Opa não encontrado')
}