function Mostrar()
{
/*tomo la edad*/  
var anio;
var lista;

anio=document.getElementById("edad").value;
lista=document.getElementById("estadoCivil").value;

if(anio<18 && lista!="Soltero"){
	alert ("Usted es muy pequeño para NO ser soltero.");	
	
	}
}//FIN DE LA FUNCIÓN