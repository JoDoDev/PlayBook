-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307
-- Erstellungszeit: 20. Apr 2017 um 11:12
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
CREATE DATABASE IF NOT EXISTS `playbook` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `playbook`;

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
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8;

--
-- Daten für Tabelle `answer`
--

INSERT INTO `answer` (`answerId`, `fk_question`, `answerText`, `isCorrect`) VALUES
(1, 47, 'aswer', 0),
(2, 47, 'aswer', 0),
(3, 47, 'asdddwer', 1),
(4, 48, 'asdddwer', 1),
(5, 48, 'aswer', 0),
(6, 48, 'aswer', 0),
(7, 49, 'asdddwer', 1),
(8, 49, 'aswer', 0),
(9, 49, 'aswer', 0),
(10, 50, 'asdddwer', 1),
(11, 50, 'aswer', 0),
(12, 50, 'aswer', 0),
(13, 51, 'asdddwer', 1),
(14, 51, 'aswer', 0),
(15, 51, 'aswer', 0),
(16, 52, 'asdddwer', 1),
(17, 52, 'aswer', 0),
(18, 52, 'aswer', 0),
(19, 53, 'asdddwer', 1),
(20, 53, 'aswer', 0),
(21, 53, 'aswer', 0),
(22, 54, 'asdddwer', 1),
(23, 54, 'aswer', 0),
(24, 54, 'aswer', 0),
(25, 55, 'asdddwer', 1),
(26, 55, 'aswer', 0),
(27, 55, 'aswer', 0),
(28, 56, 'asdddwer', 1),
(29, 56, 'aswer', 0),
(30, 56, 'aswer', 0),
(31, 57, 'asdddwer', 1),
(32, 57, 'aswfasder', 0),
(33, 57, 'asfasdfawer', 0),
(34, 58, 'asdddwer', 1),
(35, 58, 'aswfasder', 0),
(36, 58, 'asfasdfawer', 0),
(37, 59, 'asdddwer', 1),
(38, 59, 'aswfasder', 0),
(39, 59, 'asfasdfawer', 0),
(40, 60, 'asdddwer', 1),
(41, 60, 'aswfasder', 0),
(42, 60, 'asfasdfawer', 0),
(43, 61, 'asdddwer', 1),
(44, 61, 'aswfasder', 0),
(45, 61, 'asfasdfawer', 0),
(46, 62, 'asdddwer', 1),
(47, 62, 'aswfasder', 0),
(48, 62, 'asfasdfawer', 0),
(49, 63, 'asdddwer', 1),
(50, 63, 'aswfasder', 0),
(51, 63, 'asfasdfawer', 0),
(52, 64, 'asdddwer', 1),
(53, 64, 'aswfasder', 0),
(54, 64, 'asfasdfawer', 0),
(55, 65, 'asdddwer', 1),
(56, 65, 'aswfasder', 0),
(57, 65, 'asfasdfawer', 0),
(58, 66, 'asdddwer', 1),
(59, 66, 'aswfasder', 0),
(60, 66, 'asfasdfawer', 0),
(61, 67, 'asdddwer', 1),
(62, 67, 'aswfasder', 0),
(63, 67, 'asfasdfawer', 0);

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
) ENGINE=InnoDB AUTO_INCREMENT=68 DEFAULT CHARSET=utf8;

--
-- Daten für Tabelle `question`
--

INSERT INTO `question` (`questionId`, `fk_topic`, `questionText`) VALUES
(47, 1, 'question 1'),
(48, 1, 'question 1'),
(49, 1, 'question 2'),
(50, 1, 'question 3'),
(51, 1, 'question 4'),
(52, 1, 'question 5'),
(53, 1, 'question 6'),
(54, 1, 'question 7'),
(55, 1, 'question 8'),
(56, 1, 'question 9'),
(57, 1, 'question 10'),
(58, 2, 'qufasestion 1'),
(59, 2, 'questfdasion 2'),
(60, 2, 'question 3'),
(61, 2, 'question 4'),
(62, 2, 'quefastion 5'),
(63, 2, 'quefasstion 6'),
(64, 2, 'qufdsestion 7'),
(65, 2, 'question 8'),
(66, 2, 'question 9'),
(67, 2, 'quadfsadestion 10');

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
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8;

--
-- Daten für Tabelle `session`
--

INSERT INTO `session` (`sessionId`, `fk_user`, `sessionKey`, `loginDate`) VALUES
(8, 1, 'e4a15563-3225-4615-86b9-eab6efaad450', '2017-04-18 14:52:24'),
(9, 1, '0cc405a9-cc0c-40b8-b092-8e4bc3895b35', '2017-04-18 15:22:20'),
(10, 1, 'dd0d8231-a8c8-47db-98f6-d52f7f4585cc', '2017-04-18 15:46:26'),
(11, 1, 'ddbad6e6-2c06-4329-8fbc-754239dee340', '2017-04-18 16:03:28'),
(12, 1, '7d62bf36-63a2-4524-84a1-2594b50131c6', '2017-04-18 16:09:11'),
(13, 1, '593cacd6-bfd5-4a1a-858b-e1eba660fb50', '2017-04-18 16:09:49'),
(14, 1, '6ab0976c-f536-4d61-9c80-9f63dd52b090', '2017-04-18 16:12:20'),
(15, 1, '5aec0e53-d364-4c89-91eb-f79c9db99137', '2017-04-18 16:32:51'),
(16, 1, 'a594e6b3-5ac6-4787-b312-0097fe98b5a5', '2017-04-18 16:34:02'),
(17, 1, '79b60224-3725-40f9-bb5f-b865625f9c37', '2017-04-18 16:35:10'),
(18, 1, '28a8127f-a179-4046-bc4a-b4db0862348e', '2017-04-18 16:51:06'),
(19, 1, '2e895cd2-c4b1-4267-8b34-15531de4d169', '2017-04-18 16:51:20'),
(20, 1, '2d89b73c-bbc2-413b-aa6c-d9bcaa02d6a9', '2017-04-18 16:51:32'),
(21, 1, '15b66dfe-773c-420e-960e-3d248dd41c67', '2017-04-18 16:52:53'),
(22, 1, 'dca5c12a-45e9-4f8f-a35f-5c3b7074a235', '2017-04-18 16:54:14'),
(23, 1, '7c1f101e-b41b-4db7-85f3-1113d18f3ac0', '2017-04-18 16:57:05'),
(24, 1, '45ce9d31-447d-4e52-ad91-e494a14287b9', '2017-04-18 16:58:28'),
(25, 1, '371ec54a-c154-449c-96ad-3f03a9505c95', '2017-04-18 16:59:48'),
(26, 1, '0e4ee4eb-e7eb-4ba2-84a8-4112edef3849', '2017-04-18 17:01:11'),
(27, 1, '37da7daf-b767-4bed-8f07-8374e617f024', '2017-04-18 17:01:48'),
(28, 1, 'ac1ac6c4-e9a7-4015-9d3d-b4d594dc73d3', '2017-04-18 17:02:39'),
(29, 1, 'ef96c33c-2c6e-455c-bd85-17a7ec1889ae', '2017-04-18 17:03:00'),
(30, 1, '5f11953c-3d24-411a-a91b-e50bc896eab4', '2017-04-18 17:05:36'),
(31, 1, '1f63b5b1-be0e-4a4c-be73-78814d3741c8', '2017-04-18 17:54:47'),
(32, 1, '0330147e-4f58-48ea-9f3e-ef6b2b801dac', '2017-04-18 17:57:49'),
(33, 3, 'ec7466d7-a23b-4fad-b9b4-a8786400fe01', '2017-04-19 21:54:00'),
(34, 4, '5858e911-bcf8-46c0-aed4-c2fdbb287a09', '2017-04-19 21:56:43'),
(35, 5, 'ac5f9ec0-546e-41fb-aada-8974f930ebf5', '2017-04-19 21:59:53'),
(36, 6, 'ee5af1a7-a59e-477c-9352-98813173c14a', '2017-04-19 22:02:53'),
(37, 7, '98aaab50-0569-493e-ae3b-64eaf5051f1c', '2017-04-19 22:04:35'),
(38, 8, 'c45b4ea7-d95e-443d-be79-587ea3987fe0', '2017-04-20 09:32:31'),
(39, 9, '4ff47459-eddb-4dbf-80fc-d3c194c68c20', '2017-04-20 09:40:17');

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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Daten für Tabelle `topic`
--

INSERT INTO `topic` (`topicId`, `name`, `description`) VALUES
(1, 'test1', 'this is the first topic'),
(2, 'test 2', 'a topic');

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
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

--
-- Daten für Tabelle `user`
--

INSERT INTO `user` (`userId`, `email`, `password`, `username`, `joinDate`, `active`, `admin`) VALUES
(1, 'd.w@hotmail.ch', '123', 'donato', '2017-04-13 10:51:27', 1, 0),
(2, 'jonas.koller@hotmail.ch', '123', 'jonAss', '2017-04-13 13:53:01', 1, 0),
(3, 'lkfdsjl2@kfjdsakl.ch', 'lskdjfalksjdflöaskdf', 'afsdkkjl', '2017-04-19 21:54:00', 1, 0),
(4, 'flaksd.alks@kldfsja.csd', 'dlksfajsdlköjfas', 'falksdjfk', '2017-04-19 21:56:43', 1, 0),
(5, 'donato.wolfisb3rg@sdkfja.ch', 'daslkjfsdjk', 'jdskljfakl', '2017-04-19 21:59:53', 1, 0),
(6, 'hallo@gmail.ch', 'doafdökljsa', 'jonastest', '2017-04-19 22:02:53', 1, 0),
(7, 'lakfjs@kjfhs.cdsk', 'doadfklsdfasd', 'dkfjaks', '2017-04-19 22:04:35', 1, 0),
(8, 'asdfasd@kjfsd.como', 'kjdfahsdlkjfhaskjdfa', 'adsfasdfsadf', '2017-04-20 09:32:31', 1, 0),
(9, 'fsds@skfd.cjds', 'falksödjflkasjdlkfjlasd', 'asasdfa', '2017-04-20 09:40:17', 1, 0);


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
