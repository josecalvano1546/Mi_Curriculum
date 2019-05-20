// JavaScript


// Animacion del scroll lento
$(document).ready(function(){

  // Add smooth scrolling to all links in navbar + footer link

  $(".navbar a, footer a[href='#inicio'], div a[href='#sobremi']").on('click', function(event) {



    // Prevent default anchor click behavior

    event.preventDefault();



    // Store hash

    var hash = this.hash;



    // Using jQuery's animate() method to add smooth page scroll

    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area

    $('html, body').animate({

      scrollTop: $(hash).offset().top

    }, 900, function(){

   

      // Add hash (#) to URL when done scrolling (default click behavior)

      window.location.hash = hash;

    });

  });

  

  // Animacion de elementos de la pagina Aparicion de abajo hacia arriba con deslizamiento lento

  $(window).scroll(function() {

    $(".slideanim").each(function(){

      var pos = $(this).offset().top;



      var winTop = $(window).scrollTop();

        if (pos < winTop + 600) {

          $(this).addClass("slide");

        }

    });

  });

})
// Fin de Animacion de elementos de la pagina Aparicion de abajo hacia arriba con deslizamiento lento



// Animacion de tipeo
	var i,text;
i=0;
text=" Hola mundo soy José Calvano ";
function tipeo(){
	if(i<text.length){
		document.getElementById("inicio2").innerHTML+= text.charAt(i);
		i++;
		setTimeout(tipeo,100); //Aca le cambiamos la velocidad de tipeo. 
	}
}

tipeo(); //Llamamos a la funcion. 



