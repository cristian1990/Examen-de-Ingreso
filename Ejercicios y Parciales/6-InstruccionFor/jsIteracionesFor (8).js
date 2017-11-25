function Mostrar()
{
var num=prompt("Ingrese un numero");
num=parseInt(num);
var cont=0;
for(var i=1 ;i<=num ;i++){ 
if(num%i==0){
 cont++
}if (cont>2){
    break
}
}if (cont<=2){
    alert("es primo") 
}
}//FIN DE LA FUNCIÓN