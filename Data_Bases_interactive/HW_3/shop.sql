-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: May 13, 2019 at 07:58 PM
-- Server version: 5.7.25
-- PHP Version: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `shop`
--

-- --------------------------------------------------------

--
-- Table structure for table `storehouse_products`
--

CREATE TABLE `storehouse_products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `storehouse_id` int(10) UNSIGNED DEFAULT NULL,
  `product_id` int(10) UNSIGNED DEFAULT NULL,
  `value` int(10) UNSIGNED DEFAULT NULL COMMENT 'Запас товарной позиции на складе',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Запасы на складе';

--
-- Dumping data for table `storehouse_products`
--

INSERT INTO `storehouse_products` (`id`, `storehouse_id`, `product_id`, `value`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 0, '2019-05-13 17:50:28', '2019-05-13 17:50:28'),
(2, 1, 2, 2500, '2019-05-13 17:50:28', '2019-05-13 17:50:28'),
(3, 1, 3, 0, '2019-05-13 17:50:28', '2019-05-13 17:50:28'),
(4, 1, 4, 30, '2019-05-13 17:50:28', '2019-05-13 17:50:28'),
(5, 1, 5, 500, '2019-05-13 17:50:28', '2019-05-13 17:50:28'),
(6, 1, 6, 1, '2019-05-13 17:50:28', '2019-05-13 17:50:28');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `storehouse_products`
--
ALTER TABLE `storehouse_products`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `storehouse_products`
--
ALTER TABLE `storehouse_products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
