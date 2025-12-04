CREATE DATABASE Eventdb;
USE Eventdb;

CREATE TABLE events (
    id INT AUTO_INCREMENT PRIMARY KEY,
    EventName VARCHAR(255),
    EventLocation VARCHAR(255),
    EventOrganizer VARCHAR(255),
    EventDate DATE
);

/*git remote add origin https://github.com/RishiDusane/event-manager-app.git



git branch -M main

git push -u origin main*/