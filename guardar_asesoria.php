<?php
// Configuración de la base de datos
$host = 'localhost';
$dbname = 'farmacia_db';
$username = 'root';
$password = '';

try {
    // Crear conexión a la base de datos
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    // Configurar el modo de error de PDO para que lance excepciones
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Verificar si se recibieron los datos del formulario
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $nombre = $_POST['nombre'] ?? '';
        $email = $_POST['email'] ?? '';
        $consulta = $_POST['consulta'] ?? '';

        // Validar que los campos no estén vacíos
        if (empty($nombre) || empty($email) || empty($consulta)) {
            echo 'error_campos_vacios';
            exit;
        }

        // Preparar la consulta SQL
        $sql = "INSERT INTO asesorias (nombre, email, consulta, fecha) VALUES (:nombre, :email, :consulta, NOW())";
        $stmt = $conn->prepare($sql);

        // Vincular los parámetros
        $stmt->bindParam(':nombre', $nombre);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':consulta', $consulta);

        // Ejecutar la consulta
        $stmt->execute();

        // Si todo salió bien, devolver 'ok'
        echo 'ok';
    } else {
        echo 'error_metodo';
    }
} catch(PDOException $e) {
    // En caso de error, devolver mensaje de error
    echo 'error_conexion';
}
?>
