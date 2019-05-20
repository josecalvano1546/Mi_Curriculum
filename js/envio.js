// JavaScript Document
$(document).ready(function(){ 

	$(".formulario-contacto").bind("submit", function(){
		
		$.ajax({  
			type: $(this).attr("method"),
			url: $(this).attr("action"),
			data: $(this).serialize(), 
			success: function(){
				$("#alerta").removeClass("hide").addClass("alert-success");
				$(".respuesta").html("Enviado!");
				$(".mensaje-alerta").html(" El mensaje ah sido enviado correctamente.");
			},
			error: function(){
				$("#alerta").removeClass("hide").addClass("alert-danger");
				$(".respuesta").html("Error al enviar!");
				$(".mensaje-alerta").html(" No pudimos enviar tu mensaje, intenta nuevamente.");
			}
		});
		return false;
	});
});



