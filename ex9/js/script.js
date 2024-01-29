function calculaMedia(){
  let nome = document.getElementById('inputNome').value;
  let primeiraNota = parseFloat(document.getElementById('inputPrimeiraNota').value);
  let segundaNota = parseFloat(document.getElementById('inputSegundaNota').value);
  
     let media = (primeiraNota + segundaNota)/2;
  let textoSubstituido = document.getElementById('textoSubstituido');
  if(media >= 9){
    alert('Parabéns!');
  }  
  textoSubstituido.innerHTML = `
  <p id="diferente">Calculando a média final de ${nome}</p>
  <p>As notas obtidas foram ${primeiraNota} e ${segundaNota}</p>
  <p>A média final será de ${media}</p>
  `
 
}