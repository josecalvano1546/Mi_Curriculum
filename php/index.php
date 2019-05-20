<?php 

//Tomar los campos del formulario.

$nombre = $_POST['name'];
$email = $_POST['email'];
$comentario = $_POST['comments'];

// Datos para el correo

$destinatario = "josecalvano1546@gmail.com";
$asunto = "Contacto desde la pagina curriculum";

$carta = "De: $nombre \n";
$carta .= "Correo: $email \n";
$carta .= "Mensaje: $comentario \n";

// enviando mensaje
mail($destinatario, $asunto, $carta);

return print(json_decode('ok'));

?>
