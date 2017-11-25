/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precioUno=document.getElementById("PrecioUno").value;
    var precioDos=document.getElementById("PrecioDos").value;
    var precioTres=document.getElementById("PrecioTres").value;
    var total;
    total=parseInt(precioUno) + parseInt(precioDos) + parseInt(precioTres);
    alert(total);

}
function Promedio () 
{
	var precioUno=document.getElementById("PrecioUno").value;
    var precioDos=document.getElementById("PrecioDos").value;
    var precioTres=document.getElementById("PrecioTres").value;
    var total;
     total=(parseInt(precioUno) + parseInt(precioDos) + parseInt(precioTres))/3;
    alert(total);
}
function PrecioFinal () 
{
	var precioUno=document.getElementById("PrecioUno").value;
    var precioDos=document.getElementById("PrecioDos").value;
    var precioTres=document.getElementById("PrecioTres").value;
    var total;
    var totalfinal;
     total=(parseInt(precioUno) + parseInt(precioDos) + parseInt(precioTres));
     totalfinal=21*(parseInt(total)/100) + (parseInt(total));
     alert(totalfinal);
    

}