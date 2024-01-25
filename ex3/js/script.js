function pegaNome(){
  let nome = prompt("Digite o seu nome");
  let texto = document.getElementById('textoSubstituido');
  texto.innerHTML = "Olá" + " " + nome + ", " + "é um prazer te conhecer"; 
}