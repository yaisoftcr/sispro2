		//Elaborado por: Victor Perez Rodriguez
        //Fecha de creación: 12:00 a.m. 12/07/2012
        //Fecha de última modificación: 08:55 a.m. 12/07/2012
	function activarValidaciones() {
		var txtSiglasCarrera = new LiveValidation('txtSiglasCarrera');
       	txtSiglasCarrera.add(Validate.Presence);
			var txtCodigoCarrera = new LiveValidation('txtCodigoCarrera');
           	txtCodigoCarrera.add(Validate.Presence);
			      	var txtGradoCarrera = new LiveValidation('txtGradoCarrera');
                   	txtGradoCarrera.add(Validate.Presence);
		               	var txtNombreCarrera = new LiveValidation('txtNombreCarrera');
           	          	txtNombreCarrera.add(Validate.Presence);
							var txtCometariosCarrera = new LiveValidation('txtCometariosCarrera');
           	          		txtCometariosCarrera.add(Validate.Presence);
								var txtcolegioProcedencia = new LiveValidation('txtcolegioProcedencia');
	                      			txtcolegioProcedencia.add(Validate.Presence);							

}