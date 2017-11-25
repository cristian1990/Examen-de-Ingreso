//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostar()
{
var peso;
var cont=0;
var primera=true;
var max;
var min;

while(cont<5){
cont++;
peso=prompt("Ingrese peso");
peso=parseInt(peso);
    while(peso<=0){
    peso=prompt("Ingrese peso correcto");
    }if(primera){
        primera=false;
        max=peso;
        min=peso;
    }if(peso>max){
        max=peso;

    }else if(peso<min){
        min=peso;
    }

}
	document.write("El de menor peso es " + min + "</br>" + " El de mayor peso es " + max);
}