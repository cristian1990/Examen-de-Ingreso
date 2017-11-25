function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

if (mesDelAño=="Febrero"){
	alert("Este mes tiene 28 dias");
	
}else if (mesDelAño=="Junio"||mesDelAño=="Abril"||mesDelAño=="Septiembre"||mesDelAño=="Noviembre"){
	alert("Este mes tiene 30 dias");

}else{
	alert("Este mes tiene 31 dias");
}	

}//FIN DE LA FUNCIÓN