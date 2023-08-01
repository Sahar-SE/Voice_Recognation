-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 01, 2023 at 07:22 PM
-- Server version: 10.3.16-MariaDB
-- PHP Version: 7.3.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `publictions`
--

-- --------------------------------------------------------

--
-- Table structure for table `article`
--

CREATE TABLE `article` (
  `id` int(11) NOT NULL,
  `author` varchar(100) NOT NULL,
  `passage` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `article`
--

INSERT INTO `article` (`id`, `author`, `passage`) VALUES
(9, 'Saba Amiri1', 'I am here to help you. Please enter your name and click the start button that I can record your voice.He something Emery won. This is your text. I am here to help you.Please enter your name and click the start button that I can record your voice.'),
(10, 'Saba Amiri', 'I am here to help you. Please enter your name and click the start button that I can record your voice.'),
(12, 'Saba Amiri', 'Bellevue.Please enter your name and click the start button that I can record your voice.'),
(46, 'sahar ibnas', 'Uh, hero.Your name is not here so your name is Rubio and I just wanted to say that I hope your work correctly while I\'m representing your project to the interviewer and it will help me to become successful at MLH.I just want to say something else also because you know, as you know, we have to.And have a good design and when I talk a lot and we will have more more good design in on on our publications page.I don\'t know why you are stopping stop recording at production mode but in my local PC are doing great chi.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `article`
--
ALTER TABLE `article`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `article`
--
ALTER TABLE `article`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
