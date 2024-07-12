CREATE DATABASE IF NOT EXISTS freundebuch;

USE freundebuch;

CREATE TABLE IF NOT EXISTS Profil (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    geburtstag DATE
);

CREATE TABLE IF NOT EXISTS Fragen_1 (
    id INT AUTO_INCREMENT PRIMARY KEY,
    frage VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS Fragen_2 (
    id INT AUTO_INCREMENT PRIMARY KEY,
    frage VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS Fragen_3 (
    id INT AUTO_INCREMENT PRIMARY KEY,
    frage VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS Fragen_4 (
    id INT AUTO_INCREMENT PRIMARY KEY,
    frage VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS Antworten (
    id INT AUTO_INCREMENT PRIMARY KEY,
    profil_id INT,
    frage_id INT,
    antwort VARCHAR(255),
    FOREIGN KEY (profil_id) REFERENCES Profil(id),
    FOREIGN KEY (frage_id) REFERENCES Fragen_1(id)
);

-- Fragen_1
INSERT INTO Fragen_1 (frage) VALUES 
('Wenn du eine Superkraft haben könntest, welche wäre es und warum?'),
('Was ist dein peinlichstes Erlebnis?'),
('Welcher Song bringt dich immer zum Tanzen?'),
('Wenn du eine berühmte Person treffen könntest, wer wäre es und warum?'),
('Was ist das Verrückteste, das du jemals gegessen hast?'),
('Was ist dein geheimes Talent?');

-- Fragen_2
INSERT INTO Fragen_2 (frage) VALUES 
('Wenn du ein Tier sein könntest, welches wäre es und warum?'),
('Was ist dein Lieblingswitz?'),
('Welcher Film oder welche Serie beschreibt dein Leben am besten?'),
('Was war dein lustigster Traum?'),
('Wenn du eine Zeitmaschine hättest, in welches Jahr würdest du reisen und warum?'),
('Was ist das Lustigste, das du jemals im Unterricht gemacht hast?');

-- Fragen_3
INSERT INTO Fragen_3 (frage) VALUES 
('Wenn du einen Tag mit jemandem tauschen könntest, wer wäre es und warum?'),
('Was ist deine Lieblingsschimpfwort?'),
('Was ist die seltsamste Angewohnheit, die du hast?'),
('Welches Meme beschreibt dich am besten?'),
('Was ist das Lustigste, was du als Kind geglaubt hast?'),
('Wenn du ein Tag unsichtbar sein könntest, was würdest du tun?');

-- Fragen_4
INSERT INTO Fragen_4 (frage) VALUES 
('Was war dein schlimmster Modetrend, dem du gefolgt bist?'),
('Wenn du ein Lebensmittel für den Rest deines Lebens essen müsstest, welches wäre es?'),
('Welche fiktive Figur wärst du gerne für einen Tag?'),
('Was ist das Dümmste, was du je gemacht hast, ohne es zu bereuen?'),
('Wenn du ein eigenes Land gründen könntest, wie würdest du es nennen?'),
('Was ist dein Lieblingsessen, das du heimlich nicht so gerne magst?');


-- Fragen_5
INSERT INTO Fragen_5 (frage) VALUES 
('Was war dein schlimmster Modetrend, dem du gefolgt bist?'),