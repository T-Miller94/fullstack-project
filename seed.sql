DROP DATABASE IF EXISTS budget_tracker;

CREATE DATABASE budget_tracker;
\c budget_tracker

DROP TABLE IF EXISTS transactions;
DROP TABLE IF EXISTS person;

CREATE TABLE person(
    id SERIAL PRIMARY KEY,
    name VARCHAR(55),
    password VARCHAR(55),
    email VARCHAR(55)
);
CREATE TABLE transactions(
    id SERIAL,
    money_in BOOLEAN,
    kind VARCHAR(55),
    amount DEC(7, 2),
    person_id INTEGER REFERENCES person(id) ON DELETE CASCADE
);

INSERT INTO person (name, password, email) VALUES ('test1', 'test1', 'test1@testmail.com');
INSERT INTO person (name, password, email) VALUES ('test2', 'test2', 'test2@testmail.com');
INSERT INTO person (name, password, email) VALUES ('test3', 'test3', 'test3@testmail.com');
INSERT INTO person (name, password, email) VALUES ('test4', 'test4', 'test4@testmail.com');
INSERT INTO person (name, password, email) VALUES ('test5', 'test5', 'test5@testmail.com');

INSERT INTO transactions (money_in, kind, amount, person_id) VALUES (true, 'pay', 1565.09, 1);
INSERT INTO transactions (money_in, kind, amount, person_id) VALUES (false, 'bill', 1565.09, 1);
INSERT INTO transactions (money_in, kind, amount, person_id) VALUES (false, 'bill', 1565.09, 1);
INSERT INTO transactions (money_in, kind, amount, person_id) VALUES (true, 'pay', 1565.09, 2);
INSERT INTO transactions (money_in, kind, amount, person_id) VALUES (false, 'bill', 1565.09, 3);