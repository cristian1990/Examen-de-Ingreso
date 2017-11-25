//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostar()
{
var num;
var nPar=0;
var contN=0;
var sumN=0;
var max;
var min;
var primera=true;

while (confirm("¿desea continuar?")){
num=prompt("Ingrese un numero");
num=parseInt(num);
contN++
sumN += num;
    while(num<0){
        num=prompt("Ingrese un numero correcto");
    }if (num%2==0){
        nPar++
    }if (primera){
        primera=false;
        max=num;
        min=num;
    }else if(num>max){
        max=num;
    }if(num<min){
        min=num;
    }

}
document.write("La cantidad de numero pares es " + nPar + "</br>" + "El promedio de todos los números ingresados es " + sumN/contN + " La suma de todos los números es " + sumN +
"</br>" + "El número máximo es " + max + " Y el minimo es " + min);
}