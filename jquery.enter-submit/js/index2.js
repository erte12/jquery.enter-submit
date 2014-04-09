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

	$("#form-cadastro").enter();
});