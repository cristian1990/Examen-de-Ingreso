function Mostrar()
{
	//declarar contadores y variables 
	var contador=0;
	var respuesta="si";
	var num;
	var negativo=0;
	var positivo=0;
	var contPos=0;
	var contNeg=0;
	var contPar=0;
	var contImpar=0;
	var contCeros=0;

	while(respuesta!="no"){
		contador++
		num=prompt("Ingrese un numero");
		num=parseInt(num);
		respuesta = prompt("desea continuar?(no) para salir");
		if (num>0){
		contPos++
		positivo += num;
		}else {
		contNeg++
		negativo += num; 
		}if(num%2==0){
			contPar++
		}else{
			contImpar++
		}if (num==0){
			contCeros++
		}
	

}

document.write("La suma de numeros positivos son " + positivo + "   Los numeros positivos ingresados son " + contPos + "</br>" 
+ " La suma de numeros negativos son " + negativo + "   Los numeros negativos ingresados son " + contNeg + "</br>"
+ " Los numeros pares ingresados son "+ contPar + " Los numeros impares ingresados son " + contImpar + "</br>"
+ "Los ceros ingresados son " + contCeros + "</br>"
+ "El promedio de numeros positivos es " + positivo/contPos + "</br>"
+ "El promedio de numeros negativos es " + negativo/contNeg + "</br>"
+ "La diferencia de numeros positivos y negativos es " + (positivo + negativo));



}//FIN DE LA FUNCIÓN