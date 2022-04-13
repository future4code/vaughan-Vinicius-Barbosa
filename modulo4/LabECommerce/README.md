CREATE TABLE lab_ecommerce(
id INT PRIMARY KEY,
name VARCHAR(255) NOT NULL,
email VARCHAR(255) UNIQUE NOT NULL,
password VARCHAR(255) NOT NULL
);



INSERT INTO lab_ecommerce (`id`,`name`,`email`,`password`) VALUES (1,'test','test@test','test');


select * from lab_ecommerce;