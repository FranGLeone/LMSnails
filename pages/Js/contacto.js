

//const botonEnviar = document.getElementsByClassName("boton__formulario");





//for(const boton of botonEnviar){
 //   boton.addEventListener("click", console.log("hola"));}


//$(".boton__formulario").click((e) =>{
  //  validarFormulario();
//})  

let nombre = 0

$(document).ready(() => {
    $(".error").hide();
    $("#miForm").submit(function (e) {
        e.preventDefault();
        let nombre = $("#nombres").val();

        if (nombre.length < 3) {
            $(".error").show();
            return;
            




        }
        $(".error").hide();
        $("#resultado").text(`Su nombre es: ${nombre}`)
        e.default()

    });
})






