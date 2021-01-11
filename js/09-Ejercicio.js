'use strict'

/**************************************
-HACER UNA APP QUE-
1. Pida 6 números al usuario por pantalla y los meta en un array
2. Mostrar el array entero (todos sus elementos) en el cuerpo de la página y en la consola
3. Ordene los elementos y muestrelos en consola y en el cuerpo
4. Invertir el orden y mostrarlo
5. Mostrar cuantos elementos tiene el array
6. Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra o no, y su indice

**************************************/

alert('Ejercicio');

var array_numeros = new Array(6);

// Pidiendo los elementos del array
var i = 0;
do{
	var aux = prompt((i+1) + ". Ingrese un número");

	if(!isNaN(aux)){
		array_numeros[i] = parseInt(aux);
		i++;
	}else{
		alert('Error! Ingrese un valor numérico');
	}
}while(i < 6);


//Imprimiendo los elementos en el cuerpo
document.write("<h3>Elementos del array</h3>");
document.write("<ul>");

array_numeros.forEach(function(elemento, indice, array){
	document.write('<li>' + (indice+1) + '. ' + elemento + '</li>');
});

document.write("</ul>");

//Imprimiendo los elementos en consola
console.log(array_numeros);



array_numeros.sort(function(a, b){return a-b }); //ORDENANDO LOS ELEMENTOS

//Imprimiendo los elementos de forma ordenada en el cuerpo
document.write("\n<h3>Elementos del array Ordenados</h3>");
document.write("<ul>");

array_numeros.forEach(function(elemento, indice, array){
	document.write('<li>' + (indice+1) + '. ' + elemento + '</li>');
});

document.write("</ul>");

//Imprimiendo los elementos de forma ordenada en la consola
console.log('\nArray ordenado:');
console.log(array_numeros);





array_numeros.reverse(); //INVIRTIENDO EL ORDEN DE LOS ELEMENTOS

//Imprimiendo los elementos de forma ordenada en el cuerpo
document.write("\n<h3>Elementos del array Invertidos</h3>");
document.write("<ul>");

array_numeros.forEach(function(elemento, indice, array){
	document.write('<li>' + (indice+1) + '. ' + elemento + '</li>');
});

document.write("</ul>");

//Imprimiendo los elementos de forma ordenada en la consola
console.log('\nArray ordenado:');
console.log(array_numeros);



//Cantidad de elementos impresos en el cuerpo
document.write('\nEl array tiene ' + array_numeros.length + ' elementos.');


//Cantidad de elementos por consola
console.log('El array tiene ' + array_numeros.length + ' elementos.');


var valor_encontrar = parseInt(prompt('Ingrese un valor a buscar en el array: '));

var encontrado = array_numeros.some(numero => numero == valor_encontrar);

if(encontrado){
	console.log('\nSe encontró el valor, está en la posición ' + array_numeros.findIndex(indice => indice == valor_encontrar) + ' del array invertido');
}else{
	console.log('\nNo se encontró ele elemento ingresado');
}