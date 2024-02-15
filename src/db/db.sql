CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    age INT CHECK(age > 0),
    role VARCHAR(255) CHECK(role IN ('user', 'admin')) DEFAULT 'user'
);
