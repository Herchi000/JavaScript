'use strict'

//FUNCIONES: En JS las funciones son bastante sensillas


//Sintaxis

function imprimir(){
	console.log("Hola, soy una función");
}

imprimir();



//Funciones con retorno
function sumar(){
	return 1 + 2;
}

console.log(sumar());


//Uso de parámetros
function multiplicar(num1, num2){
	var producto = num1 * num2;
	return producto;
}

console.log("La multiplicacion entre 5 * 7 es " + multiplicar(5, 7))

//Parámetros opcionales
function dividir(num1, num2, mostrar = false){ //Al asignarle el valor a un parámetro en la misma función se está indicando que esta tiene un valor por defecto, el cual puede ser cambiado al llamar a la funcion e indicando su nuevo valor
	if(mostrar == true){
		var cociente = num1 / num2;
		console.log("La division entre " + num1 + " y " + num2 + " es " + cociente);
	} else{
		console.log("No se permitió mostrar");
	}
}

dividir(10, 2, true);


//FUNCIONES DE TIPO REST Y SPREAD
console.log('');
function listaFrutas(fruta1, fruta2, ...resto_frutas){ //Al ponerle los tres puntitos al tercer parámetro este pasa a transformar en un array los argumentos que reciba cuando la funcion es llamada
	console.log("Fruta 1: ", fruta1);
	console.log("Fruta 2: ", fruta2);
	console.log("Resto de Frutas: ",resto_frutas);
}

listaFrutas("Manzana", "Pera", "Banana", "Durazno", "Sandía", "Uva");

console.log('');
var frutas = ["Manzana", "Pera"]; //Array 
listaFrutas(...frutas, "Banana", "Durazno", "Sandía", "Uva"); //Aquí los tres puntos antes del array permiten que la funcion vaya tomando los valores del array uno a uno y los va usando como parámetro segun su orden


//FUNCIONES ANÓNIMAS: Son funciones que no tienen nombre
var pelicula = function(nombre_pelicula){
	return "El nombre de la película es: " + nombre_pelicula;
}