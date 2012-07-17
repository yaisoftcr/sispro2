			
			//<!--Elaborado por: Dennis Hernández Vargas, Creación: 4/7/2012 7:00p.m. Ultima modificación: 11:24 p.m.-->
			
			function PoneCursor(){
                frmAgregarUsuario.txtNombre.focus();
                return true;
            }
			
			function EsNumero(TiraVerificar){
				var IndiceTira; 
				var Caracter;
				var existeNum = false;
				for (IndiceTira=0; IndiceTira < TiraVerificar.length; IndiceTira++){
					Caracter=TiraVerificar.charAt(IndiceTira);
					if ((Caracter < "0") || (Caracter > "9" )){
						existeNum = true;
					}
				}
				return existeNum;
			}
			function Validar(frmAgregarUsuario){
				if (frmAgregarUsuario.txtNombre.value==""){
						alert("Debe introducir un Nombre");
						frmAgregarUsuario.txtNombre.focus();
					return false;
							}else if(EsNumero(frmAgregarUsuario.txtNombre.value) == false){
								alert("Debe introducir solo letras en el campo nombre");
								frmAgregarUsuario.txtNombre.focus();
								return false;
									}else if (frmAgregarUsuario.txtPrimerApellido.value==""){
									  alert("Debe introducir el primer apellido del usuario");
									  frmAgregarUsuario.txtPrimerApellido.focus();
									  return false; 
											}else if(EsNumero(frmAgregarUsuario.txtPrimerApellido.value) == false){
												alert("Debe introducir solo letras en campo Apellido");
												frmAgregarUsuario.txtPrimerApellido.select();
												return false;
													}else if (frmAgregarUsuario.txtNumCedula.value==""){
														  alert("Debe introducir el numero de cedula del usuario");
														  frmAgregarUsuario.txtNumCedula.focus();
														  return false; 
																}else if (frmAgregarUsuario.txtUsuario.value==""){
																	  alert("Debe introducir el nombre de usuario");
																	  frmAgregarUsuario.txtUsuario.focus();
																	  return false; 
																			}else if(EsNumero(frmAgregarUsuario.txtUsuario.value) == false){
																				alert("Debe introducir solo letras en el nombre de Usuario");
																				frmAgregarUsuario.txtUsuario.select();
																				return false;
																					}else if (frmAgregarUsuario.pwdClave.value==""){
																					  alert("Debe introducir la contraseña");
																					  frmAgregarUsuario.pwdClave.focus();
																					  return false; 
																							}else if (frmAgregarUsuario.pwdConfirmClave.value != frmAgregarUsuario.pwdClave.value){
																									alert("Debe introducir la misma contraseña");
																									frmAgregarUsuario.pwdConfirmClave.focus();
																									return false;
																											}else if (!frmAgregarUsuario.rbtAdmin.checked &&!frmAgregarUsuario.rbtUsuario.checked){
																													alert ("Debe seleccionar el rol del usuario a registrar");
																													return false;
																															}if(confirm("¿Desea enviar la informacion?")){
																																frmAgregarUsuario.submit();
																																}else{
																																	alert("Los datos no han sido enviados");
																																}
																																return true;
				}
