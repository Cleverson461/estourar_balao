/*
  Abaixo de 17 - Muito abaixo
  entre 17 e 18,49 - Abaixo do peso
  Entre 18,5 e 24,99 - Peso normal
  Entre 25 e 29,99 - Acima do pesso

*/

// peso / (altura * altura)`

let peso;
let altura;
let imc;
let resultado;

function calcular(event) {
  event.preventDefault();

  peso = document.getElementById("peso").value;
  altura = document.getElementById("altura").value;

  imc = (peso / (altura * altura)).toFixed(2);
  resultado = document.getElementById("resultado");

  if (imc < 17) {
    resultado.innerHTML = `<br/> Seu resultado foi: ${imc} <br/> Cuidado você está muito abaixo do peso!`;
  } else if (imc > 17 && imc <= 18.49) {
    resultado.innerHTML = `<br/> Seu resultado foi: ${imc} <br/> Você está abaixo do peso!`;
  } else if (imc > 18.5 && imc <= 24.99) {
    resultado.innerHTML = `<br/> Seu resultado foi: ${imc} <br/> Você está no peso ideal!`;
  } else if (imc > 25 && imc <= 29.99) {
    resultado.innerHTML = `<br/> Seu resultado foi: ${imc} <br/> Você está acima do peso!`;
  } else if (imc >= 30) {
    resultado.innerHTML = `<br/> Seu resultado foi: ${imc} <br/> Cuidado você está na OBESIDADE!`;
  }

  document.getElementById('peso').value = ''
  document.getElementById('altura').value = ''
}
