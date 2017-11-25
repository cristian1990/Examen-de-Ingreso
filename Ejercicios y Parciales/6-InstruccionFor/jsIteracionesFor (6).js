function Mostrar()
{
var contPar=0
var num=prompt("Ingrese un numero");
for(var i=1 ;i<=num ;i++){ 
if(i%2==0){
document.write(" " + i);
 contPar++
}
}
document.write("  La cantidad es " + contPar);

}//FIN DE LA FUNCIÓN