CREATE DATABASE  IF NOT EXISTS `walldb` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `walldb`;
-- MySQL dump 10.13  Distrib 5.7.17, for macos10.12 (x86_64)
--
-- Host: localhost    Database: walldb
-- ------------------------------------------------------
-- Server version	5.6.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `comment` text,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  `message_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_comments_users1_idx` (`user_id`),
  KEY `fk_comments_messages1_idx` (`message_id`),
  CONSTRAINT `fk_comments_messages1` FOREIGN KEY (`message_id`) REFERENCES `messages` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_comments_users1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (2,'ok I got it','2017-06-02 03:28:39','2017-06-02 03:28:39',1,56),(3,'That makes no since','2017-06-02 03:31:56','2017-06-02 03:31:56',1,56),(5,'What you are saying is pertinent but not relevant to this discussion, start a new thread!','2017-06-02 10:29:30','2017-06-02 10:29:30',1,60);
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `messages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `message` text,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_messages_users_idx` (`user_id`),
  CONSTRAINT `fk_messages_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messages`
--

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
INSERT INTO `messages` VALUES (56,'Choosing ground cutouts on the basis of the signal\'s speed is only part of the story. The oscillator, and the \'high speed signals\' your link talks about, are different situations.  The oscillator is recommended to use a specific circuit layout. This is a very small circuit. Follow the data sheet. An adjacent ground plane would introduce much C to ground. It\'s likely that the oscillator requires certain ratios of capacitance, and maximum capacitance to function properly, hence their recommendation. At the frequencies involved, for the line lengths shown, it all works, don\'t sweat it, just follow the data sheet. The \'to minimise parasitics\' statement confirms that it\'s the excess capacitance that they are concerned about. Even if it does not stop oscillation, excess C will increase power consumption, which could be an issue on lower power designs.  \'High speed signals\' crossing a ground plane from one IC to another should have a well-defined return current path close by. The simplest way to do this is with an unbroken ground plane underneath. There are other methods, if you know what you\'re doing, but the unbroken ground plane is easy to do and always works. If you introduce breaks or cutouts in the ground plane, then this disrupts the return current flow, which can cause all sorts of problems which can be quite difficult to diagnose.  It is important that when you\'ve cleared a patch of ground plane under your oscillator that you don\'t then route a different high speed signal across that area, both for problems with that signal\'s integrity, and potential problems of interference to/from ','2017-06-02 02:43:03','2017-06-02 02:43:03',1),(60,'The online documentation is your first port of call for definitive information. There is a fairly brief tutorial that gives you basic information about the language and gets you started. You can follow this by looking at the library reference for a full description of Python\'s many libraries and the language reference for a complete (though somewhat dry) explanation of Python\'s syntax. If you are looking for common Python recipes and patterns, you can browse the ActiveState Python Cookbook','2017-06-02 10:09:10','2017-06-02 10:09:10',4);
/*!40000 ALTER TABLE `messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Hiram','Neal','hiramk@comcast.net','$2b$12$rPQgnmkqdLh8OrMUWN2bqehvH/QZNf2ck.gaLT96M5yYHqPNVxRs6','2017-06-01 23:22:05','2017-06-01 23:22:05'),(2,'Hiram','Neal','hiramk@comcast.net','$2b$12$AVGWE6VqpVbbj4GtEjvV6OZTgzAjFxCRak9YUbL.o4mdeQK54USxG','2017-06-01 23:35:31','2017-06-01 23:35:31'),(3,'Hiram','Neal','hiramk@comcast.net','$2b$12$/dVdgApqlWaG4UdRBSJVReqWPj6xTWkMHNGV00OymqSGeEfaXlEsq','2017-06-01 23:46:49','2017-06-01 23:46:49'),(4,'Yolanda','Colefactor','coleeaters@justme.com','$2b$12$XrfiLL.QzQHiOKW5czYXcu9xvsFTl37L0Weml1UPQD94JI0pgbrRS','2017-06-02 10:07:29','2017-06-02 10:07:29');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-06-02 10:33:32
