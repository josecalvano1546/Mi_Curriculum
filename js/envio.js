// JavaScript Document
// Ajax para el envio de correo, en la opcion SALUDAME.
$(document).ready(function(){

	$(".formulario-contacto").bind("submit", function(){

		$.ajax({
			// Obtiene los elementos del formulario.
			type: $(this).attr("method"),
			url: $(this).attr("action"),
			data: $(this).serialize(),
			success: function(){
				//Alerta de exito, en el caso que el mensaje se haya enviado correctamente.
				$("#alerta").removeClass("hide").addClass("alert-success");
				$(".respuesta").html("Enviado!");
				$(".mensaje-alerta").html(" El mensaje ah sido enviado correctamente.");
		
				

			},
			error: function(){
				//Alerta de fallo en caso de que el mensaje no haya sido enviado correctamente.
				$("#alerta").removeClass("hide").addClass("alert-danger");
				$(".respuesta").html("Error al enviar!");
				$(".mensaje-alerta").html(" No pudimos enviar tu mensaje, intenta nuevamente.");
				
				
			}
			
			

		});
		
		
		return false;
		
	
		
	});
	


});

	


