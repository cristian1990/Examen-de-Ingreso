function Mostrar()
{
	// declarar variables

	var contador = 0;
	var minimo = 0;
    var maximo = 0;
    var respuesta ='si';
   
   while(respuesta!='no')   {
      contador++;
      var numero = parseInt(prompt("ingrese un numero"));
      respuesta = prompt("desea continuar?(no) para salir");
         if(contador == 1)       {
         maximo = numero;
         minimo = numero;
     }
      
      if(contador>1 && numero>maximo){
		  maximo = numero;}
      
      if (contador>1 && numero<minimo){
		  minimo = numero;}

   }
document.getElementById('maximo').value=maximo;
document.getElementById('minimo').value=minimo;
}//FIN DE LA FUNCIÓN