/*=============================================
              TABLA USUARIOS
===============================================*/

CREATE TABLE usuarios (
	id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    nombre VARCHAR(150) NOT NULL,
    correo VARCHAR(100) NOT NULL UNIQUE,
    rol VARCHAR(20) NOT NULL,
    contrasena VARCHAR(100) NOT NULL
);

/*=============================================
              TABLA LIBROS
===============================================*/
CREATE TABLE libros (
	id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    autor VARCHAR(255) NOT NULL,
    isb VARCHAR(255) NOT NULL UNIQUE,
    disponible BOOLEAN NOT NULL /* TODO: Evaluar si el estado debe ser por dafault TRUE --> Disponible */
);


/*=============================================
              TABLA PRESTAMOS
===============================================*/
CREATE TABLE prestamos (
	id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    usuario_id INT NOT NULL,
    libro_id INT NOT NULL,
    fecha_prestamo DATE NOT NULL,
    fecha_devolucion DATE,
    
    CONSTRAINT fk_prestamo_usuario 
    FOREIGN KEY(usuario_id) 
    REFERENCES usuarios(id), 
	
    CONSTRAINT fk_prestamo_LIBRO 
    FOREIGN KEY(libro_id) 
    REFERENCES libros(id)
    );


/*=============================================
              DATOS DE PRUEBA
===============================================*/
INSERT INTO usuarios
(nombre, correo, password, rol)
VALUES
(
    'Administrador UNTEC',
    'admin@untec.cl',
    '1234',
    'ADMIN'
),
(
    'Estudiante UNTEC',
    'estudiante@untec.cl',
    '1234',
    'ESTUDIANTE'
);


INSERT INTO libros
(titulo, autor, isbn, disponible)
VALUES
(
    'Clean Code',
    'Robert C. Martin',
    '9780132350884',
    TRUE
),
(
    'Effective Java',
    'Joshua Bloch',
    '9780134685991',
    TRUE
),
(
    'Head First Java',
    'Kathy Sierra',
    '9781491910771',
    TRUE
),
(
    'Java: The Complete Reference',
    'Herbert Schildt',
    '9781260463415',
    TRUE
);








