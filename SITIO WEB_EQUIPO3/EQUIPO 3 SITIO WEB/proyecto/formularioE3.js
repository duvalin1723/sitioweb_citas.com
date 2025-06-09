const form = document.getElementById('formConsulta');
const mensajeError = document.getElementById('mensajeError');

// Mostrar mensaje de éxito
function mostrarMensajeExito() {
  const toast = document.getElementById('mensajeExito');
  toast.style.display = 'block';
  setTimeout(() => {
    toast.style.display = 'none';
  }, 4000);
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Validaciones
  const edad = parseInt(document.getElementById('edad').value);
  const telefono = document.getElementById('telefono').value.trim();
  const correo = document.getElementById('correo').value.trim();

  mensajeError.textContent = "";

  if (edad <= 0 || isNaN(edad)) {
    mensajeError.textContent = "Por favor ingrese una edad válida.";
    return;
  }

  const correoRegex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  const telefonoRegex = /^\d{10}$/;

  if (!telefonoRegex.test(telefono)) {
    mensajeError.textContent = "Ingrese un número de teléfono válido (10 dígitos).";
    return;
  }

  if (!correoRegex.test(correo)) {
    mensajeError.textContent = "Ingrese un correo electrónico válido.";
    return;
  }

  // Guardar datos en localStorage
  const datos = {
    apellidoPaterno: document.getElementById('apellidoPaterno').value,
    apellidoMaterno: document.getElementById('apellidoMaterno').value,
    nombres: document.getElementById('nombres').value,
    identificacion: document.getElementById('identificacion').value,
    edad: edad,
    sexo: document.getElementById('sexo').value,
    domicilio: document.getElementById('domicilio').value,
    fechaNacimiento: document.getElementById('fechaNacimiento').value,
    telefono: telefono,
    correo: correo,
    motivo: document.getElementById('motivo').value
  };

  localStorage.setItem('datosConsulta', JSON.stringify(datos));

 mostrarMensajeExito();
  form.reset();
});
