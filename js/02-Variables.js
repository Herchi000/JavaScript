'use stric' //Esto es para que poder programar en JS de forma estricta, impidiendo que programemos sin el uso de los estandares de JS

var pais = "Argentina";
var continente = "Sudamérica";
var fundacion = 1816;
var pais_y_continente = pais + ' '  + continente + ' ' + fundacion;

pais = "Uruguay";

console.log(pais, continente, fundacion);
alert(pais_y_continente);

if(true){
	let pais = "Venezuela"; //Al asignarle un valor a una variable utilizando el let nos ésta solamente tendrá el valor de dicha asignación dentro del bloque en donde esté declarada
	console.log(pais);
}

console.log(pais);


//CONSTANTES 

var sitio_web = "https://www.youtube.com";
const nombre_sitio_web = "YouTube"; 	 //El valor de una constante no puede cambiar

console.log();
console.log(sitio_web);
console.log(nombre_sitio_web); 


console.log(sitio_web);
console.log(nombre_sitio_web); 