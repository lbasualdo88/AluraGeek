
export function validarSesion(){

const input_email = document.querySelector(".input_email")
console.log(input_email)
const input_contraseña = document.querySelector(".input_contraseña")
console.log(input_contraseña)

const button = document.querySelector(".btn_entrar")

button.addEventListener('click', (e)=>{
    e.preventDefault()
    const correo = input_email.value
    console.log(correo)
    const contraseña = input_contraseña.value
    console.log(contraseña)

    const login = ()=> 
    fetch("http://localhost:3000/perfil").then((respuesta)=> respuesta.json());

    login().then((data)=>{
        console.log(data)
        console.log(data.email)
        console.log(data.password)
        console.log(correo)
        console.log(contraseña)
         if ((correo === data.email) &&  (contraseña === data.password)){
            window.location.href = "../../Inventario.html"
            console.log("logeado")
        } else {
            alert("Email o contraseña incorrecta")
            console.log("no entro")
        }
    }).catch((error)=> console.log(error))
})}