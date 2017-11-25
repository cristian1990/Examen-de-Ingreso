function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var num;
	var textototal;
	var texto1;
	var texto2;
	var texto3;
	num=Math.round(Math.random()*9+1);
	if(num>=9 && num<=10){
		texto1="\"EXCELENTE\""
		}
	if(num>=4 && num<=8){
		texto2="\"APROBÓ\""
	
		}
	if(num<=3){
		texto3="\"Vamos, la proxima sera.\""
		
		}
	textototal=texto1 || texto2 || texto3;
	document.getElementById("nota").value=("Nota "+ num + "   " +textototal);
}//FIN DE LA FUNCIÓN