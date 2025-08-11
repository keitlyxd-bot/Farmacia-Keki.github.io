-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS farmacia_kekis CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE farmacia_kekis;

-- Tabla de clientes
CREATE TABLE IF NOT EXISTS clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_completo VARCHAR(255) NOT NULL,
    numero_celular VARCHAR(20) NOT NULL,
    numero_identidad VARCHAR(20) NOT NULL,
    metodo_pago VARCHAR(50) NOT NULL,
    direccion TEXT NOT NULL,
    observaciones TEXT,
    fecha_compra DATETIME DEFAULT CURRENT_TIMESTAMP,
    total DECIMAL(10,2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Tabla de productos de las compras
CREATE TABLE IF NOT EXISTS compras_productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT NOT NULL,
    nombre_producto VARCHAR(255) NOT NULL,
    cantidad INT NOT NULL,
    precio_unitario DECIMAL(10,2) NOT NULL,
    subtotal DECIMAL(10,2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (cliente_id) REFERENCES clientes(id) ON DELETE CASCADE
);

-- Tabla de productos del catálogo (opcional para futuras expansiones)
CREATE TABLE IF NOT EXISTS productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT,
    precio DECIMAL(10,2) NOT NULL,
    categoria VARCHAR(100),
    imagen VARCHAR(255),
    stock INT DEFAULT 0,
    activo BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Índices para mejorar el rendimiento
CREATE INDEX idx_clientes_fecha ON clientes(fecha_compra);
CREATE INDEX idx_clientes_identidad ON clientes(numero_identidad);
CREATE INDEX idx_compras_productos_cliente ON compras_productos(cliente_id);
CREATE INDEX idx_productos_categoria ON productos(categoria);
CREATE INDEX idx_productos_activo ON productos(activo);

-- Insertar algunos productos de ejemplo (opcional)
INSERT INTO productos (nombre, descripcion, precio, categoria, imagen, stock) VALUES
('Panadol 500mg', 'Caja con 24 tabletas', 45.00, 'medicamentos', 'imagenes/panadol.png', 100),
('Ibuprofeno 200mg', 'Caja con 12 tabletas', 50.00, 'medicamentos', 'imagenes/ibuprofeno.jpg', 80),
('Vitamina C 1000mg', 'Frasco con 60 tabletas', 90.00, 'vitaminas', 'imagenes/vitamina c.png', 50),
('Protector Solar Eucerin', 'FPS 50, 50ml', 180.00, 'cuidado', 'imagenes/protector solar.jpeg', 30),
('Termómetro Digital', 'Termómetro clínico de alta precisión', 120.00, 'suministros', 'imagenes/termometro.png', 25);

-- Crear vista para reportes de ventas
CREATE VIEW vista_ventas AS
SELECT 
    c.id,
    c.nombre_completo,
    c.numero_celular,
    c.metodo_pago,
    c.total,
    c.fecha_compra,
    COUNT(cp.id) as cantidad_productos
FROM clientes c
LEFT JOIN compras_productos cp ON c.id = cp.cliente_id
GROUP BY c.id, c.nombre_completo, c.numero_celular, c.metodo_pago, c.total, c.fecha_compra;

-- Crear procedimiento almacenado para obtener reporte de ventas por fecha
DELIMITER //
CREATE PROCEDURE ReporteVentasPorFecha(IN fecha_inicio DATE, IN fecha_fin DATE)
BEGIN
    SELECT 
        DATE(fecha_compra) as fecha,
        COUNT(*) as total_compras,
        SUM(total) as total_ventas,
        AVG(total) as promedio_venta
    FROM clientes 
    WHERE DATE(fecha_compra) BETWEEN fecha_inicio AND fecha_fin
    GROUP BY DATE(fecha_compra)
    ORDER BY fecha;
END //
DELIMITER ; 