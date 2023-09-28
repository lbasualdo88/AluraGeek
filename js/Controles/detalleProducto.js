import { clientServices } from "../CRUD.js";

const descripcionProducto = (name, precio, imagen, descripcion, id) =>{
    const div = document.createElement("div");
    const contenido = `
    <div class="container_producto">
        <div class="producto_img">
            <img class="img-producto" src="${imagen}" alt="pelota 1">
        </div>
        <div class="producto_descripcion">
            <h2 class="titulo">${name}</h2>
            <p class="precio-producto">${precio}</p>
            <p class="descripcion">${descripcion}</p>
        </div>
    </div>`
    div.innerHTML = contenido;
   
    return div
}

const url = new URL(window.location);
const id = url.searchParams.get("id");
console.log("id ", id)

const divProductos = document.querySelector('[data-productoDescripcion]');
if (id){
clientServices.detalleProducto(id).then((data)=>{
    console.log(data)
    // Usar el objeto JSON como argumento de la función descripcionProducto ()
    const nuevoDiv = descripcionProducto(data.name, data.precio, data.imagen, data.descripcion);
    console.log(nuevoDiv)
    divProductos.appendChild(nuevoDiv);
}).catch((error) => {
    // Ver el mensaje de error
    console.log(error);
    alert("Ocurrio un error 2")
});
}


