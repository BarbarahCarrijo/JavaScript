//Realiza a checagem, tornando o código seguro para todos os navegadores
   if ( window.attachEvent ) {
	window.attachEvent('onload', config);
} else if ( window.addEventListener ) {
	window.addEventListener('load', config, true);
}
 
// A função de configuração
function config() {
	var elementA = document.getElementById('a');
	var elementB = document.getElementById('b');

	if ( elementA.addEventListener ) {
		elementA.addEventListener('click', alerta, false);
		elementB.addEventListener('click', alerta, false);
	} else {
		elementA.attachEvent('onclick', alerta);
		elementB.attachEvent('onclick', alerta);
	}
}
 
// A função alerta
function alerta( el ) {
	var o_evento = el ? el : window.event;
	var target = o_evento.target ? o_evento.target : o_evento.srcElement;

	alert(target.innerHTML);
  //Para a propagação de eventos
	if ( o_evento.stopPropagation ) {
		o_evento.stopPropagation();
	} else {
		o_evento.cancelBubble = true;
	}
}
