const nombres = []
const mails = []
const asuntos = []
const mensajes = []


nombres.push(document.getElementById("nombres"));
nombres.push(document.getElementById("mail"));
nombres.push(document.getElementById("asuntos"));
nombres.push(document.getElementById("mensajes"));

const botonEnviar = document.getElementsByClassName("boton__formulario");

function funcionFormulario(){
    
    alert("El formulario ha sido enviado con exito")
    
}

for(const boton of botonEnviar){
    boton.addEventListener("click", funcionFormulario);
}

