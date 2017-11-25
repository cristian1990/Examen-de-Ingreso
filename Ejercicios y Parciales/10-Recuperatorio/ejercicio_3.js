/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 





function sumar()
{	
var num1=document.getElementById("numUno").value;
var num2=document.getElementById("numDos").value;
var num3=document.getElementById("numTres").value;
var suma;
num1=parseInt(num1);
num2=parseInt(num2);
num3=parseInt(num3);
suma= num1 + num2 + num3;
alert("La suma de los numeros es " + suma);
	
}

function restar()
{
var num1=document.getElementById("numUno").value;
var num2=document.getElementById("numDos").value;
var num3=document.getElementById("numTres").value;
var resta;
num1=parseInt(num1);
num2=parseInt(num2);
num3=parseInt(num3);
resta= num1 - num2 - num3;
alert("La resta de los numeros es " + resta);
}

function multiplicar()
{ 
var num1=document.getElementById("numUno").value;
var num2=document.getElementById("numDos").value;
var num3=document.getElementById("numTres").value;
var multi;
num1=parseInt(num1);
num2=parseInt(num2);
num3=parseInt(num3);
multi= num1 * num2 * num3;
alert("La multiplicacion de los numeros es " + multi);
}

function dividir()
{
var num1=document.getElementById("numUno").value;
var num2=document.getElementById("numDos").value;
var num3=document.getElementById("numTres").value;
var div;
num1=parseInt(num1);
num2=parseInt(num2);
num3=parseInt(num3);
div= num1 / num2 / num3;
alert("La division de los numeros es " + div);	
}

function promedio()
{
var num1=document.getElementById("numUno").value;
var num2=document.getElementById("numDos").value;
var num3=document.getElementById("numTres").value;
var prom;
num1=parseInt(num1);
num2=parseInt(num2);
num3=parseInt(num3);
prom= (num1 + num2 + num3)/3;
alert("El promedio de los numeros es " + prom);	
}

