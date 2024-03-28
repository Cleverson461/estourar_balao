// 1 - Criar o balao
// 2 - Estourar o balao
// 3 - Carregar o jogo
var total = 0;

function criarBalao() {
  var balao = document.createElement("div");
  balao.setAttribute("class", "balao");

  var x = Math.floor(Math.random() * 600);
  var y = Math.floor(Math.random() * 600);

  balao.setAttribute("style", "left:" + x + "px;top:" + y + "px;");
  balao.setAttribute("onclick", "estourar(this)");

  document.body.appendChild(balao);
}

function estourar(objeto){
    document.body.removeChild(objeto);

    total++
    var score = document.getElementById('total')
    score.innerHTML = "Balões estourados: " + total
}

function carregarJogo(){
    setInterval(criarBalao, 1000)
}