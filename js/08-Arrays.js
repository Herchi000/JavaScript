'use strict'

//ARREGLOS
var nombresFemeninos = ["Lucy", "Emilia", "Josefina", 65, true]; //Declarando array en forma de varibale

var lenguajesProgramacion = new Array('Python', 'C', 'C#', 'JavaScript', 'PHP');

console.log(nombresFemeninos[0]);
console.log(lenguajesProgramacion[1]);

document.write("<h1>Lenguajes de Programación</h1>");
document.write("<ul>");


//OTRA FORMA DE USAR EL FOR
for(let lenguaje in lenguajesProgramacion){
	document.write("<h3>" + lenguajesProgramacion[lenguaje] + "</h3>");
}

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

idiomas.splice(2, 1); //La función splice() elimina cierta cantidad de elementos (indicado en el 2do parámetro) de un array a partir de la posición especificada (1er parámetro)

idiomas.pop(); //El método pop() elimina el último elemento de un array
console.log(idiomas);

console.log('');
var texto_peliculas = idiomas.join(); //El join transforma y devuelve un array en texto en el que cada elemento está separado por comas 
console.log(texto_peliculas);


console.log('');
var cadena = 'Texto 1, Texto 2, Texto 3';
var array_cadena = cadena.split(','); //El método split divide la cadena en elementos individuales, el punto de división es indicado en el parámetro. En este caso el punto de división son las comas
console.log(array_cadena);


//ORDENAR ARRAY
console.log('');
lenguajesProgramacion.sort(); //El método sort() ordena un array de forma alfabetica
console.log(lenguajesProgramacion);
lenguajesProgramacion.reverse(); //El método reverse() invierte el orden del array
console.log(lenguajesProgramacion);


//BÚSQUEDA DE ELEMENTOS EN UN ARRAY
var busqueda = lenguajesProgramacion.find(lenguaje => lenguaje == 'PHP'); //La funcion find() permite buscar un elemento en un array. Devuelve el elemento a buscar si es que lo encuentra
																		//Observa que la funcion de callback se puede simplificar todavía más. Haciendolo de la misma forma que en C#
console.log(busqueda);

busqueda = lenguajesProgramacion.findIndex(lenguaje => lenguaje == 'PHP'); //Una variable del find() es el findIndex(), el cual devuelve el índice de la posicion en donde se encuentra ele elemento a buscar
console.log(busqueda);


console.log('');
var array_numeros = [10, 20, 30, 40, 50, 12];
var busqueda = array_numeros.some(precio => precio > 50); //El método some() devuelve true o false dependiendo de lo que se escriba como parámetro.
console.log(busqueda);									//En este caso devolverá true si existe uno o varios elementos mayores a 50, o false en caso contrario