CREATE DATABASE  IF NOT EXISTS `emaildb` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `emaildb`;
-- MySQL dump 10.13  Distrib 5.7.17, for macos10.12 (x86_64)
--
-- Host: localhost    Database: emaildb
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
-- Table structure for table `emails`
--

DROP TABLE IF EXISTS `emails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `emails` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(45) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `emails`
--

LOCK TABLES `emails` WRITE;
/*!40000 ALTER TABLE `emails` DISABLE KEYS */;
INSERT INTO `emails` VALUES (1,'hirmk@llkasf.net','2017-05-31 13:10:04','2017-05-31 13:10:04'),(3,'hiramk@comcast.net','2017-05-31 13:15:27','2017-05-31 13:15:27'),(4,'hiramk@comcast.net','2017-05-31 13:19:39','2017-05-31 13:19:39'),(5,'hiramk@comcast.net','2017-05-31 13:20:22','2017-05-31 13:20:22'),(6,'hiramk@comcast.net','2017-05-31 13:20:35','2017-05-31 13:20:35'),(7,'hiramk@comcast.net','2017-05-31 13:22:18','2017-05-31 13:22:18'),(8,'hiramk@comcast.net','2017-05-31 13:23:20','2017-05-31 13:23:20'),(12,'hiramk@comcast.net','2017-05-31 13:32:32','2017-05-31 13:32:32'),(14,'hiramk@comcast.net','2017-05-31 13:34:28','2017-05-31 13:34:28'),(16,'hiramk@comcast.net','2017-05-31 13:38:33','2017-05-31 13:38:33'),(17,'hiramk@comcast.net','2017-05-31 13:44:30','2017-05-31 13:44:30'),(18,'hiramk@comcast.net','2017-05-31 13:44:57','2017-05-31 13:44:57'),(19,'hiramk@comcast.net','2017-05-31 13:45:30','2017-05-31 13:45:30'),(20,'hiramk@comcast.net','2017-05-31 13:45:42','2017-05-31 13:45:42'),(21,'hiramk@comcast.net','2017-05-31 13:54:10','2017-05-31 13:54:10'),(22,'hiramk@comcast.net','2017-05-31 14:06:23','2017-05-31 14:06:23'),(24,'hiramk@comcast.net','2017-05-31 14:10:31','2017-05-31 14:10:31'),(26,'hiramk@comcast.net','2017-05-31 14:17:01','2017-05-31 14:17:01'),(28,'hiramk@comcast.net','2017-05-31 14:17:42','2017-05-31 14:17:42'),(29,'hiramk@comcast.net','2017-05-31 14:18:40','2017-05-31 14:18:40'),(30,'hiramk@comcast.net','2017-05-31 14:21:01','2017-05-31 14:21:01'),(31,'yd_coleman@hotmail.com','2017-05-31 14:40:46','2017-05-31 14:40:46'),(32,'yd_coleman@hotmail.com','2017-05-31 14:41:22','2017-05-31 14:41:22');
/*!40000 ALTER TABLE `emails` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-05-31 14:46:19
