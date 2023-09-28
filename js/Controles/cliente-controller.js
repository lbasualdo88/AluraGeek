import { clientServices } from "../CRUD.js";

const nuevoProducto = (name, precio, imagen, descripcion, id) =>{
    const div = document.createElement("div");
    const contenido = `
            <div class="producto">
                <img class="img_producto" src="${imagen}" alt="productos">
                <h4 class="titulo-producto">${name}</h4>
                <p class="precio">${precio}</p>
                <p class="descripcion__produc">${descripcion}</p>
                <a href="productoDescrip.html?id=${id}" data-id="${id}">
                <button class="btn__ver-producto" >Ver producto</button>
                </a>
            </div>`
    div.innerHTML = contenido;
    return div
}

const productos = document.querySelector('[data-producto]');

clientServices.listaProductos().then((data)=>{

    data.forEach(({name, precio, imagen, descripcion, id}) => {

        const nuevaLinea = nuevoProducto(name, precio, imagen, descripcion, id);
        productos.appendChild(nuevaLinea);
    });
}).catch((error) => alert("Ocurrio un error 1"));

