console.log('main.js cargado correctamente.');

// Verificar si Bootstrap está disponible
if (typeof bootstrap !== 'undefined') {
    console.log('Bootstrap está disponible');
} else {
    console.error('Bootstrap no está disponible');
}

// Navbar background change on scroll and hide/show on scroll
let lastScrollTop = 0;
window.addEventListener('scroll', function () {
    const mainHeaderContainer = document.querySelector('.fixed-top'); // Seleccionar el contenedor principal
    const navbar = document.querySelector('.navbar'); // Para el cambio de color
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Change background on scroll
    if (scrollTop > 50) {
        navbar.classList.add('bg-white');
        navbar.classList.remove('bg-light');
    } else {
        navbar.classList.add('bg-light');
        navbar.classList.remove('bg-white');
    }

    // Hide/show on scroll
    if (scrollTop > lastScrollTop) {
        // Scrolling down
        if (scrollTop > mainHeaderContainer.offsetHeight) { // Ocultar solo si se ha pasado la altura del contenedor
            mainHeaderContainer.classList.add('header-hidden');
        }
    } else {
        // Scrolling up
        mainHeaderContainer.classList.remove('header-hidden');
    }
    lastScrollTop = scrollTop;
});

// Carrito de compras - Ahora persistente con localStorage
let carrito = JSON.parse(localStorage.getItem('carritoFarmacia')) || [];

// Función para guardar el carrito en localStorage
function guardarCarritoEnLocalStorage() {
    localStorage.setItem('carritoFarmacia', JSON.stringify(carrito));
}

// Función para agregar producto al carrito
function agregarAlCarrito(prod) {
    const idx = carrito.findIndex(item => item.nombre === prod.nombre);
    if (idx !== -1) {
        carrito[idx].cantidad += 1;
    } else {
        carrito.push({ ...prod, cantidad: 1 });
    }
    guardarCarritoEnLocalStorage(); // Guardar después de cada modificación
    actualizarCarritoBadge();
}

// Función para actualizar el contador del carrito en el ícono del header
function actualizarCarritoBadge() {
    const totalItems = carrito.reduce((sum, item) => sum + item.cantidad, 0);
    const cartBadge = document.getElementById('cart-badge');
    if (cartBadge) {
        cartBadge.innerText = totalItems;
        if (totalItems > 0) {
            cartBadge.classList.remove('d-none');
        } else {
            cartBadge.classList.add('d-none');
        }
    }
    mostrarCarrito(); // Actualizar la vista del carrito cada vez que cambia
}

// Función para mostrar el contenido del carrito en el modal
function mostrarCarrito() {
    const carritoLista = document.getElementById('carrito-lista');
    const carritoTotal = document.getElementById('carrito-total');
    let total = 0;

    if (carritoLista) {
        carritoLista.innerHTML = ''; // Limpiar la lista antes de actualizar

        if (carrito.length === 0) {
            carritoLista.innerHTML = '<p class="text-center">El carrito está vacío.</p>';
            const btnLimpiarCarrito = document.getElementById('btn-limpiar-carrito');
            if (btnLimpiarCarrito) {
                btnLimpiarCarrito.setAttribute('disabled', 'true');
            }
        } else {
            carrito.forEach((item, index) => {
                const itemTotal = parseFloat(item.precio.replace('L', '')) * item.cantidad;
                total += itemTotal;
                const li = document.createElement('li');
                li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
                li.innerHTML = `
                    <div>
                        ${item.nombre} 
                        <br>
                        <small class="text-muted">L${parseFloat(item.precio.replace('L', '')).toFixed(2)} c/u</small>
                    </div>
                    <div class="d-flex align-items-center">
                        <button class="btn btn-sm btn-outline-secondary" onclick="modificarCantidadCarrito(${index}, -1)">-</button>
                        <span class="mx-2">${item.cantidad}</span>
                        <button class="btn btn-sm btn-outline-secondary" onclick="modificarCantidadCarrito(${index}, 1)">+</button>
                        <strong class="ms-3">L${itemTotal.toFixed(2)}</strong>
                        <button class="btn btn-danger btn-sm ms-2" onclick="eliminarDelCarrito(${index})">Eliminar</button>
                    </div>
                `;
                carritoLista.appendChild(li);
            });
            const btnLimpiarCarrito = document.getElementById('btn-limpiar-carrito');
            if (btnLimpiarCarrito) {
                btnLimpiarCarrito.removeAttribute('disabled');
            }
        }
    }

    if (carritoTotal) {
        carritoTotal.innerText = `L${total.toFixed(2)}`;
        // Habilitar/deshabilitar botón de finalizar compra
        const btnFinalizarCompra = document.querySelector('#carritoModal .btn-primary');
        console.log('Botón finalizar compra en mostrarCarrito:', btnFinalizarCompra, 'Total:', total);
        if (btnFinalizarCompra) {
            if (total > 0) {
                btnFinalizarCompra.removeAttribute('disabled');
                console.log('Botón finalizar compra habilitado');
            } else {
                btnFinalizarCompra.setAttribute('disabled', 'true');
                console.log('Botón finalizar compra deshabilitado');
            }
        }
    }
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    guardarCarritoEnLocalStorage(); // Guardar después de cada modificación
    actualizarCarritoBadge();
}

// Función para modificar la cantidad de un producto en el carrito
function modificarCantidadCarrito(index, cambio) {
    if (carrito[index]) {
        carrito[index].cantidad += cambio;
        if (carrito[index].cantidad <= 0) {
            carrito.splice(index, 1); // Eliminar si la cantidad es 0 o menos
        }
    }
    guardarCarritoEnLocalStorage(); // Guardar después de cada modificación
    actualizarCarritoBadge(); // Esto también llama a mostrarCarrito para actualizar la vista
}

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar el badge del carrito al cargar la página (se carga desde localStorage al inicio del script)
    actualizarCarritoBadge();

    // Manejador para el botón del carrito en el header
    const cartIconBtn = document.getElementById('cart-icon-btn');
    if (cartIconBtn) {
        console.log('Botón de carrito encontrado.', cartIconBtn);
        cartIconBtn.addEventListener('click', function (e) {
            e.preventDefault();
            console.log('Click en botón de carrito detectado.');
            mostrarCarrito();
            const carritoModalElement = document.getElementById('carritoModal');
            if (carritoModalElement) {
                const carritoModal = new bootstrap.Modal(carritoModalElement);
                carritoModal.show();
                
                // Configurar el botón de finalizar compra cuando se muestra el modal
                setTimeout(() => {
                    setupFinalizarCompraButton();
                }, 100);
            } else {
                console.error('Modal del carrito no encontrado');
            }
        });
    } else {
        console.error('Botón de carrito no encontrado (ID: cart-icon-btn).');
    }

    // Limpiar carrito (Event Listener)
    const btnLimpiarCarrito = document.getElementById('btn-limpiar-carrito');
    if (btnLimpiarCarrito) {
        btnLimpiarCarrito.addEventListener('click', function () {
            carrito = [];
            guardarCarritoEnLocalStorage(); // Guardar después de limpiar
            actualizarCarritoBadge();
        });
    }

    // Event listener para el botón de la cuenta (modal de login/registro)
    const cuentaBtn = document.querySelector('.fah-header-icon[data-bs-target="#cuentaModal"]');
    if (cuentaBtn) {
        cuentaBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const cuentaModal = new bootstrap.Modal(document.getElementById('cuentaModal'));
            cuentaModal.show();
        });
    }

    // Simulación de login y registro
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Inicio de sesión exitoso (simulado).');
            bootstrap.Modal.getInstance(document.getElementById('cuentaModal')).hide();
            this.reset();
        });
    }

    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Registro exitoso (simulado).');
            bootstrap.Modal.getInstance(document.getElementById('cuentaModal')).hide();
            this.reset();
        });
    }

    // Manejador para el botón "Finalizar compra" en el modal del carrito
    function setupFinalizarCompraButton() {
        const btnFinalizarCompra = document.querySelector('#carritoModal .btn-primary');
        console.log('Buscando botón finalizar compra:', btnFinalizarCompra);
        if (btnFinalizarCompra) {
            console.log('Botón finalizar compra encontrado, agregando event listener');
            // Remover event listeners anteriores si existen
            btnFinalizarCompra.removeEventListener('click', handleFinalizarCompra);
            btnFinalizarCompra.addEventListener('click', handleFinalizarCompra);
        } else {
            console.error('Botón finalizar compra no encontrado');
        }
    }

    // Función separada para manejar el clic en finalizar compra
    function handleFinalizarCompra() {
        if (carrito.length === 0) {
            alert('El carrito está vacío. Agrega productos antes de finalizar la compra.');
            return;
        }

        // Siempre mostrar el modal de datos del cliente
        const datosClienteModalElement = document.getElementById('datosClienteModal');
        if (datosClienteModalElement) {
            const datosClienteModal = new bootstrap.Modal(datosClienteModalElement);
            datosClienteModal.show();
            console.log('Modal de datos del cliente mostrado exitosamente');
        } else {
            console.error('Modal de datos del cliente no encontrado');
        }
        // Cerrar el modal del carrito
        const carritoModalElement = document.getElementById('carritoModal');
        const carritoModal = bootstrap.Modal.getInstance(carritoModalElement);
        if (carritoModal) {
            carritoModal.hide();
        }
    }

    // Configurar el botón cuando se carga la página
    setupFinalizarCompraButton();

    // Agregar un event listener adicional para debug usando delegación de eventos
    document.addEventListener('click', function(e) {
        console.log('Click detectado en:', e.target);
        if (e.target && e.target.textContent === 'Finalizar compra') {
            console.log('Click detectado en botón finalizar compra por delegación de eventos');
            e.preventDefault();
            e.stopPropagation();
            
            if (carrito.length === 0) {
                alert('El carrito está vacío. Agrega productos antes de finalizar la compra.');
                return;
            }

            console.log('Carrito tiene productos, mostrando modal de datos del cliente');
            const datosClienteModalElement = document.getElementById('datosClienteModal');
            console.log('Elemento modal datos cliente:', datosClienteModalElement);
            if (datosClienteModalElement) {
                const datosClienteModal = new bootstrap.Modal(datosClienteModalElement);
                datosClienteModal.show();
                console.log('Modal de datos del cliente mostrado exitosamente');
            } else {
                console.error('Modal de datos del cliente no encontrado');
            }

            // Cerrar el modal del carrito
            const carritoModalElement = document.getElementById('carritoModal');
            const carritoModal = bootstrap.Modal.getInstance(carritoModalElement);
            if (carritoModal) {
                carritoModal.hide();
            }
        }
    });

    // Botón de prueba para verificar si el modal funciona
    const btnTestModal = document.getElementById('btn-test-modal');
    if (btnTestModal) {
        btnTestModal.addEventListener('click', function() {
            console.log('Botón de prueba clickeado');
            const datosClienteModalElement = document.getElementById('datosClienteModal');
            console.log('Elemento modal datos cliente (test):', datosClienteModalElement);
            if (datosClienteModalElement) {
                const datosClienteModal = new bootstrap.Modal(datosClienteModalElement);
                datosClienteModal.show();
                console.log('Modal de prueba mostrado');
            } else {
                console.error('Modal de datos del cliente no encontrado en prueba');
            }
        });
    }

    // Función global para abrir el modal de datos del cliente
    window.abrirModalDatosCliente = function() {
        console.log('Función abrirModalDatosCliente llamada');
        const datosClienteModalElement = document.getElementById('datosClienteModal');
        console.log('Elemento modal datos cliente:', datosClienteModalElement);
        if (datosClienteModalElement) {
            const datosClienteModal = new bootstrap.Modal(datosClienteModalElement);
            datosClienteModal.show();
            console.log('Modal de datos del cliente abierto exitosamente');
        } else {
            console.error('Modal de datos del cliente no encontrado');
        }
    };

    // Manejador para el botón "Completar Compra" en el modal de datos del cliente
    const btnCompletarCompra = document.getElementById('btnCompletarCompra');
    if (btnCompletarCompra) {
        btnCompletarCompra.addEventListener('click', async function () {
            const form = document.getElementById('datosClienteForm');
            if (form.checkValidity()) {
                // Obtener los datos del formulario
                const formData = new FormData(form);
                const datosCliente = {
                    nombreCompleto: formData.get('nombreCompleto'),
                    numeroCelular: formData.get('numeroCelular'),
                    numeroIdentidad: formData.get('numeroIdentidad'),
                    metodoPago: formData.get('metodoPago'),
                    direccion: formData.get('direccion'),
                    observaciones: formData.get('observaciones')
                };

                // Calcular el total de la compra
                const total = carrito.reduce((sum, item) => {
                    return sum + (parseFloat(item.precio.replace('L', '')) * item.cantidad);
                }, 0);

                // Preparar datos para enviar al servidor (opcional)
                const datosCompra = {
                    ...datosCliente,
                    productos: carrito.map(item => ({
                        nombre: item.nombre,
                        cantidad: item.cantidad,
                        precio: parseFloat(item.precio.replace('L', '')),
                        subtotal: parseFloat(item.precio.replace('L', '')) * item.cantidad
                    })),
                    total: total
                };

                try {
                    // Intentar enviar datos al servidor (opcional - comentar si no se usa)
                    /*
                    const response = await fetch('guardar_compra.php', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(datosCompra)
                    });
                    
                    const result = await response.json();
                    if (!result.success) {
                        throw new Error(result.message);
                    }
                    */

                    // Generar la factura con los datos del cliente
                    generarFacturaHTML(carrito, datosCliente);

                    // Vaciar el carrito
                    carrito = [];
                    guardarCarritoEnLocalStorage();
                    actualizarCarritoBadge();

                    // Cerrar el modal de datos del cliente
                    const datosClienteModal = bootstrap.Modal.getInstance(document.getElementById('datosClienteModal'));
                    datosClienteModal.hide();

                    // Limpiar el formulario
                    form.reset();

                    // Mostrar mensaje de éxito
                    alert('¡Compra completada exitosamente! Se ha generado su factura.');
                    
                } catch (error) {
                    console.error('Error al procesar la compra:', error);
                    // Aún así generar la factura localmente
                    generarFacturaHTML(carrito, datosCliente);
                    
                    // Vaciar el carrito
                    carrito = [];
                    guardarCarritoEnLocalStorage();
                    actualizarCarritoBadge();

                    // Cerrar el modal de datos del cliente
                    const datosClienteModal = bootstrap.Modal.getInstance(document.getElementById('datosClienteModal'));
                    datosClienteModal.hide();

                    // Limpiar el formulario
                    form.reset();

                    alert('¡Compra completada exitosamente! Se ha generado su factura.');
                }
            } else {
                // Mostrar errores de validación
                form.reportValidity();
            }
        });
    }

    // --- MODO OSCURO/CLARO ---
    // Crear el botón si no existe
    let themeBtn = document.getElementById('toggle-theme');
    if (!themeBtn) {
        themeBtn = document.createElement('button');
        themeBtn.id = 'toggle-theme';
        themeBtn.className = 'theme-toggle-btn';
        document.body.appendChild(themeBtn);
    }

    // Función para actualizar el texto del botón
    function actualizarTextoBtn() {
        if(document.body.classList.contains('dark-mode')) {
            themeBtn.textContent = '☀️ Modo Claro';
        } else {
            themeBtn.textContent = '🌙 Modo Oscuro';
        }
    }

    // Restaurar preferencia guardada
    const modoGuardado = localStorage.getItem('modoFarmacia');
    if (modoGuardado === 'oscuro') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
    actualizarTextoBtn();

    // Cambiar modo al hacer click
    themeBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        if(document.body.classList.contains('dark-mode')) {
            localStorage.setItem('modoFarmacia', 'oscuro');
        } else {
            localStorage.setItem('modoFarmacia', 'claro');
        }
        actualizarTextoBtn();
    });
});

// Nueva función para generar la factura en HTML y abrirla en una nueva pestaña
function generarFacturaHTML(itemsCarrito, datosCliente) {
    let contenidoFactura = `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Factura de Compra</title>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
            <style>
                body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 20px; color: #333; line-height: 1.6; }
                .container { width: 90%; max-width: 800px; margin: 20px auto; border: 1px solid #e0e0e0; padding: 30px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); border-radius: 8px; background-color: #fff; }
                .header { text-align: center; margin-bottom: 30px; padding-bottom: 20px; border-bottom: 1px solid #e0e0e0; }
                .header img { max-width: 180px; margin-bottom: 15px; border-radius: 5px; }
                h1 { color: #0056b3; font-size: 2.5em; margin-bottom: 5px; }
                .header p { color: #555; font-size: 1.1em; margin-top: 5px; }
                h2 { color: #0056b3; font-size: 1.8em; border-bottom: 2px solid #007bff; padding-bottom: 10px; margin-bottom: 25px; text-align: center; }
                .info { margin-bottom: 25px; padding: 15px; background-color: #f9f9f9; border-left: 5px solid #007bff; border-radius: 4px; }
                .info p { margin: 8px 0; font-size: 1em; }
                .cliente-info { margin-bottom: 25px; padding: 15px; background-color: #e8f4fd; border-left: 5px solid #0056b3; border-radius: 4px; }
                .cliente-info p { margin: 8px 0; font-size: 1em; }
                table { width: 100%; border-collapse: collapse; margin-bottom: 25px; background-color: #fcfcfc; }
                th, td { border: 1px solid #e0e0e0; padding: 12px; text-align: left; font-size: 0.95em; }
                th { background-color: #eaf2f8; color: #0056b3; font-weight: bold; }
                tr:nth-child(even) { background-color: #f5fafd; } /* Light blue for even rows */
                .total { text-align: right; font-size: 1.3em; font-weight: bold; margin-top: 25px; padding-top: 15px; border-top: 1px dashed #ccc; }
                .total p { margin: 8px 0; }
                .total strong { color: #007bff; font-size: 1.3em; }
                .gracias { text-align: center; margin-top: 35px; font-size: 1.2em; color: #007bff; font-weight: bold; }
                .button-container { display: flex; justify-content: center; gap: 20px; margin: 30px 0; }
                .print-button, .download-button { display: inline-block; width: 200px; padding: 12px 20px; color: white; text-align: center; border: none; border-radius: 5px; cursor: pointer; font-size: 1.1em; transition: background-color 0.3s ease; text-decoration: none; }
                .print-button { background-color: #28a745; }
                .print-button:hover { background-color: #218838; }
                .download-button { background-color: #007bff; }
                .download-button:hover { background-color: #0056b3; }
                @media print {
                    .button-container { display: none; }
                    body { margin: 0; }
                    .container { box-shadow: none; border: none; padding: 0; width: 100%; max-width: none; }
                }
            </style>
        </head>
        <body>
            <div class="container" id="factura-container">
                <div class="header">
                    <img src="imagenes/logo.png" alt="Logo Farmacia Kekis" style="max-width: 150px; margin-bottom: 10px;">
                    <h1>Farmacia Kekis</h1>
                    <p>Tu salud es nuestra prioridad</p>
                </div>
                <h2>Factura de Compra</h2>
                <div class="info">
                    <p><strong>Fecha:</strong> ${new Date().toLocaleDateString()}</p>
                    <p><strong>Hora:</strong> ${new Date().toLocaleTimeString()}</p>
                    <p><strong>Método de Pago:</strong> ${datosCliente.metodoPago}</p>
                </div>

                <div class="cliente-info">
                    <h3>Datos del Cliente</h3>
                    <p><strong>Nombre:</strong> ${datosCliente.nombreCompleto}</p>
                    <p><strong>Teléfono:</strong> ${datosCliente.numeroCelular}</p>
                    <p><strong>Identidad:</strong> ${datosCliente.numeroIdentidad}</p>
                    <p><strong>Dirección:</strong> ${datosCliente.direccion}</p>
                    ${datosCliente.observaciones ? `<p><strong>Observaciones:</strong> ${datosCliente.observaciones}</p>` : ''}
                </div>

                <h2>Detalles de la Compra</h2>
                <table class="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Precio Unitario</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
    `;

    let subtotalSinImpuestos = 0;
    const impuestoPorcentaje = 0.15; // 15%

    itemsCarrito.forEach(item => {
        const precioUnitario = parseFloat(item.precio.replace('L', ''));
        const subtotalProducto = precioUnitario * item.cantidad;
        subtotalSinImpuestos += subtotalProducto;
        contenidoFactura += `
            <tr>
                <td>${item.nombre}</td>
                <td>${item.cantidad}</td>
                <td>L${precioUnitario.toFixed(2)}</td>
                <td>L${subtotalProducto.toFixed(2)}</td>
            </tr>
        `;
    });

    const impuestoCalculado = subtotalSinImpuestos * impuestoPorcentaje;
    const totalFactura = subtotalSinImpuestos + impuestoCalculado;

    contenidoFactura += `
                    </tbody>
                </table>
                <div class="total">
                    <p>Subtotal: L${subtotalSinImpuestos.toFixed(2)}</p>
                    <p>Impuesto (${(impuestoPorcentaje * 100).toFixed(0)}%): L${impuestoCalculado.toFixed(2)}</p>
                    <strong>Total a Pagar: L${totalFactura.toFixed(2)}</strong>
                </div>
                <div class="gracias">
                    <p>¡Gracias por tu compra en Farmacia Kekis!</p>
                </div>
                <div class="button-container">
                    <button class="print-button" onclick="window.print()">Imprimir Factura</button>
                    <button class="download-button" onclick="descargarFacturaPDF()">Descargar PDF</button>
                </div>
            </div>
            
            <script>
                function descargarFacturaPDF() {
                    const { jsPDF } = window.jspdf;
                    const doc = new jsPDF();
                    
                    // Obtener el contenido de la factura
                    const facturaContainer = document.getElementById('factura-container');
                    
                    // Convertir el HTML a canvas y luego a PDF
                    html2canvas(facturaContainer, {
                        scale: 2,
                        useCORS: true,
                        allowTaint: true,
                        backgroundColor: '#ffffff'
                    }).then(canvas => {
                        const imgData = canvas.toDataURL('image/png');
                        const imgWidth = 210; // A4 width in mm
                        const pageHeight = 295; // A4 height in mm
                        const imgHeight = (canvas.height * imgWidth) / canvas.width;
                        let heightLeft = imgHeight;
                        
                        let position = 0;
                        
                        // Agregar la primera página
                        doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                        heightLeft -= pageHeight;
                        
                        // Agregar páginas adicionales si es necesario
                        while (heightLeft >= 0) {
                            position = heightLeft - imgHeight;
                            doc.addPage();
                            doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                            heightLeft -= pageHeight;
                        }
                        
                        // Generar nombre del archivo con fecha y hora
                        const fecha = new Date().toISOString().slice(0, 10);
                        const hora = new Date().toTimeString().slice(0, 8).replace(/:/g, '-');
                        const nombreArchivo = \`Factura_FarmaciaKekis_\${fecha}_\${hora}.pdf\`;
                        
                        // Descargar el PDF
                        doc.save(nombreArchivo);
                    }).catch(error => {
                        console.error('Error al generar PDF:', error);
                        alert('Error al generar el PDF. Inténtalo de nuevo.');
                    });
                }
            </script>
        </body>
        </html>
    `;

    const nuevaVentana = window.open('', '_blank');
    nuevaVentana.document.write(contenidoFactura);
    nuevaVentana.document.close();
} 