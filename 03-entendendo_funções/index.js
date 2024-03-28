function entrar() {
  var area = document.getElementById("area");
  var nome = prompt("Digite seu nome");
  var idade = prompt("Digite sua idade");

  if (nome === "" || nome === null) {
    alert("Ops algo deu errado");
    area.innerHTML = "Clique no botão para acessar...";
  } else {
    area.innerHTML = `Bem Vindo ${nome} sua idade ${idade}`;

    let botaoSair = document.createElement("button");
    botaoSair.innerHTML = "Sair da Conta";
    botaoSair.onclick = sair;
    area.appendChild(botaoSair);
  }
}

function sair() {
  alert("Até mais");
  area.innerHTML = "Você saiu!!!";
}
