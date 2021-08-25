function  logueoInicio(){
  var nombreLogueado = document.createElement("h3");
  var usuario = document.getElementsByName("Usuario")

  nombreLogueado.innerHTML = `<h6 class="loginIndex"> Usted ingresó a la pagina como: ${usuario} </h6>`;

  document.getElementById("logueo").appendChild(nombreLogueado);
  
    
}


const boton = document.getElementsByClassName("botonLogin");


for(const botonlog of boton){
  botonlog.addEventListener("click", logueoInicio);




}





