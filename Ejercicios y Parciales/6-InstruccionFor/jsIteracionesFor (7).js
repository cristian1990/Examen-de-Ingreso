function Mostrar()
{
var cont=0
var num=prompt("Ingrese un numero");
for(var i=1 ;i<=num ;i++){ 
if(num%i==0){
document.write(" " + i);
 cont++
}
}
document.write("  La cantidad es " + cont);



}//FIN DE LA FUNCIÓN