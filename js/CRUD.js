//GET
const listaProductos = ()=> 
fetch("https://my-json-server.typicode.com/lbasualdo88/Api-Rest-falsa/pelotas").then((respuesta)=> respuesta.json());

//POST
const crearProducto =(name, precio, imagen, descripcion) => {
    return fetch("https://my-json-server.typicode.com/lbasualdo88/Api-Rest-falsa/pelotas", {
         method:"POST",
         headers: {"Content-Type": "application/json"},
         body: JSON.stringify({name, precio, imagen, descripcion}), 
 });
 };
 
 //DELETE
 const eliminarProducto = (id) => {
     return fetch(`https://my-json-server.typicode.com/lbasualdo88/Api-Rest-falsa/pelotas/${id}`,{
         method: "DELETE",
 });
 };
//Detalle by id
 const detalleProducto = (id) => {
     return fetch(`https://my-json-server.typicode.com/lbasualdo88/Api-Rest-falsa/pelotas/${id}`).then((respuesta) => respuesta.json());
 };
//Detalle by name
 const detallePorNombreProducto = (name) => {
     return fetch(`https://my-json-server.typicode.com/lbasualdo88/Api-Rest-falsa/pelotas?name=${name}`).then((respuesta) => respuesta.json());
 };

//UPDATE
 const actualizarProducto = (name, precio, imagen, descripcion, id) => {
     return fetch(`https://my-json-server.typicode.com/lbasualdo88/Api-Rest-falsa/pelotas/${id}`, {
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
    detallePorNombreProducto,
}