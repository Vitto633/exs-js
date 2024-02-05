function calculaEstacao(){
  let mes = prompt('Digite o nome do mês em extenso (ex: setembro)');
  let saida = document.getElementById('saida');
  let resultado = "";
  switch(mes.toUpperCase()){
    case 'JANEIRO': case 'FEVEREIRO': case 'DEZEMBRO':
      resultado = 'VERÃO';
      break;
    case 'MARÇO': case  'ABRIL': case 'MAIO':
      resultado = 'OUTONO';
      break;
    case 'JUNHO': case'JULHO': case 'AGOSTO':
      resultado = 'INVERNO';
      break;
    case 'SETEMBRO' : case 'OUTUBRO': case 'NOVEMBRO':
      resultado = 'PRIMAVERA';
      break;
    default: 
      alert("Mês inválido!");
      resultado = 'invalido'
  }
    if(resultado == 'invalido'){
      saida.innerHTML = "";
    }
    else{
      saida.innerHTML = `<p>A estação do mês ${mes} no hemisferio sul é ${resultado} </p>`
    }
}