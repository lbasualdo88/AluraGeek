import { clientServices } from "../CRUD.js";


const formulario = document.querySelector("[data-form]");

const obtenerInformacion = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

  if (id === null) {
        alert("problema id nulo")
    } 

    const imagen = document.querySelector('[data-url]')
    const name = document.querySelector('[data-name]')
    const precio = document.querySelector('[data-precio]')
    const descripcion = document.querySelector('[data-descripcion]')

try {
    const producto = await clientServices.detalleProducto(id);
    if (producto.name && producto.imagen && producto.precio && producto.descripcion) {
        name.value = producto.name;
        imagen.value = producto.imagen;
        precio.value = producto.precio;
        descripcion.value = producto.descripcion;
    } else {
        throw new Error();
    }
} catch (error) {
    alert("Hubo un error")
    /* window.location.href = "/screens/error.html"; */
}
};



obtenerInformacion();

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const imagen = document.querySelector('[data-url]').value
    const name = document.querySelector('[data-name]').value
    const precio = document.querySelector('[data-precio]').value
    const descripcion = document.querySelector('[data-descripcion]').value
    
    clientServices.actualizarProducto(name, precio, imagen, descripcion, id).then(() => {
        window.location.href = "../../Inventario.html";
    });
});