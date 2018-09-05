-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 15, 2018 at 02:05 PM
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
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`id_product`, `id_session`, `quantity`, `date`) VALUES
(7, 'if5vt58lk0rgldnvp3tjor29sv', 1, '2018-06-14 14:24:04');

-- --------------------------------------------------------

--
-- Table structure for table `goods`
--

CREATE TABLE `goods` (
  `id` int(5) NOT NULL,
  `short_description` varchar(250) NOT NULL,
  `price` int(6) NOT NULL,
  `url` varchar(128) NOT NULL,
  `category` varchar(16) NOT NULL,
  `long_description` varchar(250) NOT NULL,
  `material` varchar(15) NOT NULL,
  `designer` varchar(32) NOT NULL,
  `color` varchar(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `goods`
--

INSERT INTO `goods` (`id`, `short_description`, `price`, `url`, `category`, `long_description`, `material`, `designer`, `color`) VALUES
(1, 'Pullandbear T Shirt', 55, 'img/prod-1.png', 'man', 'Pullandbear T Shirt With Cresent Bay Marina Club Print White', 'cotton', 'Pull&Bear', 'white'),
(2, 'ACQUA DI GIO POUR', 285, 'img/prod-2.png', 'women', 'A resolutely masculine fragrance born from the sea, the sun, the earth, and the breeze of a Mediterranean island. ', 'cotton', 'BINBURHAN', 'red'),
(3, 'MANGO PEOPLE T-SHIRT', 60, 'img/prod-3.png', 'man', 'Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.', 'cotton', 'BINBURHAN', 'blue'),
(4, 'GIGI BRUSHED TOP', 34, 'img/prod-4.png', 'women', 'Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.', 'cotton', 'BINBURHAN', 'white'),
(5, 'MANGO PEOPLE T-SHIRT', 67, 'img/prod-5.png', 'women', 'Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.', 'cotton', 'BINBURHAN', 'grey'),
(6, 'MANGO PEOPLE T-SHIRT', 98, 'img/prod-6.png', 'man', 'Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.', 'cotton', 'BINBURHAN', 'grey'),
(7, 'MANGO PEOPLE T-SHIRT', 112, 'img/prod-7.png', 'man', 'Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.', 'cotton', 'BINBURHAN', 'grey'),
(8, 'MANGO PEOPLE T-SHIRT', 55, 'img/prod-7.png', 'man', 'Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.', 'cotton', 'BINBURHAN', 'blue'),
(9, 'MANGO PEOPLE T-SHIRT', 65, 'img/prod-9.png', 'man', 'Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.', 'cotton', 'BINBURHAN', 'black'),
(10, 'MANGO PEOPLE T-SHIRT', 72, 'img/prod-10.png', 'man', 'Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.', 'cotton', 'BINBURHAN', 'braun'),
(11, 'MANGO PEOPLE T-SHIRT', 80, 'img/prod-11.png', 'man', 'Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.', 'cotton', 'BINBURHAN', 'grey'),
(12, 'MANGO PEOPLE T-SHIRT', 41, 'img/prod-12.png', 'man', 'Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.', 'cotton', 'BINBURHAN', 'grey'),
(13, 'MANGO PEOPLE T-SHIRT', 76, 'img/prod-13.png', 'man', 'Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.', 'cotton', 'BINBURHAN', 'blue'),
(14, 'MANGO PEOPLE T-SHIRT', 99, 'img/prod-14.png', 'man', 'Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.', 'cotton', 'BINBURHAN', 'braun'),
(15, 'MANGO PEOPLE T-SHIRT', 100, 'img/prod-15.png', 'man', 'Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.', 'cotton', 'BINBURHAN', 'blue'),
(16, 'BLAZE LEGGINGS', 50, 'img/prod-16.png', 'women', 'Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.', 'cotton', 'BINBURHAN', 'black'),
(17, 'ALEXA SWEATER', 70, 'img/prod-17.png', 'women', 'Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.', 'cotton', 'BINBURHAN', 'black'),
(18, 'ALEXA SWEATER', 44, 'img/prod-18.png', 'women', 'Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.', 'cotton', 'BINBURHAN', 'yellow'),
(19, 'AGNES TOP', 76, 'img/prod-19.png', 'women', 'Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.', 'cotton', 'BINBURHAN', 'grey');

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
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id_user` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
