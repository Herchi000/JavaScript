'use strict'

//CONDICIONAL IF 
var num1 = 10;
var num2 = 20;

if(num1 > num2){
	console.log("El primer número es mayor que el segundo");
}else {
	console.log("El segundo número es mayor que el primero");
}



//CONDICIONAL SWITCH
var letra = 'O';


switch(letra){
	case 'A':
		console.log('A');
	break;
	case 'E':
		console.log('E');
	break;
	case 'I':
		console.log('I');
	break;
	case 'O':
		console.log('O');
	break;
	case 'U':
		console.log('U');
	break;
	default:
		console.log('NADA');
	break;
}