function Mostrar()
{
//tomo la edad  
var anio;
anio=document.getElementById("edad").value;
if(anio>=18){
	alert("Usted es mayor de edad")
}
if(anio>=13 && anio<=17){
	alert("Usted es adolescente")
	}
if(anio<=12)
	alert("usted es menor de edad")

}//FIN DE LA FUNCIÓN