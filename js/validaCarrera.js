		//Elaborado por: Victor Perez Rodriguez
        //Fecha de creación: 11:40 a.m. 06/07/2012
        //Fecha de última modificación: 12:30 p.m. 06/07/2012
	function activarValidaciones() {
		var txtsiglas = new LiveValidation('txtsiglas');
       	txtsiglas.add(Validate.Presence);
			var txtcodigo = new LiveValidation('txtcodigo');
           	txtcodigo.add(Validate.Presence);
			      	var txtgrado = new LiveValidation('txtgrado');
                   	txtgrado.add(Validate.Presence);
		               	var txtname = new LiveValidation('txtname');
           	          	txtname.add(Validate.Presence);
}
