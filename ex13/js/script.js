function calculaIdade(){
  let dataNasc = parseInt(prompt("Digite o seu ano de nascimento"));
  let dadosSistema = new Date();
  let anoAtual = dadosSistema.getFullYear();
  let idade = 0;
  let textoSubstituido = document.getElementById('saida');
  if(dataNasc>anoAtual || dataNasc < 1900){
    alert("Data de nascimento invalida!!");
  }
  else{
    idade = anoAtual - dataNasc;
    textoSubstituido.innerHTML = `<p>A sua idade em ${anoAtual} é de ${idade} anos</p>`
  }
  
}