function validarNombre(nombre) {
  if (nombre.length === 0) {
    return "El nombre debe tener mas de 1 caracter";
  }

  if (nombre.length >= 25) {
    return "El nombre debe tener menos de 25 caracteres";
  }

  if (!/[A-z]/.test(nombre)) {
    return "El nombre solo debe tener letras";
  }

  return "";
}

function validarCiudad(ciudad) {
  if (ciudad.length === 0) {
    return "el campo ciudad no puede estar vacio";
  }

  return "";
}

function validarDescripcionRegalo(descripcionRegalo) {
  if (descripcionRegalo.length === 0) {
    return "La descripcion no puede estar vacia";
  }

  if (descripcionRegalo.length >= 350) {
    return "la descripcion no puede exceder los 350 caracteres";
  }

  if (!/^[a-z0-9\ ]+$/i.test(descripcionRegalo)) {
    return "La descripcion del regalo solo puede tener numeros y letras";
  }

  return "";
}

function validarFormulario(event) {
  const $form = document.querySelector("#carta-a-santa");

  const nombre = $form.nombre.value;
  const ciudad = $form.ciudad.value;
  const regalo = $form["descripcion-regalo"].value;

  const errorNombre = validarNombre(nombre);
  const errorCiudad = validarCiudad(ciudad);
  const errorDescripcionRegalo = validarDescripcionRegalo(regalo);

  const errores = {
    nombre: errorNombre,
    ciudad: errorCiudad,
    'descripcion-regalo': errorDescripcionRegalo,
  };

  const esExito = manejarErrores(errores) === 0;

  if (esExito) {
    $form.className = "oculto";
    document.querySelector("#exito").className = "";

    setTimeout(function () {
      window.location.href = "wishlist.html";
    }, 5000);
  }
  event.preventDefault();
}

function manejarErrores(errores) {
  const keys = Object.keys(errores);
  const $errores = document.querySelector("#errores");
  $errores.textContent = "";

  let cantidadErrores = 0;

  keys.forEach(function (key) {
    const error = errores[key];

    if (error) {
      cantidadErrores++;
      $form[key].className = "error";

      const $error = document.createElement("li");
      $error.innerText = error;
      $errores.appendChild($error);
    } else {
      $form[key].className = "";
    }
  });

  return cantidadErrores;
}

const $form = document.querySelector("#carta-a-santa");
$form.onsubmit = validarFormulario;
