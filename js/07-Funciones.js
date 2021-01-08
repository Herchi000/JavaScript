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
console.log('');

//FUNCIONES CALLBACK: Son funciones que se pasan como parámetro a otras funciones
function sumando(num1, num2, sumaYMuestra, sumaPorDos){
	var suma = num1 + num2;
	sumaYMuestra(suma);
	sumaPorDos(suma);

	return suma;
}


sumando(10, 20, function(dato){ //Funcion de callback
	console.log("La suma es: ", dato);
},
(dato)=>{ //Tambien se puede usar la forma de flecha, una forma mas sensilla de escribir una función de callback
	console.log("La suma por 2 es: ", (dato * 2));
}
)


//METODOS ÚTILES
/*********************************
variable.toString(); Transforma el tipo de una variable a string
variable.toUpperCase(); Transforma todas las letras de un string a mayúsculas
variable.toLowerCase(); Transforma todas las letras de un string a minúsculas

variable.lenght(); Devuelve la cantidad de letras de un string. O tanbién la cantidad de elementos de un array
variable.concat(" " + variable2); Concatena texto


***********************************/


//METODOS DE BÚSQUEDA
/**********************************
variable.indexOf("string"); Devuelve el índice en donde se encuentra el argumento indicado
variable.search("string"); Lo mismo que indexOf(); Devuelve -1 si no encuentra nada
variable.match("string"); (/string/g)  Devuelve una serie de información al encontrar una coincidencia en el array con respecto al argumento utilizado
variable.subStr(int, int); Devuelve un caracter. 1er arg: Indica de qué lugar comenzará  2do arg: indica cuántos caracteres usar a partir de donde comezará
variable.charAt(int); Devuelve el caracter de la posición indecada en el argumento
variable.startsWith("string"); Devuelve true o false según si un string comienza con el argumento utilizado
variable.endsWith("string"); Lo mismo que arriba pero teniendo en cuenta el final del string
variable.includes("string"); Indica true o false según encuentre o no el argumento indicado en el string 

***************************************/

//METODOS DE REEMPLAZO
/*************************************
variable.replace("stringAReemplazar", "stringReemplazo"); Reemplaza una porcion del string por otra
variable.slice(int, int(opcional));  Toma una parte del string y elimina el resto
variable.split(" "); Separa un string en diferentes partes  según el argumente inicado (en este caso el espacio en blanco " ") y devuelve las distintas separaciones en un array
variable.trim(); Quita los espacios en blanco tanto al principio como al final del string 

*************************************/



//PLANTILLAS EN JAVASCRIPT 
var nombre = prompt("Ingrese su nombre");
var apellido = prompt("Ingrese su apellido");

//var texto = "Mi nombre es: " + nombre + "<br/> Mi apellido es: " + apellido;
var texto = `
	<h1>Hola que tal</h1>
	<h3>Mi nombre es ${nombre}</h3>
	<h3>Mi apellido es ${apellido}</h3>
`; //Se utilizan las comillas invertidas. Hacer esto es lo mismo que hacer lo de más arriba



document.write(texto);