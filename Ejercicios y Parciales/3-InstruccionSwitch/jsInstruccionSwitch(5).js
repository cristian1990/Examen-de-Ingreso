function Mostrar()
{
//tomo la edad  
var laHora = document.getElementById('hora').value;
laHora=parseInt(laHora)

switch(laHora){
case 7:
case 8:
case 9:
case 10:
case 11:
alert("son las " + laHora + " de la mañana")
break;

default:
alert("No es la mañana");


}

//alert (laHora);
	
	



}//FIN DE LA FUNCIÓN