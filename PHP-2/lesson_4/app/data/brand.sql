-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Jul 05, 2018 at 10:09 AM
-- Server version: 5.6.38
-- PHP Version: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `brand`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id_product` int(3) NOT NULL COMMENT 'product ID',
  `id_session` varchar(32) COLLATE utf8_bin NOT NULL,
  `quantity` int(3) NOT NULL,
  `color` varchar(10) COLLATE utf8_bin NOT NULL,
  `size` int(4) NOT NULL,
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`id_product`, `id_session`, `quantity`, `color`, `size`, `date`) VALUES
(0, 'a1i2dqcj782fhsnrbnkl7ruu5r', 2, '', 0, '2018-07-05 11:07:47'),
(2, 'a1i2dqcj782fhsnrbnkl7ruu5r', 1, '', 0, '2018-07-05 10:48:21'),
(9, 'uloj2u47beuki63reflae64ke9', 1, '', 0, '2018-07-04 21:46:45');

-- --------------------------------------------------------

--
-- Table structure for table `goods`
--

CREATE TABLE `goods` (
  `id` int(5) NOT NULL,
  `short_description` text NOT NULL,
  `price` int(6) NOT NULL,
  `category` varchar(16) NOT NULL,
  `long_description` text NOT NULL,
  `material` varchar(15) NOT NULL,
  `designer` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `goods`
--

INSERT INTO `goods` (`id`, `short_description`, `price`, `category`, `long_description`, `material`, `designer`) VALUES
(1, 'Pullandbear T Shirt', 55, 'man', 'Pullandbear T Shirt With Cresent Bay Marina Club Print White', 'cotton', 'Pull&Bear'),
(2, 'ACQUA DI GIO POUR', 285, 'women', 'A resolutely masculine fragrance born from the sea, the sun, the earth, and the breeze of a Mediterranean island. ', 'cotton', 'BINBURHAN'),
(3, 'MANGO PEOPLE T-SHIRT', 60, 'man', 'Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.', 'cotton', 'BINBURHAN'),
(4, 'GIGI BRUSHED TOP', 34, 'women', 'Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.', 'cotton', 'BINBURHAN'),
(5, 'MANGO PEOPLE T-SHIRT', 67, 'women', 'Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.', 'cotton', 'BINBURHAN'),
(6, 'MANGO PEOPLE T-SHIRT', 98, 'man', 'Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.', 'cotton', 'BINBURHAN'),
(7, 'MANGO PEOPLE T-SHIRT', 112, 'man', 'Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.', 'cotton', 'BINBURHAN'),
(8, 'MANGO PEOPLE T-SHIRT', 55, 'man', 'Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.', 'cotton', 'BINBURHAN'),
(9, 'MANGO PEOPLE T-SHIRT', 65, 'man', 'Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.', 'cotton', 'BINBURHAN'),
(10, 'MANGO PEOPLE T-SHIRT', 72, 'man', 'Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.', 'cotton', 'BINBURHAN'),
(11, 'MANGO PEOPLE T-SHIRT', 80, 'man', 'Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.', 'cotton', 'BINBURHAN'),
(12, 'MANGO PEOPLE T-SHIRT', 41, 'man', 'Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.', 'cotton', 'BINBURHAN'),
(13, 'MANGO PEOPLE T-SHIRT', 76, 'man', 'Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.', 'cotton', 'BINBURHAN'),
(14, 'MANGO PEOPLE T-SHIRT', 99, 'man', 'Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.', 'cotton', 'BINBURHAN'),
(15, 'MANGO PEOPLE T-SHIRT', 100, 'man', 'Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.', 'cotton', 'BINBURHAN'),
(16, 'BLAZE LEGGINGS', 50, 'women', 'Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.', 'cotton', 'BINBURHAN'),
(17, 'ALEXA SWEATER', 70, 'women', 'Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.', 'cotton', 'BINBURHAN'),
(18, 'ALEXA SWEATER', 44, 'women', 'Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.', 'cotton', 'BINBURHAN'),
(19, 'AGNES TOP', 76, 'women', 'Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.', 'cotton', 'BINBURHAN'),
(20, 'Pullandbear T Shirt', 55, 'man', 'Pullandbear T Shirt With Cresent Bay Marina Club Print White', 'cotton', 'Pull&Bear'),
(21, 'ACQUA DI GIO POUR', 285, 'women', 'A resolutely masculine fragrance born from the sea, the sun, the earth, and the breeze of a Mediterranean island. ', 'cotton', 'BINBURHAN'),
(22, 'MANGO PEOPLE T-SHIRT', 60, 'man', 'Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.', 'cotton', 'BINBURHAN'),
(23, 'GIGI BRUSHED TOP', 34, 'women', 'Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.', 'cotton', 'BINBURHAN'),
(24, 'MANGO PEOPLE T-SHIRT', 67, 'women', 'Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.', 'cotton', 'BINBURHAN'),
(25, 'MANGO PEOPLE T-SHIRT', 98, 'man', 'Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.', 'cotton', 'BINBURHAN'),
(26, 'MANGO PEOPLE T-SHIRT', 112, 'man', 'Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.', 'cotton', 'BINBURHAN'),
(27, 'MANGO PEOPLE T-SHIRT', 55, 'man', 'Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.', 'cotton', 'BINBURHAN'),
(28, 'MANGO PEOPLE T-SHIRT', 65, 'man', 'Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.', 'cotton', 'BINBURHAN'),
(29, 'MANGO PEOPLE T-SHIRT', 72, 'man', 'Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.', 'cotton', 'BINBURHAN'),
(30, 'MANGO PEOPLE T-SHIRT', 80, 'man', 'Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.', 'cotton', 'BINBURHAN'),
(31, 'MANGO PEOPLE T-SHIRT', 41, 'man', 'Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.', 'cotton', 'BINBURHAN'),
(32, 'MANGO PEOPLE T-SHIRT', 76, 'man', 'Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.', 'cotton', 'BINBURHAN'),
(33, 'MANGO PEOPLE T-SHIRT', 99, 'man', 'Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.', 'cotton', 'BINBURHAN'),
(34, 'MANGO PEOPLE T-SHIRT', 100, 'man', 'Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.', 'cotton', 'BINBURHAN'),
(35, 'BLAZE LEGGINGS', 50, 'women', 'Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.', 'cotton', 'BINBURHAN'),
(36, 'ALEXA SWEATER', 70, 'women', 'Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.', 'cotton', 'BINBURHAN'),
(37, 'ALEXA SWEATER', 44, 'women', 'Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.', 'cotton', 'BINBURHAN'),
(38, 'AGNES TOP', 76, 'women', 'Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.', 'cotton', 'BINBURHAN');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id_user` int(50) NOT NULL,
  `login` varchar(50) NOT NULL,
  `pass` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id_user`, `login`, `pass`) VALUES
(1, 'admin', '123');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id_product`);

--
-- Indexes for table `goods`
--
ALTER TABLE `goods`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `goods`
--
ALTER TABLE `goods`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id_user` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
