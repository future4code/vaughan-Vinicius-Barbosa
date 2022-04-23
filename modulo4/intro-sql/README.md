1-Nesta tabela, utilizamos o FLOAT para declarar o salário, 
porque esta é uma forma de representar um número não inteiro 
em uma tabela. Explique os demais comandos que estão nessa query.

R-A o primeiro e uma id que aceita ate 255 caracteres, como uma chave primaria name recebe 255 caracteres e o campo nao pode ser nulo,birthday recebe uma data no padrao USA tambem nao pode receber nulo,gener pode recerber ate 6 caracters e nao pode ser nulo 

R-B o primeiro comando mostrou informaçoes sobre o meu banco de dados o segundo mostrou informaçoes 
das tabelas ja criadas 

R-C describe actor mostrou as informaçoes sobre as chaves da tabela de atores 


2 - B18:03:08	INSERT INTO Actor (id, name, salary, birth_date, gender) VALUES(   "002",    "bararaba",   1200000,   "1963-08-23",    "baraba" )	Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'	0.140 sec

   R- essa mensagem diz entrada duplicada para chave primaria. 


   C erro - R os dados da coluna nao batem com a linha 1

   D erro - R o campo nome nao tem um valor padrao 

   E erro - R Valor incorreto no campo birth_date

3 - A - SELECT * from Actor WHERE gender = "female"
   B - SELECT * from Actor WHERE name = "Tony Ramos"
   C - SELECT * from Actor WHERE gender = "invalid" = Nao encontrou nenhuma linha com esse valor

   


   

