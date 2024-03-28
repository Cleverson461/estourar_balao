var data = new Date()

console.log(data)
console.log(data.getHours())
console.log(data.getMinutes())
console.log(data.getSeconds())
console.log(data.getMilliseconds())

const dataNova = new Date("March 10, 2022")
console.log(dataNova)
console.log(Date.parse(dataNova))
console.log(new Date(1646881200000))
console.log(dataNova.getDate())
console.log(dataNova.getMonth() + 1)
console.log(dataNova.getDay() + 1)
console.log(`${dataNova.getDate()}/${dataNova.getMonth()+1}/${dataNova.getFullYear()}`)
console.log(dataNova.setDate(dataNova.getDate()+5))
console.log(dataNova.getDay())

var dias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado']

console.log(dias[data.getDay()])