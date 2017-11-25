//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostar()
{
var contA=0;
var nota;
var sexo;
var notasT=0;
var primera=true;
var min;
var contN=0;
var notasmal

while(contA<3){
contA++
notasT=parseInt(notasT);
nota=prompt("Ingrese nota");
nota=parseInt(nota);
notasT += nota;
    while(nota<0 || nota>10){
    nota=prompt("Ingrese una nota entre 0 y 10");
    nota=parseInt(nota);
    }sexo=prompt("Ingrese sexo");
    while(sexo!="m" && sexo!="f"){
    sexo=prompt("Ingrese sexo correcto");
    }if(primera){
        primera=false;
        min=nota;
    }else if(nota<min){
        min=nota;
    }if (nota>=6 && sexo=="m")
     contN++
}
document.write("El promedio de las notas totales es " + notasT/3 + "</br>" + "La nota más baja es " + min + "</br>" + "la cantidad de varones que su nota haya sido mayor o igual a 6 son "
+ contN);
}