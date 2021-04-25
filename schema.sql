DROP DATABASE IF EXISTS send_a_text;

CREATE DATABASE send_a_text;

\c send_a_text;

CREATE TABLE users (
 user_id BIGSERIAL,
 username VARCHAR(50),
 password VARCHAR(50)
);

ALTER TABLE users ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);

CREATE TABLE numbers (
 number_id BIGSERIAL,
 number_name INTEGER,
 number INTEGER,
 user_id INTEGER
);


ALTER TABLE numbers ADD CONSTRAINT numbers_pkey PRIMARY KEY (number_id);

ALTER TABLE numbers ADD CONSTRAINT numbers_user_id_fkey FOREIGN KEY (user_id) REFERENCES users(user_id);