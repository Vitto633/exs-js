function dadosSistema(){
  let dados = new Date();
  let textoSubstituido = document.getElementById('saida');
  
  textoSubstituido.innerHTML = `<p>Os dados atuais do sistema são: <br><em>${dados}</em></p>`
}