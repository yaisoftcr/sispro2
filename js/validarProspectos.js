function activarValidaciones() {
    			var txtNombreProspecto = new LiveValidation('txtNombreProspecto');
	    		txtNombreProspecto.add(Validate.Presence);
    	     		var txtprimerApellidoPros = new LiveValidation('txtprimerApellidoPros');
	         		txtprimerApellidoPros.add(Validate.Presence);
		            	var txtsegundoApellidoPros = new LiveValidation('txtsegundoApellidoPros');
	                	txtsegundoApellidoPros.add(Validate.Presence);
    	                  var txtcedula = new LiveValidation('txtcedula');
	                      txtcedula.add(Validate.Presence);
							  var txtnumeroTelefono = new LiveValidation('txtnumeroTelefono');
	                          txtnumeroTelefono.add(Validate.Numericality);
		                        var txtnumeroTelefonoO = new LiveValidation('txtnumeroTelefonoO');
	                            txtnumeroTelefonoO.add(Validate.Numericality);
							       var txtnumeroCelular = new LiveValidation('txtnumeroCelular');
	                        	    txtnumeroCelular.add(Validate.Numericality);
			    						var txtMail = new LiveValidation('txtMail');
	                            		txtMail.add(Validate.Email);
}