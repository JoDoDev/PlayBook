-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307
-- Erstellungszeit: 13. Apr 2017 um 14:52
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
CREATE TABLE `answer` (
  `answerId` int(11) NOT NULL,
  `fk_question` int(11) NOT NULL,
  `answerText` varchar(400) NOT NULL,
  `isCorrect` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `game`
--

DROP TABLE IF EXISTS `game`;
CREATE TABLE `game` (
  `gameId` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `description` varchar(400) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `log_login`
--

DROP TABLE IF EXISTS `log_login`;
CREATE TABLE `log_login` (
  `logId` int(11) NOT NULL,
  `fk_user` int(11) NOT NULL,
  `ip` int(35) NOT NULL,
  `loginDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `question`
--

DROP TABLE IF EXISTS `question`;
CREATE TABLE `question` (
  `questionId` int(11) NOT NULL,
  `fk_topic` int(11) NOT NULL,
  `questionText` varchar(400) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `rankinglist`
--

DROP TABLE IF EXISTS `rankinglist`;
CREATE TABLE `rankinglist` (
  `rankingListId` int(11) NOT NULL,
  `fk_game` int(11) NOT NULL,
  `fk_user` int(11) NOT NULL,
  `points` double NOT NULL,
  `gameDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `session`
--

DROP TABLE IF EXISTS `session`;
CREATE TABLE `session` (
  `sessionId` int(11) NOT NULL,
  `fk_user` int(11) NOT NULL,
  `sessionKey` varchar(400) NOT NULL,
  `loginDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Daten für Tabelle `session`
--

INSERT INTO `session` (`sessionId`, `fk_user`, `sessionKey`, `loginDate`) VALUES
(5, 2, '09433606-c1a0-40f6-bd96-1f88cee5523c', '2017-04-13 14:50:57'),
(6, 1, '5f34d9c8-d825-4c6e-8455-87a241e27c8f', '2017-04-13 14:51:01');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `topic`
--

DROP TABLE IF EXISTS `topic`;
CREATE TABLE `topic` (
  `topicId` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `description` varchar(400) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `userId` int(11) NOT NULL,
  `email` varchar(140) NOT NULL,
  `password` varchar(60) NOT NULL,
  `username` varchar(18) NOT NULL,
  `joinDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `active` tinyint(1) NOT NULL DEFAULT '1' COMMENT 'Not used',
  `admin` tinyint(1) NOT NULL DEFAULT '0' COMMENT 'Not used'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Daten für Tabelle `user`
--

INSERT INTO `user` (`userId`, `email`, `password`, `username`, `joinDate`, `active`, `admin`) VALUES
(1, 'd.w@hotmail.ch', '123', 'donato', '2017-04-13 10:51:27', 1, 0),
(2, 'jonas.koller@hotmail.ch', '123', 'jonAss', '2017-04-13 13:53:01', 1, 0);

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `answer`
--
ALTER TABLE `answer`
  ADD PRIMARY KEY (`answerId`);

--
-- Indizes für die Tabelle `game`
--
ALTER TABLE `game`
  ADD PRIMARY KEY (`gameId`);

--
-- Indizes für die Tabelle `log_login`
--
ALTER TABLE `log_login`
  ADD PRIMARY KEY (`logId`);

--
-- Indizes für die Tabelle `question`
--
ALTER TABLE `question`
  ADD PRIMARY KEY (`questionId`);

--
-- Indizes für die Tabelle `rankinglist`
--
ALTER TABLE `rankinglist`
  ADD PRIMARY KEY (`rankingListId`),
  ADD KEY `rankingListId` (`rankingListId`);

--
-- Indizes für die Tabelle `session`
--
ALTER TABLE `session`
  ADD PRIMARY KEY (`sessionId`);

--
-- Indizes für die Tabelle `topic`
--
ALTER TABLE `topic`
  ADD PRIMARY KEY (`topicId`);

--
-- Indizes für die Tabelle `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`userId`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `username` (`username`),
  ADD KEY `userId` (`userId`),
  ADD KEY `userId_2` (`userId`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `answer`
--
ALTER TABLE `answer`
  MODIFY `answerId` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT für Tabelle `game`
--
ALTER TABLE `game`
  MODIFY `gameId` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT für Tabelle `log_login`
--
ALTER TABLE `log_login`
  MODIFY `logId` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT für Tabelle `question`
--
ALTER TABLE `question`
  MODIFY `questionId` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT für Tabelle `rankinglist`
--
ALTER TABLE `rankinglist`
  MODIFY `rankingListId` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT für Tabelle `session`
--
ALTER TABLE `session`
  MODIFY `sessionId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT für Tabelle `topic`
--
ALTER TABLE `topic`
  MODIFY `topicId` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT für Tabelle `user`
--
ALTER TABLE `user`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
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
