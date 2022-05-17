CREATE TABLE cookenu_users(
id VARCHAR(255) PRIMARY KEY unique,
email VARCHAR(255) UNIQUE NOT NULL,
password VARCHAR(255) NOT NULL,
nickname varchar(16) not null,
role ENUM ('NORMAL','ADMIN')default 'NORMAL',
bio VARCHAR(500),
lema varchar(20)
);
CREATE TABLE cookenu_receitas(
id VARCHAR(255) PRIMARY KEY unique,
title VARCHAR(255) UNIQUE NOT NULL,
descricao TEXT NOT NULL,
data DATE NOT NULL,
id_user VARCHAR(255),
FOREIGN KEY (id_user) REFERENCES cookenu_users(id)
ON DELETE CASCADE
ON UPDATE RESTRICT
);
CREATE TABLE cookenu_seguidores(
id VARCHAR(255) primary key unique,
id_user VARCHAR(255) ,
FOREIGN KEY (id_user) REFERENCES cookenu_users(id)
ON DELETE CASCADE
);