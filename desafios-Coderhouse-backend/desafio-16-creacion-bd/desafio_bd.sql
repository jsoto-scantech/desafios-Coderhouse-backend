
/*Cracion de la base de datos */ 
CREATE DATABASE prueba CHARACTER SET utf8;


/* Creacion de la tabla */
CREATE TABLE items (
    nombre varchar(255) NOT NULL,
    categoria varchar(255) NOT NULL,
    stock int UNSIGNED,
    id int auto_increment NOT NULL,
    primary key(id)
);

/* Insertando datos a mi tabla items */
INSERT INTO items (nombre, categoria, stock) VALUES ("Fideos", "Harina", 20 );
INSERT INTO items (nombre, categoria, stock) VALUES ("Leche", "Lacteos", 30);
INSERT INTO items (nombre, categoria, stock) VALUES ("Crema", "Lacteos", 15 );


/* Mostrando todo mis datos */
SELECT *  FROM items;

/* Borrando Item */
DELETE  FROM  items where id = 1;

/* Actualizando valor */
UPDATE items SET stock =45  where id = 2;

/* Mostrando todo los datos ya actualizados */
SELECT * FROM items;


