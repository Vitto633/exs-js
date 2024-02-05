
let textoSubstituido = document.getElementById('saida');

function contador(){
  let c = 0;
  let resultado = "";
  
  for(c = 0; c <= 10; c++){
    resultado +=c+"👉"  ;
  }
  textoSubstituido.innerHTML += 
  `
    <p>Contando de 1 a 10</p>
    <p>${resultado}🚩</p>
  `
}

function limpar(){
  textoSubstituido.innerHTML = "";
}