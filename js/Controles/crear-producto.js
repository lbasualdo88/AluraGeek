import { clientServices } from "../CRUD.js";

const form = document.querySelector('[data-form]')

form.addEventListener("submit", (e)=>{
    e.preventDefault()

    const imagen = document.querySelector('[data-url]').value
    const name = document.querySelector('[data-name]').value
    const precio = document.querySelector('[data-precio]').value
    const descripcion = document.querySelector('[data-descripcion]').value

    clientServices.crearProducto(name, precio, imagen, descripcion)
    .then(respuesta =>{
        window.location.href = "../../Inventario.html"
        console.log(respuesta)
    }).catch(error => {
        console.log(error)
    })

})