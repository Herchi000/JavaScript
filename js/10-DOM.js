'use strict'

//USO DE DOM. Document Object Model. Permite que JS interactue con HTML

//var caja_div = document.getElementById("miCaja");  //El getElementById permite seleccionar un elemento HTML mediante su id
var caja_div = document.querySelector("#miCaja");  //Otra forma de seleccionar un elemento HTML es con el querySelector() De esta forma se puede usar los selectores de CSS (como el # para seleccionar por id)
console.log(caja_div);  						//El querySelector() es recomendado solamente para seleccionar ids, ya que solo selecciona un elemento, por lo que es inutil en clases o etiquetas
												//Para lo anterior está el querySelectorAll()


console.log(caja_div.innerHTML); //El innerHTML te permite acceder a lo que está dentro del elemento HTML

caja_div.innerHTML = "Se cambió el texto desde JS"; //De esta forma se le puede asignar un nuevo valor al texto
console.log(caja_div); 

caja_div.style.background = "red"; //También se pueden cambiar las propiedades CSS usando el .style
caja_div.style.padding = "20px";
caja_div.style.color = "white";

caja_div.className = "Caja"; //De esta forma se le puede asignar una clase a un elemento HTML desde JS



//SELECCIONAR ELEMENTOS POR SU ETIQUETA
var todos_los_divs = document.getElementsByTagName('div'); //Así se selecciona por etiqueta. La función devolvera un array con cada div como elemento
console.log(todos_los_divs);								//Tambien existe el getElementsByClassName El cual permite seleccionar por clases

var texto_divs = todos_los_divs[2].textContent; //Como su nombre lo indica, el textContent devuelve el texto del elemento
console.log(texto_divs);


console.log('');

var parrafo = document.createElement("p"); //El createElement() es para crear un elemento HTML, permitiendo asignarlo a una variable
var texto = document.createTextNode(todos_los_divs[3].textContent); // El createTextNode devuelve texto para ser asignado a una variable
parrafo.append(texto); //El append es para agregar elementos despues del elemento seleccionado

document.querySelector("#miSection").prepend(parrafo); //El prepend es para agregar elementos antes del elemento seleccionado




//SELECCIONAR ELEMENTOS POR SU CLASE
