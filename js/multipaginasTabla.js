function irAPrimera() {
	var pageInfo = document.getElementById('pageInfo');
	var pageNumber = document.getElementById('pageNumber');
	var stepFirst = document.getElementById('stepFirst');
	var stepBackward = document.getElementById('stepBackward');
	var stepForward = document.getElementById('stepForward');
	var stepLast = document.getElementById('stepLast');
	stepFirst.style.visibility = 'hidden';
	stepBackward.style.visibility = 'hidden';
	stepForward.style.visibility = 'visible';
	stepLast.style.visibility = 'visible';
	pageNumber.innerHTML = 'P&aacute;gina 1 de 2';
	pageInfo.innerHTML = 'Mostrando 1-15 de 30 filas';
}

function irDelante() {
	var pageInfo = document.getElementById('pageInfo');
	var pageNumber = document.getElementById('pageNumber');
	var stepFirst = document.getElementById('stepFirst');
	var stepBackward = document.getElementById('stepBackward');
	var stepForward = document.getElementById('stepForward');
	var stepLast = document.getElementById('stepLast');
	stepFirst.style.visibility = 'visible';
	stepBackward.style.visibility = 'visible';
	stepForward.style.visibility = 'hidden';
	stepLast.style.visibility = 'hidden';
	pageNumber.innerHTML = 'P&aacute;gina 2 de 2';
	pageInfo.innerHTML = 'Mostrando 16-30 de 30 filas';

}