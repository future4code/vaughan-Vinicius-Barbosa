1-

a) Explique o que é uma chave estrangeira

Uma chave estrangeira e quando precisamos utilizar dados relacionados a outras 
tabelas 


b) Crie a tabela e, ao menos, uma avaliação para cada um dos filmes
ok

c) Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query.
Nao e possivel adicionar um comentario em item que nao existe em uma outra tabela relacionada
d) Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating.
ok

e) Tente apagar um filme que possua avaliações. Anote e explique o resultado da query.
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`vaughan-######-vinicius-barbosa`.`rating`, CONSTRAINT `rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`id`))
Nao pode apagar ou atualizar uma linha parente: uma chave estrangeira restritaçao falha 



2

a) Explique, com as suas palavras, essa tabela
Esta tabela faz referencia de outras duas tabelas ja existentem no bd

b) Crie, ao menos, 6 relações nessa tabela
ok

c) Tente criar uma relação com um filme ou um ator inexistente. Anote e explique o resultado da query
Acontece um erro pois nao e possivel adicionar um filme/ator inexistente

d) Tente apagar um ator que possua uma relação nessa tabela. Anote e explique o resultado da query
Nao e possivel pois os dados tem relaçao com um outro dado de outra tabela


3

a) Explique, com suas palavras, a query acima. O que é o operador ON?
Operador on e usado para referenciar um item de uma tabela com outro de uma outra tabela

b) Escreva uma query que retorne somente o nome, id e nota de avaliação dos filmes que já foram avaliados.

SELECT m.id as movie_id, r.rate as rating FROM movies m
INNER JOIN Rating r ON m.id = r.movie_id;




