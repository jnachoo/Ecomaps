-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-06-2023 a las 22:51:55
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ecomaps`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `publicacion`
--

CREATE TABLE `publicacion` (
  `idPublicacion` int(10) NOT NULL,
  `titulo` char(100) NOT NULL,
  `descripcion` text NOT NULL,
  `imagen` mediumblob DEFAULT NULL,
  `email` char(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `puntoreciclaje`
--

CREATE TABLE `puntoreciclaje` (
  `idPunto` char(100) NOT NULL,
  `latitud` double NOT NULL,
  `longitud` double NOT NULL,
  `descripcion` text NOT NULL,
  `email` char(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipousuario`
--

CREATE TABLE `tipousuario` (
  `idTipo` int(3) NOT NULL,
  `tipo` char(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tipousuario`
--

INSERT INTO `tipousuario` (`idTipo`, `tipo`) VALUES
(1, 'Usuario'),
(2, 'Administrador');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `email` char(150) NOT NULL,
  `nombre` char(150) NOT NULL,
  `rut` char(20) NOT NULL,
  `telefono` char(9) NOT NULL,
  `fechaNac` date NOT NULL,
  `region` char(100) NOT NULL,
  `comuna` char(100) NOT NULL,
  `contrasenya` text NOT NULL,
  `idTipo` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`email`, `nombre`, `rut`, `telefono`, `fechaNac`, `region`, `comuna`, `contrasenya`, `idTipo`) VALUES
('nicolas.acuna.o@mail.pucv.cl', 'Nicolás Acuña', '20.881.821-K', '956186303', '2001-10-10', 'Valparaiso', 'Viña del Mar', 'Hola123', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `publicacion`
--
ALTER TABLE `publicacion`
  ADD PRIMARY KEY (`idPublicacion`),
  ADD KEY `foreign_key_email2` (`email`);

--
-- Indices de la tabla `puntoreciclaje`
--
ALTER TABLE `puntoreciclaje`
  ADD PRIMARY KEY (`idPunto`),
  ADD KEY `foreign_key_email1` (`email`);

--
-- Indices de la tabla `tipousuario`
--
ALTER TABLE `tipousuario`
  ADD PRIMARY KEY (`idTipo`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`email`),
  ADD KEY `foreign_key_idTipo` (`idTipo`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `publicacion`
--
ALTER TABLE `publicacion`
  ADD CONSTRAINT `foreign_key_email2` FOREIGN KEY (`email`) REFERENCES `usuario` (`email`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `puntoreciclaje`
--
ALTER TABLE `puntoreciclaje`
  ADD CONSTRAINT `foreign_key_email1` FOREIGN KEY (`email`) REFERENCES `usuario` (`email`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `foreign_key_idTipo` FOREIGN KEY (`idTipo`) REFERENCES `tipousuario` (`idTipo`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
