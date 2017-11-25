/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
 var num1;
 var total;
 num1=document.getElementById("sueldo").value;
 total=10*(parseInt(num1)/100) + (parseInt(num1));
 document.getElementById ("resultado").value =total;
	
}
