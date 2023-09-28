//GET
const listaProductos = ()=> 
fetch("http://localhost:3000/pelotas").then((respuesta)=> respuesta.json());

//POST
const crearProducto =(name, precio, imagen, descripcion) => {
    return fetch("http://localhost:3000/pelotas", {
         method:"POST",
         headers: {"Content-Type": "application/json"},
         body: JSON.stringify({name, precio, imagen, descripcion}), 
 });
 };
 
 //DELETE
 const eliminarProducto = (id) => {
     return fetch(`http://localhost:3000/pelotas/${id}`,{
         method: "DELETE",
 });
 };

 const detalleProducto = (id) => {
     return fetch(`http://localhost:3000/pelotas/${id}`).then((respuesta) => respuesta.json());
 };

//UPDATE
 const actualizarProducto = (name, precio, imagen, descripcion, id) => {
     return fetch(`http://localhost:3000/pelotas/${id}`, {
         method : "PUT",
         headers:{"Content-type":"application/json"},
         body:JSON.stringify({name, precio, imagen, descripcion}),
     }).then((respuesta) => respuesta )
     .catch((err) => console.log(err))
 };

export const clientServices = {
    listaProductos,
    crearProducto,
    eliminarProducto,
    detalleProducto,
    actualizarProducto,
}