// Integración AJAX para el formulario de contacto
const contactoForm = document.querySelector('#contactFormNewPage');
if (contactoForm) {
    // Crear contenedor para mensajes
    let msgDiv = document.createElement('div');
    contactoForm.parentNode.insertBefore(msgDiv, contactoForm);

    contactoForm.addEventListener('submit', function(e) {
        e.preventDefault();
        msgDiv.innerHTML = '';
        const formData = new FormData(contactoForm);
        fetch('guardar_contacto.php', {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                msgDiv.innerHTML = `<div class='alert alert-success'>${data.message}</div>`;
                contactoForm.reset();
                setTimeout(() => { msgDiv.innerHTML = ''; }, 3000);
            } else {
                msgDiv.innerHTML = `<div class='alert alert-danger'>${data.message}</div>`;
                setTimeout(() => { msgDiv.innerHTML = ''; }, 3000);
            }
        })
        .catch(() => {
            msgDiv.innerHTML = `<div class='alert alert-danger'>Error al enviar el mensaje. Intenta más tarde.</div>`;
        });
    });
} 