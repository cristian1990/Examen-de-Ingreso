//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostar()
{

{
	var num1=prompt("Ingrese un numero");
	var num2=prompt("Ingrese otro numero");
	num1=parseInt(num1);
	num2=parseInt(num2);
	var resultado;
	if(num1>num2){
		resultado=num1-num2
	}else if(num1<num2){
		resultado=num1+num2
	}else{
		resultado=num1*num2
	}
	alert(resultado);
}
	
}