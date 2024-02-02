function calculos(){
  let textoSubstituido = document.getElementById('saida');
  let n1 = parseFloat(prompt('Digite o primeiro número'));
  let n2 = parseFloat(prompt('Digite o segundo número'));
  let resultado = 0;
  let operacao = "";
  let calculo = parseInt(prompt('Escolha o calculo para os valores '+ n1 +' e '+ n2 +  '\n \n [1]soma \n [2]subtração \n [3]multiplicação \n [4]divisão \n'));
  switch (calculo){
    case 1:
      operacao = "soma";
      resultado = n1 + n2;
      break;
    case 2:
      operacao = "subtracao"
      resultado = n1 - n2;
      break;
    case 3:
      operacao = "multiplicacao"
      resultado = n1 * n2;
      break;
    case 4:
      operacao = "divisao"
      resultado = n1/n2;
      break;
    default: 
      alert('Operação Invalida!');
  }
  textoSubstituido.innerHTML = `<p>O resultado da operação de ${operacao} é de ${resultado}</p>`
}