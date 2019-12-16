import { nota } from "./Note.js";

var notes = new Array();
var note = "";

/*Aqui lo que hago es  crear para la visa el boton y posteriormente despues de que este se clique
creao el objeto nota y despues lo ñado a la vista*/

function crearObjetos() {
    /*CON ESTO CREAMOS UN BOTON Y CON ESTE BOTON CREAREMOS LAS "NOTAS"*/
    var boton = document.createElement("BUTTON");
    boton.innerHTML = "CREAR NOTA";
    boton.addEventListener("click", function () { crearNotas() });
    boton.setAttribute("width", 200 + "px");
    document.getElementsByTagName("main")[0].appendChild(boton);
    /* BOTON QUE CAMBIA LA VISTA */
    var boton = document.createElement("BUTTON");
    boton.innerHTML = "CAMBIAR VISTA";
    boton.addEventListener("click", function () { cambiarVista() });
    boton.setAttribute("width", 200 + "px");
    document.getElementsByTagName("main")[0].appendChild(boton);
    /*BOTON QUE VUELVE A LA VISTA ORIGRN */
    var boton = document.createElement("BUTTON");
    boton.innerHTML = "VOLVER A VISTA ORIGINAL";
    boton.addEventListener("click", function () { cambiarVistaOriginal() });
    boton.setAttribute("width", 200 + "px");
    document.getElementsByTagName("main")[0].appendChild(boton);
}

function crearNotas() {
    /* En esta funcion recogo el dato a traves de un prompt, para posteriormente crear dicha nota nota con un color u otro
    en funcion de la importancia de esta y los añado a un array de notas*/
    var estado = prompt("Importancia de la nota(Tres opciones: importante , medioImportante , noImportante)");
    switch (estado) {
        case "importante": note = new nota(200, 300, "red", "important"); notes.push(note); añadirNota(note, "red"); break;
        case "medioImportante": note = new nota(200, 300, "orange", "medioImportant"); notes.push(note); añadirNota(note, "orange"); break;
        case "noImportante": note = new nota(200, 300, "lightgreen", "noImportant"); notes.push(note); añadirNota(note, "lightgreen"); break;
        default: note = new nota(200, 300, "grey", "nulo"); notes.push(note); añadirNota(note, "grey");
    }
}


/*Con este método añadimos a la vista las notas
En esta funcion le paso el objeto nota creado anteriormente
para posteriormente obtener su ancho  y su altura*/
function añadirNota(nota, color) {
    var cont = document.createElement("div");
    var stick = document.getElementsByTagName("main")[0];
    var not = document.createElement("textArea");
    not.style.backgroundColor = color;
    not.setAttribute("width", nota.w);
    not.setAttribute("heigth", nota.h);
    stick.appendChild(not);
    console.log(not);
}

/*En esta funcion compruebo el estado de los elementos del array en en caso de se important o medioimportant,noImportant, nulo cambio 
el color del textArea de la vista y se lo cambio el color a dicho elemento del array */
function cambiarVista() {
    for (var i = 0; i < notes.length; i++) {
        if (notes[i].estado == "important") {
            document.getElementsByTagName("textArea")[i].style.backgroundColor = "#AA0000 ";
            notes[i].color = "#AA0000 ";
        } else if (notes[i].estado == "medioImportant") {
            document.getElementsByTagName("textArea")[i].style.backgroundColor = "#EAEA04";
            notes[i].color = "#EAEA04";
        } else if (notes[i].estado == "noImportant") {
            document.getElementsByTagName("textArea")[i].style.backgroundColor = "#1B888B";
            notes[i].color = "#1B888B";
        } else if (notes[i].estado == "nulo") {
            document.getElementsByTagName("textArea")[i].style.backgroundColor = "#FFFFFF";
            notes[i].color = "#FFFFFF";
        }
    }
}


function cambiarVistaOriginal(){
    for (var i = 0; i < notes.length; i++) {
        if (notes[i].estado == "important") {
            document.getElementsByTagName("textArea")[i].style.backgroundColor = "red ";
            notes[i].color = "red";
        } else if (notes[i].estado == "medioImportant") {
            document.getElementsByTagName("textArea")[i].style.backgroundColor = "orange";
            notes[i].color = "orange";
        } else if (notes[i].estado == "noImportant") {
            document.getElementsByTagName("textArea")[i].style.backgroundColor = "lightgreen";
            notes[i].color = "lightgreen";
        } else if (notes[i].estado == "nulo") {
            document.getElementsByTagName("textArea")[i].style.backgroundColor = "grey";
            notes[i].color = "grey";
        }
    }
}

crearObjetos();

/*Métodos localStorage (stringfy y parse)*/

/*jpineroberbel@gmail.com*/
