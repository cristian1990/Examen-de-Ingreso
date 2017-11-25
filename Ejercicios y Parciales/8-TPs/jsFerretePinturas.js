/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var TempFar=document.getElementById("Temperatura").value;
	var tempCentigrados;
	tempCentigrados=(TempFar-32)*(5/9);
	alert(TempFar + " Fahrenheit son " + Math.floor(tempCentigrados)+ " grados centigrados ");
}

function CentigradosFahrenheit () 
{
	var TempCent=document.getElementById("Temperatura").value;
	var TempFar;
	TempFar=(TempCent*(9/5)) + 32;
	alert(TempCent + " Grados centigrados son " + Math.floor(TempFar) + " grados Fahrenheit");
}
