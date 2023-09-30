import { clientServices } from './../CRUD.js';
document.addEventListener('DOMContentLoaded', function() {
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

const name = url.searchParams.get("name");

    const divProductos = document.querySelector('[data-productoDescripcion]');

    
    clientServices.detallePorNombreProducto(name).then((data)=>{

        const producto = data[0]
        const nuevoDiv = descripcionProducto(producto.name, producto.precio, producto.imagen, producto.descripcion)
        divProductos.appendChild(nuevoDiv);       
    }).catch((error) => {
        console.error(error)
        /* alert("Ocurrio un error") */
    });
});


