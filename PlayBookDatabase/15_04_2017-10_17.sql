-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307
-- Erstellungszeit: 15. Apr 2017 um 16:35
-- Server-Version: 10.1.21-MariaDB
-- PHP-Version: 7.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `playbook`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `answer`
--

DROP TABLE IF EXISTS `answer`;
CREATE TABLE IF NOT EXISTS `answer` (
  `answerId` int(11) NOT NULL AUTO_INCREMENT,
  `fk_question` int(11) NOT NULL,
  `answerText` varchar(400) NOT NULL,
  `isCorrect` tinyint(1) NOT NULL,
  PRIMARY KEY (`answerId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `game`
--

DROP TABLE IF EXISTS `game`;
CREATE TABLE IF NOT EXISTS `game` (
  `gameId` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `description` varchar(400) NOT NULL,
  PRIMARY KEY (`gameId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `log_login`
--

DROP TABLE IF EXISTS `log_login`;
CREATE TABLE IF NOT EXISTS `log_login` (
  `logId` int(11) NOT NULL AUTO_INCREMENT,
  `fk_user` int(11) NOT NULL,
  `ip` int(35) NOT NULL,
  `loginDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`logId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `question`
--

DROP TABLE IF EXISTS `question`;
CREATE TABLE IF NOT EXISTS `question` (
  `questionId` int(11) NOT NULL AUTO_INCREMENT,
  `fk_topic` int(11) NOT NULL,
  `questionText` varchar(400) NOT NULL,
  PRIMARY KEY (`questionId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `rankinglist`
--

DROP TABLE IF EXISTS `rankinglist`;
CREATE TABLE IF NOT EXISTS `rankinglist` (
  `rankingListId` int(11) NOT NULL AUTO_INCREMENT,
  `fk_game` int(11) NOT NULL,
  `fk_user` int(11) NOT NULL,
  `points` double NOT NULL,
  `gameDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`rankingListId`),
  KEY `rankingListId` (`rankingListId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `session`
--

DROP TABLE IF EXISTS `session`;
CREATE TABLE IF NOT EXISTS `session` (
  `sessionId` int(11) NOT NULL AUTO_INCREMENT,
  `fk_user` int(11) NOT NULL,
  `sessionKey` varchar(400) NOT NULL,
  `loginDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`sessionId`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8;

--
-- Daten für Tabelle `session`
--

INSERT INTO `session` (`sessionId`, `fk_user`, `sessionKey`, `loginDate`) VALUES
(6, 1, '5f34d9c8-d825-4c6e-8455-87a241e27c8f', '2017-04-13 14:51:01'),
(7, 1, '612a2f66-f7c5-478b-8761-6fca43dce0fc', '2017-04-13 16:15:12');

--
-- Trigger `session`
--
DROP TRIGGER IF EXISTS `turn event sheduler on`;
DELIMITER $$
CREATE TRIGGER `turn event sheduler on` AFTER INSERT ON `session` FOR EACH ROW SET GLOBAL event_scheduler = ON
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `topic`
--

DROP TABLE IF EXISTS `topic`;
CREATE TABLE IF NOT EXISTS `topic` (
  `topicId` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `description` varchar(400) NOT NULL,
  PRIMARY KEY (`topicId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `userId` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(140) NOT NULL,
  `password` varchar(60) NOT NULL,
  `username` varchar(140) NOT NULL,
  `joinDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `active` tinyint(1) NOT NULL DEFAULT '1' COMMENT 'Not used',
  `admin` tinyint(1) NOT NULL DEFAULT '0' COMMENT 'Not used',
  PRIMARY KEY (`userId`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `username` (`username`),
  KEY `userId` (`userId`),
  KEY `userId_2` (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;

--
-- Daten für Tabelle `user`
--

INSERT INTO `user` (`userId`, `email`, `password`, `username`, `joinDate`, `active`, `admin`) VALUES
(1, 'd.w@hotmail.ch', '123', 'donato', '2017-04-13 10:51:27', 1, 0),
(2, 'jonas.koller@hotmail.ch', '123', 'jonAss', '2017-04-13 13:53:01', 1, 0);


--
-- Metadaten
--
USE `phpmyadmin`;

--
-- Metadaten für Tabelle answer
--

--
-- Metadaten für Tabelle game
--

--
-- Metadaten für Tabelle log_login
--

--
-- Metadaten für Tabelle question
--

--
-- Metadaten für Tabelle rankinglist
--

--
-- Metadaten für Tabelle session
--

--
-- Metadaten für Tabelle topic
--

--
-- Metadaten für Tabelle user
--

--
-- Metadaten für Datenbank playbook
--

DELIMITER $$
--
-- Ereignisse
--
DROP EVENT `deleteoldsessions`$$
CREATE DEFINER=`root`@`localhost` EVENT `deleteoldsessions` ON SCHEDULE EVERY 1 HOUR STARTS '2017-03-01 00:00:00' ENDS '2030-04-10 00:00:00' ON COMPLETION NOT PRESERVE ENABLE DO DELETE FROM `session` WHERE DATEDIFF(NOW(),`loginDate`) > 3$$

DELIMITER ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
