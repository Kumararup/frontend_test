-- Adminer 4.8.4 MySQL 8.0.35 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `product_name` varchar(100) NOT NULL,
  `product_image` varchar(100) NOT NULL,
  `product_color` varchar(100) NOT NULL,
  `product_category` varchar(100) NOT NULL,
  `price` float(9,2) NOT NULL,
  `currency` char(10) NOT NULL,
  `available_location` varchar(50) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `products` (`Id`, `product_name`, `product_image`, `product_color`, `product_category`, `price`, `currency`, `available_location`) VALUES
(1,    'Blue Couch 1',    'ontent_image/image1.jpg',    'Blue ',    'Couch 1',    1115.99,    'EUR',    'de-DE'),
(2,    'Yellow couch',    'ontent_image/image2.jpg',    'Yellow',    'Couch',    1000.99,    'EUR',    'de-DE'),
(3,    'Brown',    'ontent_image/image3.jpg',    'Brown',    'Couch',    1220.95,    'EUR',    'de-DE'),
(4,    'Grey couch 1',    'ontent_image/image4.jpg',    'Grey',    'couch 1',    1500.91,    'EUR',    'de-DE'),
(5,    'Blue Couch 2',    'ontent_image/image5.jpg',    'Blue ',    'couch 2',    900.00,    'EUR',    'de-DE'),
(6,    'Grey couch 1',    'ontent_image/image6.jpg',    'Grey',    'Couch 1',    990.00,    'EUR',    'de-DE');

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `active` int NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `user` (`Id`, `name`, `password`, `active`) VALUES
(1,    'user1',    'password1',    1),
(2,    'user2',    'password2',    1);

-- 2024-08-06 23:29:05
