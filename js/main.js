{
	let xhr;
	let companeros
	let init = function () {
		companeros = document.getElementById('companeros');
		document.getElementById('inputNombres').addEventListener('keyup',cargaContenido);
	}

	let cargaContenido=function() {
		companeros.innerHTML = "";
		xhr = new XMLHttpRequest();
		xhr.onreadystatechange = muestraContenido;
		let nombre = "?nombres="+encodeURIComponent(document.getElementById('inputNombres').value);
		xhr.open('GET', 'companeros.php'+nombre, true);
		xhr.send(null);
	}
	
	// Función de respuesta
	let muestraContenido = function() {
		if(xhr.readyState == 4 && xhr.status == 200) {
			companeros.innerHTML += xhr.responseText ;
		}
	}
	
	window.addEventListener('load',init);
}