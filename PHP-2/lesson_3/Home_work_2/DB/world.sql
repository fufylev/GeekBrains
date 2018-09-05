-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Jul 01, 2018 at 05:36 AM
-- Server version: 5.6.38
-- PHP Version: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `world`
--

-- --------------------------------------------------------

--
-- Table structure for table `city`
--

CREATE TABLE `city` (
  `ID` int(10) NOT NULL,
  `Name` varchar(64) NOT NULL,
  `CountryCode` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `city`
--

INSERT INTO `city` (`ID`, `Name`, `CountryCode`) VALUES
(1, 'Washington', 1),
(7, 'Moscow', 7);

-- --------------------------------------------------------

--
-- Table structure for table `country`
--

CREATE TABLE `country` (
  `Code` int(10) NOT NULL,
  `Name` varchar(64) NOT NULL,
  `Region` varchar(64) NOT NULL,
  `Population` varchar(64) NOT NULL,
  `Capital` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `country`
--

INSERT INTO `country` (`Code`, `Name`, `Region`, `Population`, `Capital`) VALUES
(1, 'USA', 'North America', '327000000', '1'),
(7, 'Russia', 'Eurasia', '146804372', '7');

-- --------------------------------------------------------

--
-- Table structure for table `countrylanguage`
--

CREATE TABLE `countrylanguage` (
  `ID` int(10) NOT NULL,
  `Language` varchar(64) NOT NULL,
  `IsOfficial` varchar(64) NOT NULL,
  `CountryCode` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `countrylanguage`
--

INSERT INTO `countrylanguage` (`ID`, `Language`, `IsOfficial`, `CountryCode`) VALUES
(1, 'Russian', 'T', 7),
(2, 'English', 'T', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `city`
--
ALTER TABLE `city`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `country`
--
ALTER TABLE `country`
  ADD PRIMARY KEY (`Code`);

--
-- Indexes for table `countrylanguage`
--
ALTER TABLE `countrylanguage`
  ADD PRIMARY KEY (`ID`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
