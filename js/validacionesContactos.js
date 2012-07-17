function activarValidaciones () {
	var txtsiglas = new LiveValidation('lblcomentarios');
       	txtsiglas.add(Validate.Presence);
}