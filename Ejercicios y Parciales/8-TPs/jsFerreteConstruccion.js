/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
var Largo=document.getElementById("Largo").value;
var Ancho=document.getElementById("Ancho").value;
var total;
total=(2*(parseInt(Largo))+2*(parseInt(Ancho)))*3;
alert("Tiene que comprar " + total + " metros de alambre.");

}
function Circulo () 
{
var Area;
var Radio=document.getElementById("Radio").value;
Area=(Math.PI * Math.pow(Radio,2))*3;
alert(Math.floor(Area));
	
	
	
}
function Materiales () 
{
var Largo=document.getElementById("Largo").value;
var Ancho=document.getElementById("Ancho").value;
var Cemento;
var Cal;
Cemento=(parseInt(Ancho) * parseInt(Largo))*2;
Cal=(parseInt(Ancho) * parseInt(Largo))*3;
alert("Se necesitan " + Cemento + " bolsas de cemento" + " y " + Cal + " bolsas de cal");
	
	
}