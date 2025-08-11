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

$email = $conn->real_escape_string($_POST['email'] ?? '');
$password = $_POST['password'] ?? '';

if (!$email || !$password) {
    echo json_encode(['success' => false, 'message' => 'Email y contraseña son obligatorios']);
    exit;
}

$sql = "SELECT id, nombre, password FROM usuarios WHERE email='$email' LIMIT 1";
$res = $conn->query($sql);
if ($res && $res->num_rows === 1) {
    $row = $res->fetch_assoc();
    if (password_verify($password, $row['password'])) {
        echo json_encode(['success' => true, 'message' => 'Bienvenido, ' . $row['nombre'] . '!']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Contraseña incorrecta']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Usuario no encontrado']);
}
$conn->close(); 