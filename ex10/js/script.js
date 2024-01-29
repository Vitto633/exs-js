function verificaValor(){
  let texto = document.getElementById('textoSubstituido');
  let valor = document.getElementById('inputValor').value;
  
  if(valor%2 == 0){
    texto.innerHTML = `<p> O valor ${valor} é um número par</p>`
  }
  else{
    texto.innerHTML = `<p>O valor ${valor} é um número impar</p>`
  }
}