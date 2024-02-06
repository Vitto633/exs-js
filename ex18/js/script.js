
let textoSubstituido = document.getElementById('saida');

function contador(){
  let c = 0;
  textoSubstituido.innerHTML += `<p>`
  while(c <= 10){
    if(c%2 == 0){
      textoSubstituido.innerHTML += `<mark>${c}</mark>&#x1F449`;
    }
    else{
      textoSubstituido.innerHTML += `${c}&#x1F449`;
    }
    c++
  }
  textoSubstituido.innerHTML += `&#x1F3C1 </p>`;
}

function limpar(){
  textoSubstituido.innerHTML = "";
}