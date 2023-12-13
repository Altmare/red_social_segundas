CREATE DATABASE IF NOT EXISTS redsocial;

USE redsocial;

-- Tabla de Usuarios
CREATE TABLE Usuarios (
    id_usuario INT PRIMARY KEY,
    nombre_usuario VARCHAR(50) NOT NULL,    
    correo_electronico VARCHAR(100) UNIQUE NOT NULL,
    contraseña VARCHAR(255) NOT NULL,
    fecha_registro DATE NOT NULL
);

-- Tabla de Perfiles
CREATE TABLE Perfiles (
    id_perfil INT PRIMARY KEY,
    id_usuario INT,
    nombre_completo VARCHAR(100),
    fecha_nacimiento DATE,
    foto_perfil VARCHAR(255),
    descripción TEXT,
    FOREIGN KEY (id_usuario) REFERENCES Usuarios(id_usuario)
);

-- Tabla de Publicaciones
CREATE TABLE Publicaciones (
    id_publicacion INT PRIMARY KEY,
    id_usuario INT,
    contenido TEXT NOT NULL,
    fecha_publicacion DATETIME NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES Usuarios(id_usuario)
);

-- Tabla de Amigos
CREATE TABLE Amigos (
    id_amistad INT PRIMARY KEY,
    id_usuario1 INT,
    id_usuario2 INT,
    fecha_amistad DATE NOT NULL,
    FOREIGN KEY (id_usuario1) REFERENCES Usuarios(id_usuario),
    FOREIGN KEY (id_usuario2) REFERENCES Usuarios(id_usuario)
);

-- Tabla de Comentarios
CREATE TABLE Comentarios (
    id_comentario INT PRIMARY KEY,
    id_usuario INT,
    id_publicacion INT,
    contenido TEXT NOT NULL,
    fecha_comentario DATETIME NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES Usuarios(id_usuario),
    FOREIGN KEY (id_publicacion) REFERENCES Publicaciones(id_publicacion)
);

-- Tabla de Likes
CREATE TABLE Likes (
    id_like INT PRIMARY KEY,
    id_usuario INT,
    id_publicacion INT,
    fecha_like DATETIME NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES Usuarios(id_usuario),
    FOREIGN KEY (id_publicacion) REFERENCES Publicaciones(id_publicacion)
);





-- ========== INSERTS =============================


-- Inserts para Usuarios
INSERT INTO Usuarios (id_usuario, nombre_usuario, correo_electronico, contraseña, fecha_registro)
VALUES
    (1, 'u1', 'u1@email.com', '123', '2023-01-01'),
    (2, 'u2', 'u2@email.com', '123', '2023-02-15'),
    (3, 'u3', 'u3@email.com', '123', '2023-03-20');

-- Inserts para Perfiles
INSERT INTO Perfiles (id_perfil, id_usuario, nombre_completo, fecha_nacimiento, foto_perfil, descripción)
VALUES
    (1, 1, 'Nombre1 Apellido1', '1990-05-10', 'foto1.jpg', 'Descripción1'),
    (2, 2, 'Nombre2 Apellido2', '1985-08-22', 'foto2.jpg', 'Descripción2'),
    (3, 3, 'Nombre3 Apellido3', '1998-03-05', 'foto3.jpg', 'Descripción3');

-- Inserts para Publicaciones
INSERT INTO Publicaciones (id_publicacion, id_usuario, contenido, fecha_publicacion)
VALUES
    (1, 1, 'Contenido de la publicación 1', '2023-01-02 12:30:00'),
    (2, 2, 'Contenido de la publicación 2', '2023-02-16 15:45:00'),
    (3, 3, 'Contenido de la publicación 3', '2023-03-21 10:00:00');

-- Inserts para Amigos
INSERT INTO Amigos (id_amistad, id_usuario1, id_usuario2, fecha_amistad)
VALUES
    (1, 1, 2, '2023-01-05'),
    (2, 1, 3, '2023-02-18'),
    (3, 2, 3, '2023-03-25');

-- Inserts para Comentarios
INSERT INTO Comentarios (id_comentario, id_usuario, id_publicacion, contenido, fecha_comentario)
VALUES
    (1, 1, 1, 'Comentario 1', '2023-01-03 13:00:00'),
    (2, 2, 2, 'Comentario 2', '2023-02-17 16:00:00'),
    (3, 3, 3, 'Comentario 3', '2023-03-22 11:30:00');

-- Inserts para Likes
INSERT INTO Likes (id_like, id_usuario, id_publicacion, fecha_like)
VALUES
    (1, 1, 2, '2023-01-04 14:30:00'),
    (2, 2, 3, '2023-02-19 17:15:00'),
    (3, 3, 1, '2023-03-23 09:45:00');
