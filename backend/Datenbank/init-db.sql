CREATE DATABASE IF NOT EXISTS freundebuch;
USE freundebuch;

-- Main user profiles
CREATE TABLE IF NOT EXISTS profiles (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  city VARCHAR(255) NOT NULL,
  phone VARCHAR(255) NOT NULL,
  birthday DATE NOT NULL,
  description TEXT NOT NULL,
  profile_token VARCHAR(255) UNIQUE NOT NULL -- Token to share profile
);

-- Friends' profiles
CREATE TABLE IF NOT EXISTS freundeprofiles (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_profile_id INT NOT NULL, -- Reference to main profile
  name VARCHAR(255) NOT NULL,
  city VARCHAR(255) NOT NULL,
  phone VARCHAR(255) NOT NULL,
  birthday DATE NOT NULL,
  description TEXT NOT NULL,
  FOREIGN KEY (user_profile_id) REFERENCES profiles(id)
);

-- Friends' answers
CREATE TABLE IF NOT EXISTS answers (
  id INT PRIMARY KEY AUTO_INCREMENT,
  freundeprofile_id INT NOT NULL, -- Reference to friend's profile
  question1 VARCHAR(255),
  question2 VARCHAR(255),
  question3 VARCHAR(255),
  question4 VARCHAR(255),
  question5 VARCHAR(255),
  FOREIGN KEY (freundeprofile_id) REFERENCES freundeprofiles(id)
);
