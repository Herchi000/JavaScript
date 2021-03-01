'use strict'


window.addEventListener("load", ()=>{

	var formulario = document.querySelector("#formulario");
	var box_dashed = document.querySelector(".dashed");
	box_dashed.style.display = "none";

	formulario.addEventListener("submit", function(){
		console.log('Evento Submit');

		var nombre = document.querySelector("#nombre").value;
		var apellido = document.querySelector("#apellido").value
		var edad = document.querySelector("#edad").value

		box_dashed.style.display = "block";

		var parrafo_nombre = document.querySelector("#mostrar_nombre span"); //El span indica que se está seleccionando una etiqueta span
		var parrafo_apellido = document.querySelector("#mostrar_apellido span");
		var parrafo_edad = document.querySelector("#mostrar_edad span");

		parrafo_nombre.innerHTML = nombre;
		parrafo_apellido.innerHTML = apellido;
		parrafo_edad.innerHTML = edad;



	console.log(nombre, apellido, edad);
	});

	


});
