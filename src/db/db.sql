CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    age INT CHECK(age > 0),
    role ENUM('user', 'admin') DEFAULT 'user'
);
