DROP SCHEMA navy;
DROP TABLE ship;
DROP TABLE duty;
DROP TABLE shipduty;
DROP TABLE fleet;
DROP TABLE sailor;

CREATE SCHEMA navy;

CREATE TABLE fleet (
  fleetname TEXT PRIMARY KEY NOT NULL
);

CREATE TABLE sailor (
  navyid INT PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  dateofbirth DATE NOT NULL
);

CREATE TABLE ship (
  shipname TEXT PRIMARY KEY NOT NULL,
  datebuilt DATE NOT NULL,
  fleetname TEXT REFERENCES fleet
);

CREATE TABLE duty (
  dutyid INT PRIMARY KEY NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  navyid INT REFERENCES sailor
);

CREATE TABLE shipduty (
  dutyid INT REFERENCES duty,
  shipname TEXT REFERENCES ship,
  rank TEXT
);

SELECT * FROM fleet;