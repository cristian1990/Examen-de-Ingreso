//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostar()
{
var importe;
var contD=0;
var primera=true;
var max;
var min;
var primera=true;


while (contD<5){
contD++
importe=prompt("ingrese importe");
importe=parseInt(importe);
    while (importe<=0){
    importe=prompt("Ingrese un importe correcto");
    importe=parseInt(importe);
    }
    if(primera){
    primera=false;
    max=importe;
    min=importe;
    }else if (importe>max){
    max=importe;
    }if(importe<min){
        min=importe;

    }
}
document.write("El importe minimo es " + min +"</br>" + "El importe maximo es " + max);
}