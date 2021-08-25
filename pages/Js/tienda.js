class Productos{
    constructor(id, nombre, precio, imagen){
    this.id = parseInt(id)
    this.nombre = nombre;
    this.precio = parseFloat(precio);
    this.imagen = imagen;
    }
}

const esmaltes = [];
esmaltes.push(new Productos(1, "Top coat Matte",700, "../../assets/images/topcoatmate.jpeg" ));
esmaltes.push(new Productos(2, "Milky Way",200,"../../assets/images/milkyway.jpeg"));
esmaltes.push(new Productos(3, "Blanco French",500,"../../assets/images/blancofrench.jpeg"));
esmaltes.push(new Productos(4, "Pink Satin",500,"../../assets/images/pinksatin.jpeg"));
esmaltes.push(new Productos(5, "Ballerina",300,"../../assets/images/ballerina.jpeg" ));
esmaltes.push(new Productos(6, "Champagne Rose",500,"../../assets/images/champagnerose.jpeg" ));
esmaltes.push(new Productos(7, "Nude Dreams",600,"../../assets/images/nudedreams.jpeg" ));
esmaltes.push(new Productos(8, "Missandei",500,"../../assets/images/missandei.jpeg" ));
esmaltes.push(new Productos(9, "Smokey Plum",200,"../../assets/images/smokeyplum.jpeg" ));
esmaltes.push(new Productos(10, "Lilac",300,"../../assets/images/lilac.jpeg"));
esmaltes.push(new Productos(11, "Flamingo", 400,"../../assets/images/flamingo.jpeg" ));
esmaltes.push(new Productos(12, "Scarlet Red",500,"../../assets/images/scarletred.jpeg" ));
esmaltes.push(new Productos(13, "Red Flower",500,"../../assets/images/redflower.jpeg" ));
esmaltes.push(new Productos(14, "Bloody Mary",500,"../../assets/images/bloodymary.jpeg" ));
esmaltes.push(new Productos(15, "Blue Storm",600,"../../assets/images/bluestorm.jpeg" ));
esmaltes.push(new Productos(16, "Electric Sky", 400,"../../assets/images/electricsky.jpeg" ));
esmaltes.push(new Productos(17, "Deep Sky", 400,"../../assets/images/deepsky.jpeg")); 
esmaltes.push(new Productos(18, "Absolut Sky",500,"../../assets/images/absolutsky.jpeg" )); 
esmaltes.push(new Productos(19, "Carnival",500,"../../assets/images/carnival.jpeg" )); 
esmaltes.push(new Productos(20, "Slytherin", 200,"../../assets/images/slytherin.jpeg" )); 
esmaltes.push(new Productos(21, "Mandalay Sand",500,"../../assets/images/mandalaysand.jpeg" )); 
esmaltes.push(new Productos(22,"Black",400,"../../assets/images/black.jpeg" )); 
  
 




console.log(esmaltes)

for(const prod of esmaltes){
    let div = document.createElement("div");
    div.innerHTML = `
                    <img width= 300px height= 400px src="${prod.imagen}"> <br>
                    <p class="nombreEsmalte"> Esmalte ${prod.nombre}</p>
                    <h4> $${prod.precio}</h4>
                    <button id= "${prod.id}" class= "botonComprar"> COMPRAR </button>
                    <hr>
                    `;
    document.getElementById("sectionTienda").appendChild(div);
}

const botonesComprar = document.getElementsByClassName("botonComprar");


const carrito = []

function compraProducto() {
    const productoElegido = esmaltes.find(prod => prod.id == this.id);

    carrito.push(productoElegido)


    

    let innerCarrito = ''
    for (const prod of carrito){
        innerCarrito += `<p class="carritoProd"> ${prod.nombre}</p> <h4>$${prod.precio}<h4> <br>` 
    }

    const divCarrito = document.getElementById("carrito");
    divCarrito.innerHTML = innerCarrito
    

    console.log(carrito)
   
}

for (const boton of botonesComprar){
    boton.addEventListener("click", compraProducto);}