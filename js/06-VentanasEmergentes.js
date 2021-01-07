'use strict'


//ALERTAS: Las alertas son unas ventanas que le avisan al usuario sobre algo.
alert("Advertencia. Contenido no apto para todo público!");


//CONFIRMACION: Devuelve un valor booleano. Estas son para preguntarle algo al usuario, el cual tendrá dos opciones: aceptar, o cancelar.
var confirmacion = confirm("¿Estás seguro que deseas continuar?");
console.log(confirmacion);


//INGRESO DE DATOS: Devuelve un string. Sirve para pedirle algún tipo de informacion al usuario
var edad = prompt("¿Qué edad tienes?", 18); //Tiene dos parámetros, 1er string a mostrar, 2do valor que aparecerá por defecto en la casilla a rellenar
console.log(typeof edad);