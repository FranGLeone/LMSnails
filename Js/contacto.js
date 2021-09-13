

//const botonEnviar = document.getElementsByClassName("boton__formulario");





//for(const boton of botonEnviar){
 //   boton.addEventListener("click", console.log("hola"));}


//$(".boton__formulario").click((e) =>{
  //  validarFormulario();
//})  



let nombre = "";

$(document).ready(() => {
  $(".error").hide();
  $("#miForm").submit(function (e) {
    e.preventDefault();
    let nombre = $("#name").val();
    

    if (nombre.length < 3) {
      $(".error").fadeIn(2000).delay(5000).fadeOut(2000)
      return;
     
    }
    $(".error").hide();
    
    alert("Formulario enviado con exito!")
    this.submit()
      
    
  });
});


const correos = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/






