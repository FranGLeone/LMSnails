const tienda = document.getElementById("sectionTienda")
const itemsCarrito = document.getElementById("items")
const totalCarrito = document.getElementById("total")
const card = document.getElementById("template-card").content
const tempTotal = document.getElementById("template-total").content
const tempCarrito = document.getElementById("template-carrito").content
const fragment = document.createDocumentFragment()
const numeroDeItems = document.getElementById("numeroDeItems")
let carrito = {}

document.addEventListener('DOMContentLoaded',()=>{
	fetchData();
	if (localStorage.getItem("carrito")) {
		carrito = JSON.parse(localStorage.getItem("carrito"))
		mostrarCarrito()
	}
})

$("#sectionTienda").click(e =>{
	addCarrito(e)
  })


$("#items").click(e =>{
	btnSumaresta(e)   //funcion hecha en la linea de codigo 114
})
  

const fetchData = async() => {
	try{
		const respuesta = await fetch("../Data/data.json") //cargamos los datos
		const datos = await respuesta.json()   

		esmaltesTienda(datos)
		}
	catch(error){
		console.log(error)
	}
}

const esmaltesTienda = datos =>{
	datos.forEach(esmalte =>{
		card.querySelector(".nombreEsmalte").textContent = esmalte.nombre //le pasamos lo que va a ir en cada parte del template
		card.querySelector("span").textContent = esmalte.precio
		card.querySelector("img").setAttribute("src", esmalte.imagen)
		card.querySelector(".botonComprar").dataset.id = esmalte.id

		const copiarCard = card.cloneNode(true)  //las clonamos
		fragment.appendChild(copiarCard)

	})
	tienda.appendChild(fragment)
}

const addCarrito = e =>{
	if(e.target.classList.contains("botonComprar")){
	  defCarrito(e.target.parentElement)  //agregamos al carrito el cuerpo de la card cada vez que se toca el boton comprar
	}
	e.stopPropagation()
  }

const defCarrito = obj =>{
	const producto = {
		id:  obj.querySelector(".botonComprar").dataset.id,
		nombre:  obj.querySelector(".nombreEsmalte").textContent,
		precio:  obj.querySelector("span").textContent,
		cantidad: 1
		
	}
	if(carrito.hasOwnProperty(producto.id)){  
		producto.cantidad = carrito[producto.id].cantidad + 1 //para sumar las cantidades
	}
	carrito[producto.id] = {...producto}
	mostrarCarrito()
	
}

const mostrarCarrito = () =>{  //para pintar el carrito en el html
	itemsCarrito.innerHTML = ''
	Object.values(carrito).forEach(prod =>{
		tempCarrito.querySelector("th").textContent = prod.id
		tempCarrito.querySelectorAll("td")[0].textContent = prod.nombre
		tempCarrito.querySelectorAll("td")[1].textContent = prod.cantidad
		tempCarrito.querySelector(".btn-info").dataset.id = prod.id
		tempCarrito.querySelector(".btn-danger").dataset.id = prod.id
		tempCarrito.querySelector("span").textContent = prod.cantidad * prod.precio

		const copiarItem = tempCarrito.cloneNode(true)
		fragment.appendChild(copiarItem)
	})
	itemsCarrito.appendChild(fragment)
	
	mostrarTotalcarrito()
	localStorage.setItem("carrito",JSON.stringify(carrito))
}

const mostrarTotalcarrito = () =>{  //para mostrar el total de los productos seleccionados
	totalCarrito.innerHTML = ''
	if(Object.keys(carrito).length === 0){
		totalCarrito.innerHTML = `<th scope="row" colspan="5">¡El carrito se encuentra vacio!</th>`
		return
	}

	const tCantidad = Object.values(carrito).reduce((acum,{cantidad} )=> acum + cantidad,0)  //acumulamos las cantidades en una cantidad total y los precios en un precio total
	const tPrecio = Object.values(carrito).reduce((acum,{cantidad,precio} )=> acum + cantidad * precio,0)

	tempTotal.querySelectorAll("td")[0].textContent = tCantidad
	tempTotal.querySelector("span").textContent = tPrecio
	numeroDeItems.querySelector("p").textContent = tCantidad



	const copiarTotal = tempTotal.cloneNode(true)
	fragment.appendChild(copiarTotal)
	totalCarrito.appendChild(fragment)
	

	$("#vaciar-carrito").click( ()=>{  //para que el boton vaciar carrito funcione
		carrito = {}
		mostrarCarrito()
		numeroDeItems.querySelector("p").textContent = 0
	})
}

const btnSumaresta = e =>{  // hace que los botones de suma y resta funcionen
	if(e.target.classList.contains("suma")){
		const product = carrito[e.target.dataset.id]
		product.cantidad = carrito[e.target.dataset.id].cantidad + 1
		carrito[e.target.dataset.id] = {...product}
		mostrarCarrito()
	}
	if(e.target.classList.contains("resta")){
		const product = carrito[e.target.dataset.id]
		product.cantidad = carrito[e.target.dataset.id].cantidad - 1
		if(product.cantidad === 0){
			delete carrito[e.target.dataset.id] //para cuando un producto tiene cantidad "1", al tocar el boton de resta se elimina del carrito
			numeroDeItems.querySelector("p").textContent = 0
		}
		mostrarCarrito()
		}
}

$(".logoCarrito").click(() =>{
	$(".modalCarrito").modal();
})

$(".botonFinalizarcompra").click(() =>{
	if(Object.keys(carrito).length >= 1){
		$(".modalCarrito").hide();
		$(".modalConfirmacion").modal();
		carrito = {}
		mostrarCarrito()
		numeroDeItems.querySelector("p").textContent = 0
		$("#formCarrito").submit(function (e) {
			e.preventDefault();
			$(".modalConfirmacion").hide();
			$(".modalConfirmacion2").modal();
			})
		return
	}
	$(".modalCarrito").hide();
	$(".modalError").modal();
	
	
	
	

})


$(".ofertaDiv")  //oferta que aparece por unos segundos
  .animate(
    {
      fontWeight: "bold",
      fontSize: "20px",
      opacity: 0.7,
      width: 500,
    },
    2000
  )
  .delay(6000)
  .slideUp(1000);
