
//Realiza a checagem, tornando o código seguro para todos os navegadores

if (document.attachEvent) {
  document.attachEvent('onclick', clique);
}else if (document.addEventListener) {
document.addEventListener('click', clique, true);
}


function clique() {
  alert("Parabéns vc clicou!")

}
