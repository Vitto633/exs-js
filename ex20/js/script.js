function tabuada(){
  let n = parseInt(document.getElementById('inputValor').value);
  let resultado = document.getElementById('saida');
  resultado.innerHTML = ``;
  let c = 1;
  
  while(c<=10){
    resultado.innerHTML += `<p>${n} X ${c} = ${n*c}</p>`;
    c++;
  }
}