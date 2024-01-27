let texto = document.getElementById('textoSubstituido');
let n = 0

function zeraContador(){
  n = 0;
  texto.innerHTML = `<p>O contador está com ${n} cliques</p>`
  return n;
}

function contador(){
  n = n + 1;
  texto.innerHTML = `<p>O contador está com ${n} cliques.</p>`
  return n;
}