-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 31-05-2023 a las 01:53:32
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `prueba`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Consultas`
--

CREATE TABLE `Consultas` (
  `idConsultas` int(11) NOT NULL,
  `numDocumentoPaciente` int(10) NOT NULL,
  `motivoConsulta` varchar(45) NOT NULL,
  `descripcionPaciente` mediumtext NOT NULL,
  `fechaConsulta` datetime NOT NULL,
  `diagnosticoPpal` char(4) NOT NULL,
  `nombreDiagnostico` varchar(45) NOT NULL,
  `recomendaciones` mediumtext NOT NULL,
  `vrConsulta` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `programacion`
--

CREATE TABLE `programacion` (
  `id` int(11) NOT NULL,
  `titulo` varchar(30) NOT NULL,
  `lenguaje` varchar(30) NOT NULL,
  `vistas` int(10) NOT NULL,
  `nivel` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `programacion`
--

INSERT INTO `programacion` (`id`, `titulo`, `lenguaje`, `vistas`, `nivel`) VALUES
(1, 'Aprende Python', 'Python', 15000, 'Básico'),
(2, 'Python Intermedio', 'Python', 13553, 'Intermedio'),
(3, 'Aprende JavaScript', 'JavaScript', 102223, 'Básico'),
(5, 'JavaScript Intermedio', 'JavaScript', 99600, 'Intermedio'),
(7, 'Aprende Pascal', 'Pascal', 2568, 'Básico');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `test`
--

CREATE TABLE `test` (
  `id` int(11) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `apellido` varchar(30) NOT NULL,
  `edad` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `test`
--

INSERT INTO `test` (`id`, `nombre`, `apellido`, `edad`) VALUES
(1, 'Jeimy', 'Rodriguez', 41),
(2, 'Jhon Harold', 'Hincapie', 41);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Usuarios`
--

CREATE TABLE `Usuarios` (
  `tipoDocumentoUsuario` char(2) NOT NULL,
  `numDocumentoUsuario` int(10) NOT NULL,
  `primerApellido` varchar(45) NOT NULL,
  `segundoApellido` varchar(45) NOT NULL,
  `primerNombre` varchar(45) NOT NULL,
  `segundoNombre` varchar(45) NOT NULL,
  `codSexo` char(1) NOT NULL,
  `fechaNacimiento` date NOT NULL,
  `numeroContacto` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `Consultas`
--
ALTER TABLE `Consultas`
  ADD PRIMARY KEY (`idConsultas`);

--
-- Indices de la tabla `programacion`
--
ALTER TABLE `programacion`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `test`
--
ALTER TABLE `test`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `Usuarios`
--
ALTER TABLE `Usuarios`
  ADD PRIMARY KEY (`numDocumentoUsuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `Consultas`
--
ALTER TABLE `Consultas`
  MODIFY `idConsultas` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `programacion`
--
ALTER TABLE `programacion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `test`
--
ALTER TABLE `test`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
