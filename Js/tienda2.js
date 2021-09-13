// Variables globales
const esmaltes = [];
const carrito = []
​
​
// Interfaz esmaltes
function esmaltesIU(esmaltes, id) {
	$(id).empty()
	for(const prod of esmaltes){
			$(id).append(`
							<div class="col-lg-3">
									<div class="card card__efecto card__tienda">
											<img src="${prod.imagen}" class="card-img-top"alt="">
											<div class="card-body">
													<p class="nombreEsmalte"> Esmalte ${prod.nombre}</p>
													<h4> $${prod.precio}</h4>
													<button id= "${prod.id}" class="botonComprar" data-toggle="modal" data-target="#myModal"> COMPRAR </button>
													<hr>
											</div>
									</div>
							</div>    `);
	};
}
​
// Manejador de compras
function compraProducto(e) {
	// previene actualizar pagina al presionar enlaces
	e.preventDefault();
​
	// obtiene id del boton presionado
	const idProducto   = e.target.id;
​
	// obtiene objeto del producto correspondiente al id
	const productoElegido = esmaltes.find(prod => prod.id == idProducto);
	carrito.push(productoElegido)
​
	// genera salida del producto
	carritoUI(carrito);
​
	console.log(carrito);
}
​
// funcion para renderizar la interfaz del carrito
function carritoUI(esmaltes){
	// vacia el interior del cuerpo del carrito 
	$(".modal-body").empty();
	 for (const prod of esmaltes){
				$(".modal-body").append(`<p> ${prod.nombre}</p> <h4>$${prod.precio}</h4> <br>`); 
		}
}
​
​
// Declaracion de clase Productos
class Productos{
	constructor(id, nombre, precio, imagen, cantidad){
	this.id = parseInt(id)
	this.nombre = nombre;
	this.precio = parseFloat(precio);
	this.imagen = imagen;
	}
}
​
// Instanciar objetos
esmaltes.push(new Productos(1, "Top coat Matte",700, "../Assets/Images/topcoatmate.jpeg" ));
esmaltes.push(new Productos(2, "Milky Way",200,"../Assets/Images/milkyway.jpeg"));
esmaltes.push(new Productos(3, "Blanco French",500,"../Assets/Images/blancofrench.jpeg"));
esmaltes.push(new Productos(4, "Pink Satin",500,"../Assets/Images/pinksatin.jpeg"));
esmaltes.push(new Productos(5, "Ballerina",300,"../Assets/Images/ballerina.jpeg" ));
esmaltes.push(new Productos(6, "Champagne Rose",500,"../Assets/Images/champagnerose.jpeg" ));
esmaltes.push(new Productos(7, "Nude Dreams",600,"../Assets/Images/nudedreams.jpeg" ));
esmaltes.push(new Productos(8, "Missandei",500,"../Assets/Images/missandei.jpeg" ));
esmaltes.push(new Productos(9, "Smokey Plum",200,"../Assets/Images/smokeyplum.jpeg" ));
esmaltes.push(new Productos(10, "Lilac",300,"../Assets/Images/lilac.jpeg"));
esmaltes.push(new Productos(11, "Flamingo", 400,"../Assets/Images/flamingo.jpeg" ));
esmaltes.push(new Productos(12, "Scarlet Red",500,"../Assets/Images/scarletred.jpeg" ));
esmaltes.push(new Productos(13, "Red Flower",500,"../Assets/Images/redflower.jpeg" ));
esmaltes.push(new Productos(14, "Bloody Mary",500,"../Assets/Images/bloodymary.jpeg" ));
esmaltes.push(new Productos(15, "Blue Storm",600,"../Assets/Images/bluestorm.jpeg" ));
esmaltes.push(new Productos(16, "Electric Sky", 400,"../Assets/Images/electricsky.jpeg" ));
esmaltes.push(new Productos(17, "Deep Sky", 400,"../Assets/Images/deepsky.jpeg")); 
esmaltes.push(new Productos(18, "Absolut Sky",500,"../Assets/Images/absolutsky.jpeg" )); 
esmaltes.push(new Productos(19, "Carnival",500,"../Assets/Images/carnival.jpeg" )); 
esmaltes.push(new Productos(20, "Slytherin", 200,"../Assets/Images/slytherin.jpeg" )); 
esmaltes.push(new Productos(21, "Mandalay Sand",500,"../Assets/Images/mandalaysand.jpeg" )); 
esmaltes.push(new Productos(22,"Black",400,"../Assets/Images/black.jpeg" )); 
​
​
// console.log(esmaltes)
​
// Generamos interfaz de esmaltes
esmaltesIU(esmaltes, "#sectionTienda");
​
​
​
// Dispara boton comprar
// const botonesComprar = $(".botonComprar")
// for (const boton of botonesComprar){
// 	boton.addEventListener("click", compraProducto)
// };
​
let botonesComprar = $(".botonComprar");
for (const boton of botonesComprar) {
    boton.onclick = compraProducto;
}
​
​
​
// $(".botonFin").click(function(){
// 	alert("Gracias por comprar nuestros productos!")
// 	location.reload()
// })