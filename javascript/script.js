const botonEncriptar = document.getElementById("texto__botones--encriptar");
const botonDesencriptar = document.getElementById("texto__botones--desencriptar");
const mostrarTexto = document.getElementById("mensaje__mostrar");
const botonCopiar = document.getElementById("mensaje__botonCopiar");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiar;


function encriptar(){
    oculatarObjetos();
    mostrarObjeto();
    mostrarTexto.textContent = encriptarTexto(recuperarTexto());
}

function desencriptar(){
    oculatarObjetos();
    mostrarObjeto();
    mostrarTexto.textContent = desencriptarTexto(recuperarTexto());
}

function recuperarTexto(){
    var textArea = document.getElementById("texto__encriptar");
    return textArea.value;
}


function oculatarObjetos() {
    document.getElementById("mensaje__muneco").style.display="none";
    document.getElementById("mensaje__titulo").style.display="none";
    document.getElementById("mensaje__parrafo").style.display="none";
}

function mostrarObjeto(){
    document.getElementById('mensaje__mostrar').style.display='block';
    document.getElementById('mensaje__botonCopiar').style.display='block';
}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai";
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter";
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes";
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober";
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat";
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}


function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a";
            i = i + 1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e";
            i = i + 4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i";
            i = i + 3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o";
            i = i + 3;
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u";
            i = i + 3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}


function copiar(){
    var copiarTexto = document.getElementById("mensaje__mostrar");
    copiarTexto.select();
    navigator.clipboard.writeText(copiarTexto.value);
    alert("copió el texto: "+ copiarTexto.value);
}