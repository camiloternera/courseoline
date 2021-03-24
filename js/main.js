// console.log('funcionando');
(function() {
  'use strict';
  addEventListener("DOMContentLoaded", () => {

    /* Utilizando libreria TYPED.JS
      https://github.com/mattboldt/typed.js/
    */
   function indexAnimatonText() {
     if (document.getElementById('text')) {
      const typed = new Typed(".typed", {
        // strings: [
        //   "Capacitate con nosotros",
        //   "Da el primer paso para cumplir tus sueños",
        // ],
        stringsElement: "#text", // ID del elemento que contiene cadenas de texto a mostrar.
        typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
        startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
        backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
        smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
        shuffle: false, // Alterar el orden en el que escribe las palabras.
        backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
        loop: true, // Repetir el array de strings
        loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
        showCursor: true, // Mostrar cursor palpitanto
        cursorChar: "|", // Caracter para el cursor
        contentType: "html" // 'html' o 'null' para texto sin formato
      });
    }
   }
   indexAnimatonText();

    // ReadMore & ReadLess
    function readMoreReadLess () {
      let i = 0;
      let buttonRead = document.getElementById('buttonRead');
      let styleReadParrafo = document.getElementById('read');
      if (buttonRead) {
        buttonRead.addEventListener('click' , function(){
          if (!i) {
            styleReadParrafo.style.display = 'inline';
            document.getElementById('buttonRead').innerHTML = 'Leer menos...';
            i = 1;
          } else {
            styleReadParrafo.style.display = 'none';
            document.getElementById('buttonRead').innerHTML = 'Leer más...';
            i = 0;
          }
        });
      }
    }
    readMoreReadLess();

    /****** JQuery ******/
    // Menu Responsive
		$('.navegation__mobile').on('click', function() {
      $('.navegation__main').slideToggle();
      $('.navegation__main').attr('style', 'display:block'); // Linea para que la navegacion se display block
    });
    // Reaccionar a Resize en la pantalla
    let breakpoint = 768;
		$(window).resize(function() {
			if ($(document).width() >= breakpoint) {
        $('.navegation__main').show();
        $('.navegation__main').attr('style', 'display:flex'); // Linea para que la navegacion se display flex despues de 768px
			} else {
        $('.navegation__main').hide();
			}
    });
  });
})();
