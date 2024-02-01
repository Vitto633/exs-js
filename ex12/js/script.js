function infos(){
  let dadosAgora = new Date();
  let semana = new Array("Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sabado");
  let meses = new Array("Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro");
  let textoSubstituido = document.getElementById('saida');
  let dia = dadosAgora.getDate();
  let mes = dadosAgora.getMonth();
  let sem = dadosAgora.getDay();
  let hora = dadosAgora.getHours();
  let minutos = dadosAgora.getMinutes();
  let segundos = dadosAgora.getSeconds();
  
  textoSubstituido.innerHTML = 
  `
    <p id="diferente">Dados recebidos diretamente do sistema:</p>
    <div class="containerInside">
      
      <p>Dia: ${dia}</p>
      <p>Mes: ${meses[mes]}</p>
      <p>Dia da semana: ${semana[sem]}</p>
      <p>Hora: ${hora}h</p>
      <p>Minutos: ${minutos}min</p>
      <p>Segundos: ${segundos}s</p>
    </div>
  `
}