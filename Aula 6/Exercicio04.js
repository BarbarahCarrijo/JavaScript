
//Realiza a checagem, tornando o código seguro para todos os navegadores

if (document.attachEvent) {
  document.attachEvent('onclick', clique);
}else if (document.addEventListener) {
document.addEventListener('click', clique, true);
}


function clique(posicao) {

  var o_posicao = posicao ? posicao : window.event;

  var alertar = 'Posição x é => ';

  alertar += o_posicao.screenX;

  alert(alertar)

}
