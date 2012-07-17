	function editarCampo(campo) {
		var elem = document.getElementById('frmAgregarUsuario').elements;
		for (var i=0; i<elem.length; i++) {
			if (elem[i].id == campo) {
				elem[i].readOnly = false;
			} else {	
				elem[i].readOnly = true;
			}
		}
	}
	
	function deseleccionarTodos() {
		var elem = document.getElementById('frmAgregarUsuario').elements;
		for (var i=0; i<elem.length; i++) {
				elem[i].readOnly = true;
			}
	}

	function validatePass(campo) {
    var RegExPattern = /(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{8,10})$/;
    var errorMessage = 'Password Incorrecta.';
    if ((campo.value.match(RegExPattern)) && (campo.value!='')) {
        alert('Password Correcta'); 
    } else {
        alert(errorMessage);
        campo.focus();
    } 
}