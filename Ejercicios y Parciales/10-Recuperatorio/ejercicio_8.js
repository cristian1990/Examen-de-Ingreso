//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostar()
{
var num;
var contPar=0;
var contNum=0;
var contSuma=0;
var max;
var min;
var primera=true;

while(confirm("¿Desea continuar?")){
    contNum++
    num=prompt("Ingrese un numero");
    num=parseInt(num);
    contSuma += num;
    while(num<0){
        num=prompt("Ingrese un numero correcto");
        num=parseInt(num);
    }if(num%2==0){
        contPar++

    }if(primera){
        primera=false;
        min=num;
        max=num;

    }if(num<min){
        min=num;
    }else if(num>max){
        max=num;

    }
}
document.write("La cantidad de números pares es " + contPar + "</br>" + "el promedio de todos los números ingresados es " + contSuma/contNum + 
"</br>" + "la suma de todos los números es " + contSuma + "</br>" + " El número máximo es " + max + " El numero minimo es " + min);

}