function calculaDobro(){
  let n = prompt("Digite o valor!");
  let dobro = n*2;
  let metade = n/2;
  let resultado = document.getElementById('textoSubstituido');
  resultado.innerHTML = "O dobro de " + n + " é " + dobro + "<br> A metade de " + n + " é " + metade;
}