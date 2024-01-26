function calculaMedia(){
  let nome = prompt('Digite o nome do aluno');
  let n1 = parseInt(prompt('Digite a primeira nota'));
  let n2 = parseInt(prompt('Digite a segunda nota'));
  if((n1 >= 0 && n1 <= 10) && (n2 >= 0 && n2 <= 10)){
    let media = (n1 + n2)/2;
    let resultado = document.getElementById('textoSubstituido');

    resultado.innerHTML = `<p>Calculando a média final de ${nome}</p>`;
    resultado.innerHTML += `<p>As notas obtidas foram ${n1} e ${n2}</p>`;
    resultado.innerHTML += `<p>A média final será de ${media}</p>`;
  }  
  else{
    alert('As notas não podem ser negativas ou maiores que 10');
  }
}