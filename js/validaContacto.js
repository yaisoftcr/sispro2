function activarValidaciones() {
	var txtFecha = new LiveValidation('txtFecha');
	txtFecha.add(Validate.Presence);
	var txtHora = new LiveValidation('txtHora');
	txtHora.add(Validate.Presence);
	var txaComentario = new LiveValidation('txaComentario');
	txaComentario.add(Validate.Presence);
}
