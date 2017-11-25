//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostar()
{
var contP=0;
var edad;
var sexo;
var prom=0;
var primera=true;
var min;
var acumV=0;

while(contP<3){
contP++;
edad=prompt("Ingrese la edad");
edad=parseInt(edad);
prom += edad;
    while(edad<=0 || edad>100){
        edad=prompt("Ingrese edad correcta");
        edad=parseInt(edad);
    }sexo=prompt("Ingrese sexo");
    while(sexo!="f" && sexo!="m"){
        sexo=prompt("Ingrese sexo correcto");

    }if(primera){
    primera=false
    min=edad
    }else if(edad<min){
        min=edad;
    }if(edad>=20) {
        acumV++
    }
}
document.write("El promedio de edad es " + prom/3 + "</br>" + "La edad minima es " + min + "</br>" + "La cantidad de varones que su edad sea mayor o igual a 20 es " + acumV);

}