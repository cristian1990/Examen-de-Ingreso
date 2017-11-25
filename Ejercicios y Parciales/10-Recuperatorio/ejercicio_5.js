//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostar()
{
var mes;
mes=prompt("Ingrese mes");
switch(mes){
case "diciembre":
alert("Se vienen las fiestas");
case "enero":
alert("Comienza el año");
break;

default:
alert("No es diciembre ni enero");

}

}