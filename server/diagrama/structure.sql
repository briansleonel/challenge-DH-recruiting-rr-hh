CREATE DATABASE IF NOT EXISTS `recruitingrh` DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish_ci;

USE `recruitingrh`;

DROP TABLE IF EXISTS `aspirantes`;
DROP TABLE IF EXISTS `profesiones`;

CREATE TABLE `profesiones` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `aspirantes` (
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `dni` VARCHAR(12) NOT NULL,
    `nombre` VARCHAR(200) NOT NULL,
    `apellido` VARCHAR(150) NOT NULL,
    `email` VARCHAR(250) NOT NULL,
    `telefono` VARCHAR(100) NOT NULL,
    `linkedin` VARCHAR(600) NOT NULL,
    `fecha_nac` DATE NOT NULL,
    `sexo` VARCHAR(50) NOT NULL,
    `imagen` VARCHAR(200) NOT NULL,
    `profesion_id` INT(11) NOT NULL,
    PRIMARY KEY (`id`),
    KEY `profesion` (`profesion_id`),
    CONSTRAINT `profesion` FOREIGN KEY (`profesion_id`)
        REFERENCES `profesiones` (`id`)
);