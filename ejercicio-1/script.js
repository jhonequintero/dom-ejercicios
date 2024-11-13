document.getElementById('boton').addEventListener('click', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe y recargue la página.

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("Correo_electronico").value;
    const contraseña = document.getElementById("contraseña").value;

    clearMessages();

    let valid = true;

    if (nombre.trim() === '') {
        showError('nombre', 'El nombre no puede estar vacío');
        valid = false;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(correo)) {
        showError('Correo_electronico', 'El correo electrónico no es válido');
        valid = false;
    }

    if (contraseña.length < 6) {
        showError('contraseña', 'La contraseña debe tener al menos 6 caracteres');
        valid = false;
    }

    if (valid) {
        console.log('Datos de registro:');
        console.log('Nombre:', nombre);
        console.log('Correo:', correo);
        console.log('Contraseña:', contraseña);
        alert('Registro exitoso');
        
        // Restablecer el formulario
        document.querySelector('form').reset(); // Resetea todos los campos del formulario
    }
});

function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorDiv = document.createElement('div');
    errorDiv.classList.add('error-message');
    errorDiv.textContent = message;
    field.parentElement.appendChild(errorDiv);
}

function clearMessages() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(msg => msg.remove());
}
