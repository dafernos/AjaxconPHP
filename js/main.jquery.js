{
	$(document).ready(function() {
		let $inputNombres = $("#inputNombres");
		let $companeros = $("#companeros");
		
		$inputNombres.on('keyup',function(){
			let nombre = "?nombres="+encodeURIComponent($inputNombres.val());
			$.ajax({
				url: "companeros.php"+nombre,
				success:function(data){
					$companeros.html(data);
				}
			});
		});
	});
}