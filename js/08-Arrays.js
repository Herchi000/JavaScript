'use strict'

//ARREGLOS
var nombresFemeninos = ["Lucy", "Emilia", "Josefina", 65, true]; //Declarando array en forma de varibale

var lenguajesProgramacion = new Array('Python', 'C', 'C#', 'JavaScript', 'PHP');

console.log(nombresFemeninos[0]);
console.log(lenguajesProgramacion[1]);

document.write("<h1>Lenguajes de Programación</h1>");
document.write("<ul>");


//FUNCION FOREACH
lenguajesProgramacion.forEach((elemento, indice, array)=>{ //En este caso, el foreach tiene tres parámetros: en orden, el primero es el 
	console.log(array);									//que tiene los elementos y los va iterando en cada pasada. El segundo muestra el
	document.write("<li>"+ indice + '-' + elemento + "</li>"); //indice de la iteración. El tercero es el array completo
});

document.write("</ul>");

console.log('');
//AGREGAR ELEMENTOS A UN ARRAY
var idiomas = ['Español', 'Inglés', 'Francés', 'Alemán', 'Ruso'];

idiomas.push('Portugués');
console.log(idiomas);

idiomas.pop(); //El método pop() elimina el último elemento de un array
console.log(idiomas);