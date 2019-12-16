export class nota {
    /*En el constructor paso el año, la altura, el color de la nota y el estado de la nota(importante, medioImportante, noImportante) */
    constructor(w, h, color, estado) {
        this.w = w;
        this.h = h;
        this.color = color;
        this.estado = estado;
    }

    moverNota(div) {
        // Estas variables obtienen la diferencia en pixels entre el punto del raton
        // pulsado dentro del div y el top y left del elemento. Es para que cuando 
        // realizemos el movimiento, el cursor del raton siempre este en la misma
        // posición dentro del div que mueve.
        difX = 0;
        difY = 0;

        // Creamos el evento en el div para controlar la pulsación sobre el elemento
        // cuando se pulsa sobre el elemento se ejecuta la funcion inicio()
        div.addEventListener('mousedown', inicio, false);
    }

    // Iniciamos el arrastre
    inicio(e){
        // Obtenemos la posición del raton
		var eX=e.pageX;
		var eY=e.pageY;
		// Obtenemos los valores de la posicion left y top del elemento
		var oX=parseInt(div.style.left);
		var oY=parseInt(div.style.top);
		// Calculamos la diferencia entre la posicion del div con la del raton.
		difX=oX-eX;
		difY=oY-eY;
 
		// Cremos los eventos mousemove y mouseup
		document.addEventListener('mousemove',mover,false);
		document.addEventListener('mouseup',soltar,false);
    }

    // Movemos el elemento por la pantalla cada vez que se mueve el cursor
    mover(e){
        var tY=e.pageY+difY+'px';
		var tX=e.pageX+difX+'px'
		div.style.top=tY;
		div.style.left=tX;
    }

    // Funcion que se ejecuta el botón del ratón
    soltar(e){
        // Eliminamos los eventos creados en la funcion inicio
        document.removeEventListener('mousemove',mover,false);
		document.removeEventListener('mouseup',soltar,false);
    }

    // Inicializamos el movimiento del div con id "arrastrar"
    //var recu1=new movimiento(document.getElementById("arrastrar"));

}