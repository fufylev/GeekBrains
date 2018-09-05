-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Jun 30, 2018 at 04:20 PM
-- Server version: 5.6.38
-- PHP Version: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `my_bd`
--

-- --------------------------------------------------------

--
-- Table structure for table `my_gallery`
--

CREATE TABLE `my_gallery` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `min_img_path` varchar(128) NOT NULL,
  `max_img_path` varchar(128) NOT NULL,
  `looks` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `my_gallery`
--

INSERT INTO `my_gallery` (`id`, `name`, `min_img_path`, `max_img_path`, `looks`) VALUES
(1, 'pic#1', 'img/min/1.jpg', 'img/max/1.jpg', 8),
(2, 'pic#2', 'img/min/2.jpg', 'img/max/2.jpg', 10),
(3, 'pic#3', 'img/min/3.jpg', 'img/max/3.jpg', 48),
(4, 'pic#4', 'img/min/4.jpg', 'img/max/4.jpg', 2),
(5, 'pic#5', 'img/min/5.jpg', 'img/max/5.jpg', 2),
(6, 'pic#6', 'img/min/6.jpg', 'img/max/6.jpg', 12),
(7, 'pic#7', 'img/min/7.jpg', 'img/max/7.jpg', 3),
(8, 'pic#8', 'img/min/8.jpg', 'img/max/8.jpg', 18),
(9, 'pic#9', 'img/min/9.jpg', 'img/max/9.jpg', 68),
(10, 'pic#10', 'img/min/10.jpg', 'img/max/10.jpg', 4),
(11, 'pic#11', 'img/min/11.jpg', 'img/max/11.jpg', 3),
(12, 'pic#12', 'img/min/12.jpg', 'img/max/12.jpg', 4);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `my_gallery`
--
ALTER TABLE `my_gallery`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `my_gallery`
--
ALTER TABLE `my_gallery`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
