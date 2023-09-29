import { clientServices } from './../CRUD.js';
import { crearDiv } from './busqueda.js';

const input = document.getElementById("input-busqueda")

const lupa = document.getElementById("img-lupa")

lupa.addEventListener('click', ()=>{
    const name = input.value
    console.log("el click, ", name)

    clientServices.detallePorNombreProducto(name).then((data)=>{
        console.log(data)
        data.forEach(aux => {
            if (name === aux.name.toLowerCase()) {
                console.log("ENTRO ", aux.name)
                const divProductos = document.querySelector('[data-productoDescripcion]');
                console.log(divProductos)
                const nuevoDiv = crearDiv.descripcionProducto(data.name, data.precio, data.imagen, data.descripcion)
                divProductos.appendChild(nuevoDiv);
            }
        });
    }).catch((error) => {
        console.log(error);
        alert("Ocurrio un error 5")
    });
})