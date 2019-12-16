export class nota {
    /*En el constructor paso el año, la altura, el color de la nota y el estado de la nota(importante, medioImportante, noImportante) */
    constructor(w, h, color, estado) {
        this.w = w;
        this.h = h;
        this.color = color;
        this.estado = estado;
    }

    /* Clase para gestionar el movimiento de cualquier elemento
    moverNota(div) {
        // Estas variables obtienen la diferencia en pixels entre el punto del raton
        // pulsado dentro del div y el top y left del elemento. Es para que cuando 
        // realizemos el movimiento, el cursor del raton siempre este en la misma
        // posición dentro del div que mueve.
        this.difX = 0;
        this.difY = 0;

        // Creamos el evento en el div para controlar la pulsación sobre el elemento
        // cuando se pulsa sobre el elemento se ejecuta la funcion inicio()
        div.addEventListener('mousedown', inicio, false);
    }

    // Iniciamos el arrastre
    inicio(e){
        // Obtenemos la posición del raton
		this.eX=e.pageX;
		this.eY=e.pageY;
		// Obtenemos los valores de la posicion left y top del elemento
		this.oX=parseInt(div.style.left);
		this.oY=parseInt(div.style.top);
		// Calculamos la diferencia entre la posicion del div con la del raton.
		this.difX=this.oX-this.eX;
		this.difY=this.oY-this.eY;
 
		// Cremos los eventos mousemove y mouseup
		document.addEventListener('mousemove',mover,false);
		document.addEventListener('mouseup',soltar,false);
    }

    // Movemos el elemento por la pantalla cada vez que se mueve el cursor
    mover(e){
        this.tY=e.pageY+this.difY+'px';
		this.tX=e.pageX+this.difX+'px'
		div.style.top=this.tY;
		div.style.left=this.tX;
    }

    // Funcion que se ejecuta el botón del ratón
    soltar(e){
        // Eliminamos los eventos creados en la funcion inicio
        document.removeEventListener('mousemove',mover,false);
		document.removeEventListener('mouseup',soltar,false);
    }

    // Inicializamos el movimiento del div con id "arrastrar"
    //var recu1=new movimiento(document.getElementById("arrastrar"));*/

}