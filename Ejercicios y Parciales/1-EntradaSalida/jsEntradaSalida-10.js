/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
 var num1;
 var total;
 var descuento;
 num1=document.getElementById("importe").value;
 descuento=25*(parseInt(num1)/100);
 total=(parseInt(num1))-(parseInt(descuento))
 document.getElementById ("resultado").value =total;
}
