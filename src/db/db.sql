CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL DEFAULT 'supersecret',
    age INT CHECK(age > 0),
    role VARCHAR(255) CHECK(role IN ('user', 'admin')) DEFAULT 'user'
);



INSERT INTO users (name, email, password, role) VALUES ('adminuser', 'admin@mail.com', 'superuser', 'admin');