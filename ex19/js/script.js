
let texto = document.querySelector('.saida');

function contador(){
  let inicio = parseInt(document.getElementById('inputInicio').value)
  let fim = parseInt(document.getElementById('inputFim').value);
  let cont = inicio;
  if(inicio == fim){
    texto.innerHTML = `<p>Não pode ser feita a contagem pois os dois valores são iguais</p>`
  }else{
    texto.innerHTML += `<h1>Iniciando a contagem de ${inicio} ao ${fim}</h1><p>`
    while(cont <= fim){
      texto.innerHTML += `${cont} 👉`;
      cont ++;
    }
    texto.innerHTML += `🏁</p>`
  }
}

function limpar(){
  texto.innerHTML = ``;
}