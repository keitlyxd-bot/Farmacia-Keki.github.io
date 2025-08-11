<?php
// Configuración de la base de datos (ajustar según tu configuración)
$host = 'localhost';
$dbname = 'farmacia_kekis';
$username = 'root';
$password = '';

try {
    // Conexión a la base de datos
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // Verificar si es una petición POST
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        // Obtener los datos del formulario
        $nombreCompleto = $_POST['nombreCompleto'] ?? '';
        $numeroCelular = $_POST['numeroCelular'] ?? '';
        $numeroIdentidad = $_POST['numeroIdentidad'] ?? '';
        $metodoPago = $_POST['metodoPago'] ?? '';
        $direccion = $_POST['direccion'] ?? '';
        $observaciones = $_POST['observaciones'] ?? '';
        $productos = $_POST['productos'] ?? [];
        $total = $_POST['total'] ?? 0;
        
        // Validar datos requeridos
        if (empty($nombreCompleto) || empty($numeroCelular) || empty($numeroIdentidad) || 
            empty($metodoPago) || empty($direccion)) {
            throw new Exception('Todos los campos obligatorios deben estar completos');
        }
        
        // Insertar datos del cliente
        $stmt = $pdo->prepare("
            INSERT INTO clientes (nombre_completo, numero_celular, numero_identidad, 
                                metodo_pago, direccion, observaciones, fecha_compra, total)
            VALUES (?, ?, ?, ?, ?, ?, NOW(), ?)
        ");
        
        $stmt->execute([
            $nombreCompleto,
            $numeroCelular,
            $numeroIdentidad,
            $metodoPago,
            $direccion,
            $observaciones,
            $total
        ]);
        
        $clienteId = $pdo->lastInsertId();
        
        // Insertar productos de la compra
        if (!empty($productos)) {
            $stmtProductos = $pdo->prepare("
                INSERT INTO compras_productos (cliente_id, nombre_producto, cantidad, precio_unitario, subtotal)
                VALUES (?, ?, ?, ?, ?)
            ");
            
            foreach ($productos as $producto) {
                $stmtProductos->execute([
                    $clienteId,
                    $producto['nombre'],
                    $producto['cantidad'],
                    $producto['precio'],
                    $producto['subtotal']
                ]);
            }
        }
        
        // Respuesta exitosa
        $response = [
            'success' => true,
            'message' => 'Compra registrada exitosamente',
            'cliente_id' => $clienteId
        ];
        
        header('Content-Type: application/json');
        echo json_encode($response);
        
    } else {
        throw new Exception('Método no permitido');
    }
    
} catch (PDOException $e) {
    // Error de base de datos
    $response = [
        'success' => false,
        'message' => 'Error en la base de datos: ' . $e->getMessage()
    ];
    
    header('Content-Type: application/json');
    http_response_code(500);
    echo json_encode($response);
    
} catch (Exception $e) {
    // Error general
    $response = [
        'success' => false,
        'message' => $e->getMessage()
    ];
    
    header('Content-Type: application/json');
    http_response_code(400);
    echo json_encode($response);
}
?> 