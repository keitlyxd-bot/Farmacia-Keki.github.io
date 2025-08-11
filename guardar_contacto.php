<?php
// Configuración de la base de datos
$host = 'localhost';
$user = 'root'; // Cambia si tu usuario es diferente
$pass = '';
$db = 'farmacia_db';

// Conexión
$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    header('Location: contacto.html?error=conexion');
    exit;
}

// Obtener datos del formulario
$nombre = $conn->real_escape_string($_POST['nombre'] ?? '');
$email = $conn->real_escape_string($_POST['email'] ?? '');
$mensaje = $conn->real_escape_string($_POST['mensaje'] ?? '');
$telefono = $conn->real_escape_string($_POST['telefono'] ?? '');

if (!$nombre || !$email) {
    header('Location: contacto.html?error=campos');
    exit;
}

// Insertar en la base de datos
$sql = "INSERT INTO contacto (nombre, email, telefono, mensaje) VALUES ('$nombre', '$email', '$telefono', '$mensaje')";
if ($conn->query($sql)) {
    header('Location: contacto.html?success=true');
} else {
    header('Location: contacto.html?error=guardado');
}

$conn->close();
?>
