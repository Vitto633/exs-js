function variosCalculos(){
  let valor = parseFloat(prompt("Digite um número"));
  let valorAbsoluto = Math.abs(valor);
  let raizQuadrada = Math.sqrt(valor);
  let raizCubica = Math.cbrt(valor);
  let elevadoQuadrado = Math.pow(valor, 2);
  let elevadoCubo = Math.pow(valor, 3);
  let parteInteira = Math.trunc(valor);
  let valorProximo = Math.round(valor);

  let resultado = document.getElementById('textoSubstituido');
  resultado.innerHTML = `
  <div class="containerInside">
    <p id="diferente">O número a ser analisado será o ${valor}</p>
    <p>O seu valor absoluto é ${valorAbsoluto}</p>
    <p>A sua parte inteira é ${parteInteira}</p>
    <p>O número inteiro mais próximo é o ${valorProximo}</p>
    <p>A raíz quadrada é igual a ${raizQuadrada}</p>
    <p>A raíz cubica é igual a ${raizCubica}</p>
    <p>O valor elevado ao quadrado é igual a ${elevadoQuadrado}</p>
    <p>O valor elevado ao cubo é igual a ${elevadoCubo}</p>
  </div>
  `
}