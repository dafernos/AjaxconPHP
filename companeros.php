<?php
$companeros = array(
	'Guillermo Boquizo ',
	'Nieves Borrero',
	'Victoriano Sevillano',
	'Javier Ponferrada',
	'Rafael Mellado',
	'Rafael Carmona',
	'Daniel Gestino',
	'Jorge Granados',
	'Jesús Requena',
	'Darío Fernández'
	);

$existe='';
if(isset($_GET["nombres"]) && $_GET["nombres"]!=''):
	foreach ($companeros as $companero):
		if(stristr($companero,$_GET["nombres"])):
			$existe .= "<li>".$companero."</li>";
		endif;
	endforeach;
endif;

if ($existe==''):
	echo "No hay coincidencias";
else: 
	echo $existe;
endif;
?>