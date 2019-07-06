--    * Create the `burgers_db`.
--    * Switch to or use the `burgers_db`.
--    * Create a `burgers` table with these fields:
--      * **id**: an auto incrementing int that serves as the primary key.
--      * **burger_name**: a string.
--      * **devoured**: a boolean.

CREATE DATABASE burgers_db2;

USE burgers_db2;

CREATE TABLE burgers
(
    id INT NOT NULL
    AUTO_INCREMENT,
burger_name VARCHAR
    (100),
devoured BOOLEAN DEFAULT FALSE,
PRIMARY KEY
    (id)
);