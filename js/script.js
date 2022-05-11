// Funciones
let input = document.getElementById('text-area-1');

function configuraPlaceHolder() {
    input.placeholder = "Ingrese texto aqui";
}
// Borra el valor del input
function borraInput() {
    input.value = " ";
}
// Encripta el texto
const encriptar = () => {

    let textoRecibido = document.getElementById('text-area-1').value;

    let encriptarString = textoRecibido.toLowerCase().split("");


    for (let i = 0; i <= encriptarString.length; i++) {

        if (encriptarString[i] == 'e') {

            encriptarString[i] = encriptarString[i].replace('e', 'enter');

        }
        if (encriptarString[i] == 'i') {

            encriptarString[i] = encriptarString[i].replace('i', 'imes');

        }
        if (encriptarString[i] == 'a') {

            encriptarString[i] = encriptarString[i].replace('a', 'ai');

        }
        if (encriptarString[i] == 'o') {

            encriptarString[i] = encriptarString[i].replace('o', 'ober');

        }
        if (encriptarString[i] == 'u') {

            encriptarString[i] = encriptarString[i].replace('u', 'ufat');

        }

    }


    // Une el mensaje de nuevo
    let stringEncriptado = encriptarString.join('');

    // Ocultar div del muñeco y los mensajes
    document.getElementById('divMuneco').classList.add('ocultarDiv');
    document.getElementById('mensajes').classList.add('ocultarDiv');


    // Hacer visible div del textarea encriptado
    document.getElementById('divTextArea').classList.remove('ocultarDiv');
    document.getElementById('divButtonCopiar').classList.remove('ocultarDiv');

    // Agrega el texto encriptado al text area 
    document.getElementById('muestra-texto').innerHTML = stringEncriptado;

    // Muestra el mensaje de encriptado en la primer text area
    document.getElementById('text-area-1').innerHTML = ' ';

    borraInput();

}

// Desencriptar el texto 
const desencriptar = () => {

    // Seleccionar el texto de la caje de encriptado
    let textoEncriptado = document.getElementById('muestra-texto').value.toLowerCase();
    let textoDesencriptado = textoEncriptado;
    const enter = 'enter',
        imes = 'imes',
        ai = 'ai',
        ober = 'ober',
        ufat = 'ufat';

    if (textoDesencriptado.includes(enter)) {
        for (let i = 0; i <= textoDesencriptado.length; i++) {
            textoDesencriptado = textoDesencriptado.replace('enter', 'e');
        }
    }
    if (textoDesencriptado.includes(imes)) {
        for (let i = 0; i <= textoDesencriptado.length; i++) {
            textoDesencriptado = textoDesencriptado.replace('imes', 'i');
        }
    }
    if (textoDesencriptado.includes(ai)) {
        for (let i = 0; i <= textoDesencriptado.length; i++) {
            textoDesencriptado = textoDesencriptado.replace('ai', 'a');
        }
    }
    if (textoDesencriptado.includes(ober)) {
        for (let i = 0; i <= textoDesencriptado.length; i++) {
            textoDesencriptado = textoDesencriptado.replace('ober', 'o');
        }
    }
    if (textoDesencriptado.includes(ufat)) {
        for (let i = 0; i <= textoDesencriptado.length; i++) {
            textoDesencriptado = textoDesencriptado.replace('ufat', 'u');
        }
    }


    // Hacer visible div del muñeco
    document.getElementById('divMuneco').classList.remove('ocultarDiv');
    // Hacer visible div de los mensajes
    document.getElementById('mensajes').classList.remove('ocultarDiv');
    // Ocultar div del text area encriptado y del boton copiar
    document.getElementById('divTextArea').classList.add('ocultarDiv');
    document.getElementById('divButtonCopiar').classList.add('ocultarDiv');

    document.getElementById('text-area-1').value = textoDesencriptado;
}

// Funcionalidad de copiar al portapapeles
function copiarAlPortapapeles() {
    let contenido = document.getElementById('muestra-texto');

    contenido.select();
    document.execCommand('copy');
}

document.addEventListener('DOMContentLoaded', configuraPlaceHolder());