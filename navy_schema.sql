CREATE SCHEMA navy;

CREATE TABLE fleet (
  fleetname TEXT PRIMARY KEY NOT NULL
);

CREATE TABLE ship (
  ship TEXT PRIMARY KEY NOT NULL,
  datebuilt DATE NOT NULL
);

CREATE TABLE sailor (
  navyid INT PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  dateofbirth DATE NOT NULL
);

CREATE TABLE duty (
  dutyid INT PRIMARY KEY NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL
);

CREATE TABLE shipduty (
  dutyid INT,
  shipname TEXT,
  rank TEXT
);

SELECT * FROM fleet;