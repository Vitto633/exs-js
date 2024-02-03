let jogador = 0;
let computador = 0;
let resultado = document.getElementById('saida');
let botao = document.getElementById('btnAcerto');

function numeroAleatorio(){
  let min = 1;
  let max = 100;
  let dif = max - min;
  let aleatorio =  Math.random();
  computador = min + Math.trunc(dif * aleatorio)
  if(botao.id == 'acerto'){
    botao.removeAttribute("id","acerto");
  }
}

function adivinharNumero(){
  jogador = parseInt(prompt("Digite um número entre 0 e 100"));
  if(jogador<computador){
    resultado.innerHTML += `<p>Eu pensei em um número <strong>MAIOR</strong></p>`
  }else if(jogador>computador){
    resultado.innerHTML += `<p>Eu pensei em um número <strong>MENOR</strong></p>`
  }else{
    resultado.innerHTML += `<p>Você acertou eu pensei no número ${jogador}</p>`
    botao.setAttribute("id", "acerto");

  }
}

function limpar(){
  resultado.innerHTML = "";
}