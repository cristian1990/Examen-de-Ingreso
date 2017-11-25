function Mostrar()
{
//tomo la edad  
var anio;
anio=document.getElementById("edad").value;

if(anio>=18){
	alert("Usted es mayor de edad")
	}
else{
 	if(anio>=13){ //no hace falta poner <=17 si pongo else//
	alert("Usted es adolescente")
	}
	else
	alert("Usted es menor de edad");
	}




}//FIN DE LA FUNCIÓN