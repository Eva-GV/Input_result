

"use strict"

// 1. CREAMOS EVENTO INPUT PARA QUE COJA LOS DATOS QUE VAMOS INTRODUCIENDO-----------------------------------------------

var nodoTextoIntroducido = document.querySelector("#textoIntroducido");
nodoTextoIntroducido.addEventListener("input",function(){

    // usamos trim() para quitar espacios al principio y al final
    let textoIntroducido_sinEspacios = nodoTextoIntroducido.value.trim();
    let patron = /\s{1,}/gi;
    let textoIntroducido_sinEspacio_= "";
    textoIntroducido_sinEspacio_= textoIntroducido_sinEspacios.replace(patron,'-');
    slug_.value=textoIntroducido_sinEspacio_.toLowerCase(); // esto es lo que vale el input slug_ le tengo que meter lo que vale la variable con todas las modificaciones
    caracteres.innerHTML =  cuentaCaracteres(textoIntroducido_sinEspacios)+ " " +"caractéres";    
    palabras.innerHTML = cuentaPalabras(textoIntroducido_sinEspacios)+" "+ "palabras";
});

/**
 * Contar los caracteres de un texto
 * @param texto - string
 */
// 2. FUNCIONES QUE VAN A CONTAR CARACTERES Y OTRA LAS PALABRAS, AMBAS LAS VAMOS A UTILIZAR EN DOS SITIOS DIFERENTES POR ESO LAS DEFINIMOS FUERA
function cuentaCaracteres(texto){

    return texto.length;
 }

function cuentaPalabras(texto){  
    let patronPalabra = /[\w]{1,}/;
    let replaceTexto = texto.replace(patronPalabra,"*")
    let splitPalabras = texto.split( patronPalabra );
    let numPalabras = splitPalabras.length -1;
    return numPalabras;
}

// 3. CREAMOS EVENTO INPUT EN EL TEXTAREA---------------------------------------------------------------------------------
var comentario_sinEspacios;
var nodoComentario = document.querySelector("#comentario");

nodoComentario.addEventListener("input", function(){ //Aunque sea un textarea es considerado como un input y lo coge igual
    comentario_sinEspacios = nodoComentario.value.trim();
    caracteres2.innerHTML = cuentaCaracteres(comentario_sinEspacios)+ " " +"caractéres"; 
    palabras2.innerHTML = cuentaPalabras(comentario_sinEspacios)+" "+ "palabras";
});


//3.1 EVENTO CLICK EN EL BOTON MAYÚSCULAS ----------------------------------------------------------------------------------
var nodobtnMayusculas = document.querySelector("#btnMayusculas");

nodobtnMayusculas.addEventListener("click", function(){
    let comentarioMayusculas = comentario_sinEspacios.toUpperCase();    
    nodoComentario.value = comentarioMayusculas;
    nodoComentario.innerHTML = comentarioMayusculas;
});

//3.2 CREAMOS EVENTO CLICK EN EL BOTÓN MINÚSCULAS ---------------------------------

var nodoBtnMinusculas = document.querySelector("#btnMinusculas");
nodoBtnMinusculas.addEventListener("click",function(){
    let comentarioMinusculas = comentario_sinEspacios.toLowerCase();
    nodoComentario.value = comentarioMinusculas;
    nodoComentario.innerHTML = comentarioMinusculas;


});







