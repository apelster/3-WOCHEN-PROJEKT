CREATE DATABASE IF NOT EXISTS freundebuch;

USE freundebuch;

CREATE TABLE IF NOT EXISTS Profil (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    geburtstag DATE
);

CREATE TABLE IF NOT EXISTS Fragen_1 (
    id INT AUTO_INCREMENT PRIMARY KEY,
    profil_id INT,
    frage VARCHAR(255) NOT NULL,
    antwort VARCHAR(255),
    FOREIGN KEY (profil_id) REFERENCES Profil(id)
);

CREATE TABLE IF NOT EXISTS Fragen_2 (
    id INT AUTO_INCREMENT PRIMARY KEY,
    profil_id INT,
    frage VARCHAR(255) NOT NULL,
    antwort VARCHAR(255),
    FOREIGN KEY (profil_id) REFERENCES Profil(id)
);

CREATE TABLE IF NOT EXISTS Fragen_3 (
    id INT AUTO_INCREMENT PRIMARY KEY,
    profil_id INT,
    frage VARCHAR(255) NOT NULL,
    antwort VARCHAR(255),
    FOREIGN KEY (profil_id) REFERENCES Profil(id)
);

CREATE TABLE IF NOT EXISTS Fragen_4 (
    id INT AUTO_INCREMENT PRIMARY KEY,
    profil_id INT,
    frage VARCHAR(255) NOT NULL,
    antwort VARCHAR(255),
    FOREIGN KEY (profil_id) REFERENCES Profil(id)
);

CREATE TABLE IF NOT EXISTS Bilder (
    id INT AUTO_INCREMENT PRIMARY KEY,
    profil_id INT,
    bild_name VARCHAR(255) NOT NULL,
    bild BLOB,
    FOREIGN KEY (profil_id) REFERENCES Profil(id)
);
