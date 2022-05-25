DROP DATABASE IF EXISTS budget_tracker;

CREATE DATABASE budget_tracker;
\c budget_tracker

DROP TABLE IF EXISTS transactions;
DROP TABLE IF EXISTS person;

CREATE TABLE person(
    id SERIAL,
    name VARCHAR(55),
    password VARCHAR(55),
    email VARCHAR(55)
);
CREATE TABLE transactions(
    id SERIAL,
    money_in BOOLEAN,
    kind VARCHAR(55),
    amount DEC(7, 2),
    user_id INTEGER
);

