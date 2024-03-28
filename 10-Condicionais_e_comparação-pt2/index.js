// Switch
function pedir() {
  let valor = prompt("Digite um valor de 1 a 4");

  switch (Number(valor)) {
    case 1:
      alert("Você esconheu 1 = suco");
      break;
    case 2:
      alert("Você esconheu 2 = Agua gelada");
      break;
    case 3:
      alert("Você esconheu 3 = Sorvete");
      break;
    case 4:
      alert("Você chamou o garçom!");
      break;
    default:
      alert("Escolha uma opção entre 1 a 4");
      break;
  }
}

// Condicionais
var nome = 'Matheus';
var userOnline = false

if (userOnline === true) {
  console.log(`USUÁRIO ESTÁ ONLINE!`);
} else {
  console.log("USUÁRIO ESTÁ OFFLINE!");
}

var numero = 10

numero === 10 ? console.log('Numero é igual a 10') : console.log('Numero nao tem valor 10')

// a mesma coisa a de cima
if (numero === 10) {
  console.log('Numero é igual a 10');
} else {
  console.log('Numero nao tem valor 10');
}