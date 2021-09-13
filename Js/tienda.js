

const carrito = []
const esmaltes = [
    $.get("../Data/data.json",function(data,estado){
        console.log(data)
        console.log(estado)
        if(estado == "success"){
            for(const prod of data){
                
                $("#sectionTienda").append(`
                    <div class="col-lg-3">
                        <div class="card card__efecto card__tienda">
                            <img src="${prod.imagen}" class="card-img-top"alt="">
                            <div class="card-body">
                                <p class="nombreEsmalte"> Esmalte ${prod.nombre}</p>
                                <h4> $${prod.precio}</h4>
                                <button id= "${prod.id}" class= "botonComprar" data-toggle="modal" data-target="#myModal" > COMPRAR </button>
                                <hr>
                            </div>
                        </div>
                    </div>    `);
};
            
        }
    })
];

 

function compraProducto(e) {
    e.preventDefault();

    const productoElegido = esmaltes.find(prod => prod.id == this.id);

    carrito.push(productoElegido)
    
    for (const prod of carrito){
        $(".modal-body").append(`<p class="carritoProd"> ${prod.nombre}</p> <h4>$${prod.precio}</h4> <br>`); 
    
    console.log(carrito)
   
}}
const botonesComprar = $(".botonComprar")
for(const boton of botonesComprar){
    boton.onclick(compraProducto);
}

//for (const boton of botonesComprar){
  //  boton.addEventListener("click", compraProducto)};

$(".botonFin").click(function(){
    alert("Gracias por comprar nuestros productos!")
    location.reload()
})

$(".ofertaDiv").animate({
    fontWeight: "bold",
    fontSize: "20px",
    opacity: 0.7,
    width: 500,

},2000).delay(6000).slideUp(1000)