//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostar()
{
var importe;
var importeF;
importe=prompt("Ingrese el importe");
importe=parseInt(importe);
importeF=importe - (importe*0.25);
alert("El precio Fina es  $" + importeF);
	
}