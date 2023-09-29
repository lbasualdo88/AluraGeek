import { validarSesion } from "./login-sesion.js";

const input_login = document.querySelectorAll(".input_login");

input_login.forEach((input) => {
  input.addEventListener("blur", (input) => {
    valide(input.target);
  });
});

function valide(input) {
    const tipo_Input = input.dataset.tipo;

    if (input.validity.valid) {
      input.parentElement.classList.remove("input-invalido");
      input.parentElement.querySelector(".input_mensaje_error").innerHTML = ""
      validarSesion()
    } else {
      input.parentElement.classList.add("input-invalido");
      input.parentElement.querySelector(".input_mensaje_error").innerHTML = mostrarMSJDeError(tipo_Input, input)
    }
  }
  const errores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch"
  ]
  const mensajeError = {
    email: {
      valueMissing: "Este campo no puede estar vacio",
      typeMismatch: "No es un formato de correo electronico"
    },
    password: {
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "Debe contener al menos una mayuscula, numeros y minimo 6 caracteres"
      }
  }
  
  function mostrarMSJDeError(tipo_Input, input) {
    let msj = ""
    errores.forEach( error => {
     
      if (input.validity[error]) {
        console.log(error);
        console.log(input.validity[error]);
        console.log(mensajeError[tipo_Input][error]);
        msj = mensajeError[tipo_Input][error];
      }
    });
    return msj
  }

