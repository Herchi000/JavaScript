'use strict'


//EVENTOS: Son sucesos de nuestro programa que se ejecutan cuando el usuario realiza una determinada acción

//Eventos del mouse o cursor

function cambiarColor(){ //Función para cambiar los colores del botón
	var bg = boton1.style.background;
	var colorLetra = boton1.style.color;


	if(bg == "rgb(216, 31, 31)" && colorLetra == "white"){
		boton1.style.background = "#184EB4";
		boton1.style.color = "#EEDD65";
	}else{
		boton1.style.background = "rgb(216, 31, 31)";
		boton1.style.color = "white";
	}

	return true;

	
}
//Evento click
var boton1 = document.querySelector("#boton1");
boton1.addEventListener('click', function(){ //addEventListener() agrega un evento al elemento. El 'click' llama la funcion cuando se hace click. 'dblclick' con doble click
	cambiarColor();
});


//Mouse over
boton1.addEventListener('mouseover', function(){ //mouseover es para cuando el cursor pasa por encima del elemento, se usa en conjunto con el mouseout
	boton1.style.border = "solid black 3px";
});

//Mouse out
boton1.addEventListener('mouseout', function(){ //mouseout es para cuando el cursor sale de encima del elemento, se usa en conjunto con el mouseover
	boton1.style.border = 'solid black 1px';
});




//Eventos de foco y teclado

//Focus
var imput = document.querySelector("#campo_nombre");

imput.addEventListener('focus', function(){ //El focus ejecuta una accion cuando se está enfocado en un elemento. Ej cuando se hace click en un espacio para ingresar texto
	console.log('Estas dentro del campo de texto');
});


imput.addEventListener('blur', function(){ //El blur es parecido al focus, pero se ejecuta cuando se sale del enfoque
	console.log('Estas FUERA del campo de texto');
});


imput.addEventListener('keydown', function(event){ //El keydown se activa instantaniamente al presionar una tecla
	console.log('Has presionado la tecla ', String.fromCharCode(event.keyCode)); //Todo esto es para imprimir la tecla ingresada
});


imput.addEventListener('keypress', function(event){ //Es como el keydown, pero se ejecuta una vez la tecla fue presionada
	console.log('Tecla presionada ', String.fromCharCode(event.keyCode)); 
});


imput.addEventListener('keyup', function(event){ //Es como el keypress, pero se ejecuta una vez la tecla fue soltada
	console.log('Tecla levandata ', String.fromCharCode(event.keyCode)); 
});





//Timers: estos no son eventos como tal

window.addEventListener('load', function(){ //El load es para que carguen los elementos HTML antes que el código JS. Se utiliza cuando la etiqueta <script> está en el <head> de HTML.
											//Con esta etiqueta todo lo que esté dentro de esta funcion cargará después del HTML.
	function intervalo(){
		var tiempo = setInterval(function(){ //El setInterval() crea una secuencia que se ejecutará una vez cada x tiempo, el tiempo es dado como segundo parámetro en milisegundos
		console.log('SetInterval ejecutado');
		console.log('');
		}, 1000);

		return tiempo;
	}


	var tiempo = intervalo();


	var stop = document.querySelector("#stop");
	stop.addEventListener("click", function(){
		alert('Has parado el bucle');
		clearInterval(tiempo);
	});


	var start = document.querySelector("#start");
	start.addEventListener("click", function(){
		alert('Has iniciado el bucle');
		tiempo = intervalo();
	});

});

