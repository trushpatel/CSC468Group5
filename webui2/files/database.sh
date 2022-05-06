!#/bin/sh

apt-get update
apt-get install sudo
apt install postgresql -y
sudo service postgresql restart
sudo -u postgres psql << EOF
CREATE DATABASE kubechess;
\c kubechess;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE users (
  user_id uuid PRIMARY KEY DEFAULT
  uuid_generate_v4(),
  user_name VARCHAR(255) NOT NULL,
  user_email VARCHAR(255) NOT NULL,
  user_password VARCHAR(255) NOT NULL
);
INSERT INTO users(user_name, user_email, user_password)
VALUES (123, 123@gmail.com, 123);
EOF
