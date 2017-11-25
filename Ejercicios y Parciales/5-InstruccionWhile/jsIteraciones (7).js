function Mostrar()
{
	var num;
	var contador=0;
	var acumulador=0;
	var respuesta="si";

while(respuesta!="no"){
contador++;
num=prompt("ingrese numeros");
num=parseInt(num);
respuesta = prompt("desea continuar? (no) para salir");
acumulador += num;
}
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN