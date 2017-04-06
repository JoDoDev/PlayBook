-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Erstellungszeit: 06. Apr 2017 um 18:38
-- Server-Version: 10.1.16-MariaDB
-- PHP-Version: 7.0.9

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

CREATE TABLE `game` (
  `gameId` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `description` varchar(400) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `log_login`
--

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

CREATE TABLE `question` (
  `questionId` int(11) NOT NULL,
  `fk_topic` int(11) NOT NULL,
  `questionText` varchar(400) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `rankinglist`
--

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

CREATE TABLE `session` (
  `sessionId` int(11) NOT NULL,
  `fk_user` int(11) NOT NULL,
  `sessionKey` varchar(400) NOT NULL,
  `loginDate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `topic`
--

CREATE TABLE `topic` (
  `topicId` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `description` varchar(400) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `user`
--

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
  ADD PRIMARY KEY (`rankingListId`);

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
  ADD PRIMARY KEY (`userId`);

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
  MODIFY `sessionId` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT für Tabelle `topic`
--
ALTER TABLE `topic`
  MODIFY `topicId` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT für Tabelle `user`
--
ALTER TABLE `user`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
