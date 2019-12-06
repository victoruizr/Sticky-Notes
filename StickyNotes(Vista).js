import { Main } from "./Main.js";

import { nota } from "./Note.js";


/*Aqui lo que hago es  crear para la visa el boton y posteriormente despues de que este se clique
creao el objeto nota y despues lo ñado a la vista*/

function crearObjetos(){
    /*CON ESTO CREAMOS UN BOTON Y CON ESTE BOTON CREAREMOS LAS "NOTAS"*/
    var boton =document.createElement("BUTTON");
    boton.innerHTML="CREAR NOTA";
    boton.addEventListener("click",function(){crearNotas()});
    boton.setAttribute("width",200+"px");
    document.getElementById("notes").appendChild(boton);
}


function crearNotas(){
    var note = new nota(200,300,"red");
    var stick=document.getElementById("notes");
    var not=document.createElement("textArea");
    not.setAttribute("width",note.w);
    not.setAttribute("heigth",note.w);
    not.style.backgroundColor="red";
    stick.appendChild(not);

}


crearObjetos();

/*Métodos localStorage (stringfy y parse)*/

/*jpineroberbel@gmail.com*/
