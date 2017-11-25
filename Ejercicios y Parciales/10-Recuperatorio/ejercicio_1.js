/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'MOSTRAR'*/
function Mostar()
{
	var base;
	base=document.getElementById("base").value;
	base=parseInt(base);
	base=base*base
	alert("La superficie es " + base);
}


