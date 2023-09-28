const inputs = document.querySelectorAll(".input-text");

inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    valida(input.target);
  });
});


function valida(input) {
    const tipoDeInput = input.dataset.tipo;

    
    if (input.validity.valid) {
      input.parentElement.classList.remove("input-invalido");
      input.parentElement.querySelector(".input-mensaje-error").innerHTML = ""
    } else {
      input.parentElement.classList.add("input-invalido");
      input.parentElement.querySelector(".input-mensaje-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input)
    }
  }
  const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch"
  ]
  const mensajeDeError = {
    nombre: {
      valueMissing: "Este campo no puede estar vacio"
    },
    textarea: {
        valueMissing: "Este campo no puede estar vacio"
      }
  }
  
  function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = ""
    tipoDeErrores.forEach( error => {
      if (input.validity[error]) {
        console.log(error);
        console.log(input.validity[error]);
        console.log(mensajeDeError[tipoDeInput][error]);
        mensaje = mensajeDeError[tipoDeInput][error];
      }
    });
    return mensaje
  }
  
  