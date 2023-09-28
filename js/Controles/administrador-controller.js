import { clientServices } from "../CRUD.js";

const nuevoProducto = (name, precio, imagen, descripcion, id) =>{
    const div = document.createElement("div");
    const contenido = `
            <div class="producto">
                <button class="btn_none" id="${id}"><img class="eliminar" src="/img/iconos/eliminar.png" alt="eliminar"></button>
                <img class="img_producto" src="${imagen}" alt="productos">
                <h4 class="titulo-producto">${name}</h4>
                <p class="precio">${precio}</p>
                <p class="descripcion__produc">${descripcion}</p>
                <a href="productoDescrip.html?id=${id}">
                <button class="btn__ver-producto">Ver producto</button>
                </a>
                <a href="editarProducto.html?id=${id}"><button class="btn__editar">Editar</button></a>
            </div>`
    div.innerHTML = contenido;
    const btn = div.querySelector("button")
    btn.addEventListener('click', ()=>{
        const id = btn.id;
        clientServices
        .eliminarProducto(id)
        .then((respuesta) => {
        })
        .catch((err) => alert("Ocurrio un error"));
       });
    return div
}

const productos = document.querySelector('[data-producto]');

clientServices.listaProductos().then((data)=>{

    data.forEach(({name, precio, imagen, descripcion, id}) => {

        const nuevaLinea = nuevoProducto(name, precio, imagen, descripcion, id);
        productos.appendChild(nuevaLinea);
    });
}).catch((error) => alert("Ocurrio un error"));


