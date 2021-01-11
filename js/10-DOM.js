'use strict'

//USO DE DOM. Document Object Model. Permite que JS interactue con HTML

//var caja_div = document.getElementById("miCaja");  //El getElementById permite seleccionar un elemento HTML mediante su id
var caja_div = document.querySelector("#miCaja");  //Otra forma de seleccionar un elemento HTML es con el querySelector() De esta forma se puede los selectores de CSS (como el # para seleccionar por id)
console.log(caja_div);



console.log(caja_div.innerHTML); //El innerHTML te permite acceder a lo que está dentro del elemento HTML

caja_div.innerHTML = "Se cambió el texto desde JS"; //De esta forma se le puede asignar un nuevo valor al texto
console.log(caja_div); 

caja_div.style.background = "red"; //También se pueden cambiar las propiedades CSS usando el .style
caja_div.style.padding = "20px";
caja_div.style.color = "white";

caja_div.className = "Caja"; //De esta forma se le puede asignar una clase a un elemento HTML desde JS