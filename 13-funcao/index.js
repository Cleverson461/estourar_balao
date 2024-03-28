// funcao entrar
function entrar(){
  var area =  document.getElementById("area");
  var nome = prompt('Digite seu nome?')

  if(nome === '' || nome === null){
    alert('Digite seu nome novamente !')
    area.innerHTML = 'Bem vindo....';
  }else{
    area.innerHTML = 'Bem vindo ' + nome;
  }
}

// 
function entrar2(nome){
  var area =  document.getElementById("area2");
  var texto = prompt('Digite seu sobrenome?')

  area.innerHTML = nome + ' ' + texto;
  
}