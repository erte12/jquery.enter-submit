$(document).ready(function(){
	$("#nome").keypress(function(event) {
		console.log('Digitando o nome...');
	});

	$("#endereco").keypress(function(event) {
		console.log('Digitando o endereco...');
	});

	$("#telefone").keypress(function(event) {
		console.log('Digitando o telefone...');
	});

	$("#enviar").click(function(){
		alert('Enviando para o servidor');
	});

	$("#form-cadastro").enter({
		buttonId: 'enviar'
	});
});