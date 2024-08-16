let texto;
let nuevoTexto;

function encriptar(){
    texto = document.querySelector('.text-encryption__input').value;
    if(texto ==="") {
        document.getElementById("message-notFind").hidden = false;
        document.getElementById("message").hidden = true;
        return;
    }
    nuevoTexto = texto.toLowerCase()
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    mostrarResultado(nuevoTexto);
    return;
}
function desencriptar(){
    texto = document.querySelector('.text-encryption__input').value;
    if(texto ==="") {
        document.getElementById("message-notFind").hidden = false;
        document.getElementById("message").hidden = true;
        return;
    }
    nuevoTexto = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
        mostrarResultado(nuevoTexto);
    return;
}
function copiarTexto(){
    const texto = document.getElementById("message__text").value;
    navigator.clipboard.writeText(texto).then(() => {
        console.log("Texto copiado al portapapeles");
    }).catch(err => {
        console.error("Error al copiar el texto: ", err);
    });
}

function mostrarResultado(texto){
    document.getElementById("message__text").innerHTML = texto;
    document.getElementById("message-notFind").hidden = true;
    document.getElementById("message").hidden = false;
}
