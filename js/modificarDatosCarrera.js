	function editarCampo(campo) {
		var elem = document.getElementById('frmCarrera').elements;
		for (var i=0; i<elem.length; i++) {
			if (elem[i].id == campo) {
				elem[i].readOnly = false;
			} else {	
				elem[i].readOnly = true;
			}
		}
	}
	
	function deseleccionarTodos() {
		var elem = document.getElementById('frmCarrera').elements;
		for (var i=0; i<elem.length; i++) {
				elem[i].readOnly = true;
			}
	}