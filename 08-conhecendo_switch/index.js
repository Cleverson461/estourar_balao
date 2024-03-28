// Switch

function pedir(){
  let valor = prompt("Digite um valor de 1 a 4")

  switch(Number(valor)){
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
      alert('Escolha uma opção entre 1 a 4')
      break;
  }
}