DROP DATABASE checkout;

CREATE DATABASE checkout;

\c checkout;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  name text NOT NULL,
  email text NOT NULL,
  password text NOT NULL
);

CREATE TABLE address (
  address_id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  address1 text NOT NULL,
  address2 text,
  city text NOT NULL,
  state text NOT NULL,
  zip int NOT NULL,
  phone int NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users (user_id)
);

CREATE TABLE credit (
  credit_id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  creditcard text NOT NULL,
  cvv text NOT NULL,
  billing_zip int NOT NULL,
  expiry text NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users (user_id)
)

CREATE INDEX ON users (user_id);
CREATE INDEX ON address (address_id, user_id);
CREATE INDEX ON credit (credit_id, user_id);