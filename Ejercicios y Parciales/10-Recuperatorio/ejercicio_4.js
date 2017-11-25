//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostar()
{
var num1;
var num2;
var res;
num1=prompt("Ingrese un numero");
num2=prompt("Ingrese otro numero");
num1=parseInt(num1);
num2=parseInt(num2);
res=num1 + num2;
if (res<0){
    alert("Resultado negativo");
    }else if(res>0){
    alert("Resultado positivo");
    }else{
        alert("Resultado cero");
    }
	
}