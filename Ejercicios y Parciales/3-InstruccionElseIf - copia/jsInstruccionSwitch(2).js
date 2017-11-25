function Mostrar()
{
//tomo la edad  
var meses;
meses=document.getElementById("mes").value;

if (meses=="Enero"||meses=="Febrero"){
	alert("Ya pasamos el frio, ahora calor!!!.");

} else if (meses=="Marzo"||meses=="Abril"||meses=="Mayo"){
	alert("Falta para el invierno.");
	
	
} else if (meses=="Junio"||meses=="Julio"||meses=="Agosto"){
	alert("Abrigate que hace frio");

} else{
	
	alert("Ya pasamos el friooooo");
} 


}//FIN DE LA FUNCIÓN