-- Create the database and specified it for use.
CREATE DATABASE friends_db;

-- Selecting the friends database
USE friends_db;

-- Create the table users.
CREATE TABLE users(
  id int NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  PRIMARY KEY(id)
);

-- Create table answers w/ FOREIGN KEY that references the users table
CREATE TABLE answers(
  id INT NOT NULL AUTO_INCREMENT,
  answer1 VARCHAR(10) NOT NULL,
  answer2 VARCHAR(10) NOT NULL,
  answer3 VARCHAR(10) NOT NULL,
  answer4 VARCHAR(10) NOT NULL,
  answer5 VARCHAR(10) NOT NULL,
  user_id INT NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

