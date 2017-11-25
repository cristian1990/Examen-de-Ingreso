function Mostrar()
{
var numero = prompt("ingrese un numero de 0 a 9");
    
while(numero<0 || numero>9){
numero=prompt("ingrese numero correcto")
}
document.getElementById("Numero").value=numero;
}//FIN DE LA FUNCIÓN