<?php
header('Content-Type: application/json');

$host = 'localhost';
$user = 'root';
$pass = '';
$db = 'farmacia_db';

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    echo json_encode(['success' => false, 'message' => 'Error de conexión a la base de datos']);
    exit;
}

$nombre = $conn->real_escape_string($_POST['nombre'] ?? '');
$email = $conn->real_escape_string($_POST['email'] ?? '');
$password = $_POST['password'] ?? '';

if (!$nombre || !$email || !$password) {
    echo json_encode(['success' => false, 'message' => 'Todos los campos son obligatorios']);
    exit;
}

// Verificar si el email ya existe
$check = $conn->query("SELECT id FROM usuarios WHERE email='$email'");
if ($check && $check->num_rows > 0) {
    echo json_encode(['success' => false, 'message' => 'El email ya está registrado']);
    exit;
}

$hash = password_hash($password, PASSWORD_DEFAULT);
$sql = "INSERT INTO usuarios (nombre, email, password) VALUES ('$nombre', '$email', '$hash')";
if ($conn->query($sql)) {
    echo json_encode(['success' => true, 'message' => 'Registro exitoso. Ahora puedes iniciar sesión.']);
} else {
    echo json_encode(['success' => false, 'message' => 'Error al registrar usuario']);
}
$conn->close(); 