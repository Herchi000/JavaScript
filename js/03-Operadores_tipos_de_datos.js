'use stric'

alert("Hola");


//OPERADORES

var num1 = 7;
var num2 = 12;
var operacion = num1 + num2;

/*
+ Suma
- Resta
* Multiplicacion
/ Division
** Potencia
++ Adicion en una unidad
-- Resta en una unidad
*/

//TIPOS DE DATOS
var int = 10;
var float = 25.4;
var string = "Hola 'amigo' mio";
var bool = true;

var string_numero = "34";
var numero_string = 34;

var nuevo_numero = Number(string_numero); //Hay funciones para transformar los tipos de datos. En este caso tambien se puede con parseInt()
var nuevo_string = String(numero_string); 

alert(typeof float); //la funcion typeof devuelte un texto del tipo de dato de la variable

var es_numero = isNaN(string); //La funcion isNaN (is not a number) devuelve true si su parámetro NO es un número, y false si su parámetro es un número
console.log(es_numero);