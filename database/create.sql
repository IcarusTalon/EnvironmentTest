CREATE DATABASE CalCalendar;

USE CalCalendar;

CREATE TABLE user (
    id integer PRIMARY KEY AUTO_INCREMENT, first_name VARCHAR(255) NOT NULL, last_name VARCHAR(255) NOT NULL, email VARCHAR(320) NOT NULL, created TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE client (
    id integer PRIMARY KEY AUTO_INCREMENT, first_name VARCHAR(255) NOT NULL, last_name VARCHAR(255) NOT NULL, calendar_id VARCHAR(320) NULL, email VARCHAR(320) NOT NULL, created TIMESTAMP NOT NULL DEFAULT NOW()
);