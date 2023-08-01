-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 01, 2023 at 08:08 PM
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
(51, 'Sahar Saba Amiri', 'Hello everyone, the page that you are locating right now is a public page and if you publish your text everyone who use this app can read it. So, please share beneficial information in here that everyone can use it. I am happy that I could develop a basic version of Robo bot with JavaScript, PHP and SQL I will try to change its version to an AI version at future. For now, enjoy the App And support me by sharing it and put a star on my GitHub repositories. https://github.com/Sahar-SE'),
(52, 'Bill Gates', 'Gates often shares the idea that failure is a great teacher. He believes that success can sometimes lead to arrogance, and failure, on the other hand, provides a chance to learn and grow. He has been quoted saying, \"It\'s fine to celebrate success but it is more important to heed the lessons of failure\".\r\nGates is known for his philanthropic efforts, especially in healthcare and education. He often emphasizes the importance of investing in the poor and making the world a sustainable place for everyone. He has been quoted saying, \"We make the future sustainable when we invest in the poor, not when we insist on their suffering\".'),
(53, 'Mark Zuckerberg', 'Zuckerberg talks about overcoming self-doubt and believing in oneself. He discusses his early days at Facebook, when he felt like an imposter and questioned if he was doing the right thing. He emphasizes that it\'s normal to feel unsure when you\'re doing something that hasn\'t been done before, and it\'s important to keep moving forward.\r\nZuckerberg believes that creating a sense of purpose for others is as important as finding your own. He discusses the importance of taking on meaningful projects together, redefining equality, and building community across the world. He emphasizes that great things are achieved when people come together for a common goal.');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
