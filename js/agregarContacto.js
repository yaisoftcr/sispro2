//Elaborado por: Melvin Salas Rivera
//Fecha de creaci�n: 15:00 08/07/2012
//Fecha de �ltima modificaci�n: 16:40 08/07/2012

//Entrada: Funci�n sin par�metros.
//Salida: Verdadero al salir correctamente.
//Funcionamiento: Coloca el cursor en el primer objeto donde debe escribir el usuario.
function PonerCursor(){
	frmContacto.txtFecha.focus();
	return true;
}

//Entrada: Todos los objetos del formulario.
//Salida: El env�o de los datos del form si todos los datos son correctos.
//Funcionamiento: Analiza progresivamente objeto por objeto, el antecesor debe cumplir el formato para evaluar el siguiente
function Validar(form){
	
	// Vuelve formato
	document.getElementById("divFecha").setAttribute("class", "control-group");
	document.getElementById("divHora").setAttribute("class", "control-group");
	document.getElementById("divInfo").setAttribute("class", "control-group");
	document.getElementById("divMedio").setAttribute("class", "control-group");
	document.getElementById("divComentario").setAttribute("class", "control-group");
	
	// Validar fecha vacia
	if (form.txtFecha.value==""){
		document.getElementById("divFecha").setAttribute("class", "control-group error");
		alert("Debe introducir una fecha");
		frmContacto.txtFecha.focus();
		return false;
	}
	else	
	{
		// Validar hora vacia
		if (form.txtHora.value==""){
			document.getElementById("divHora").setAttribute("class", "control-group error");
			alert("Debe introducir una hora");
			frmContacto.txtHora.focus();
			return false;
		}
		else
		{		
			// Validar Informacion
			if (form.slcInfo.selectedIndex == 0){
				document.getElementById("divInfo").setAttribute("class", "control-group error");
				alert("Debe seleccionar una opcion de informacion");
				frmContacto.txtgrado.focus();
				return false;
			}
			else 
			{
				// Validar Medio
				if (form.slcMedio.selectedIndex == 0){
					document.getElementById("divMedio").setAttribute("class", "control-group error");
					alert("Debe seleccionar una opcion de medio");
					frmContacto.txtgrado.focus();
					return false;
				}
				else 
				{
					// Validar Comentario
					if (form.txaComentario.value==""){
						document.getElementById("divComentario").setAttribute("class", "control-group error");
						alert("Debe introducir un comentario");
						frmContacto.txaComentario.focus();
						return false;
					}
				}
			}
		}
	}
	
	// Confirmacion de envio de datos
	if(confirm("�Desea enviar los datos de este formulario?")){
		frmContacto.submit();
	}
	else
	{
		alert("Los datos no han sido enviados.");
	}
}