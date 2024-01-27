function somaNumeros(){
  let n1 = parseFloat(prompt("Digite o primeiro numero"));
  let n2 = parseFloat(prompt("Digite o segundo numero"));
  let soma = n1 + n2;
  let resultado = document.getElementById('textoSubstituido');
  resultado.innerHTML = `<p>O soma dos dois números é igual a ${soma}</p>`;
}