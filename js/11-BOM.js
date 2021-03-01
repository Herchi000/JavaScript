'use strict'


//BOM: Browser Objet Model. Es para trabajar con las propiedades del navegador web

console.log(window.innerHeight); //El window es para trabajar con las propiedades del navegador. El innerHeight es para ver la altura del navegador en pixeles
console.log(window.innerWidth); 

console.log('');

console.log(screen.height); //El screen sirve para trabajar con las propiedades de la pantalla. El height decuelve el alto, y el width el ancho
console.log(screen.width);

console.log(window.location); //El .location es para obtener información de la página web, tal como la URL, etc. 

function redireccionar(url){
	window.location.href = url; //Se puede acceder a los elementos del location utilizando la nomenclatura del punto, en este caso .href para cambiar la direccion de la url
}

function abrirVentana(url){
	window.open(url,"","width=400,height=200"); //Abrir una página web en una nueva pestaña o ventana. Solo hace falta el parámetro de la url, los demás son opcionales
}