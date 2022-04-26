Exercicio 1

a) *O que são os `round` e `salt`? Que valores são recomendados para o `round`? Que valor você usou? Por quê?*

   salt e uma variavel que recebe uma string aleatoria, round e o numero que representa o custo
   de tempo utilizado para quebrar a senha por força bruta. coloquei 12 pois e um valor coerente
   quando o codigo for descriptografado pelo computador do usuario. 

b) *Instale o bcryptjs no seu projeto e comece criando a função generateHash(), que será responsável por **criptografar** uma string usando o bcryptjs.  ***** 

   ok

c) *Agora, crie a função que verifique se uma string é correspondente a um hash, use a função `compare` do bcryptjs*

   ok

   Exercicio 2


a) *Para realizar os testes corretamente, qual deles você deve modificar primeiro? O cadastro ou o login? Justifique.*

   Primeiro cadastro e depois login

b) *Faça a alteração do primeiro endpoint*

   ok

c) *Faça a alteração do segundo endpoint*

   ok

d) *No exercício de ontem, nós criamos o endpoint `user/profile`. Também temos que modificar esse endpoint devido à adição da criptografia? Justifique.*

   Nao pois o end point nao retorna a senha da pessoa

   



   Exercicio 3

   - Exercício 3
    
    Agora, vamos pensar em um pouco nas funcionalidades relacionadas aos tipos de usuário. Para isso, vamos ter que fazer umas modificações no banco de dados.
    
    a) *Altere a sua tabela de usuários para ela possuir uma coluna `role`. Considere que pode assumir os valores `normal`  e `admin`. Coloque `normal` como valor padrão.*

      ok

    b) *Altere o type `AuthenticationData e a função getData()` para representarem esse novo tipo no token.*

      ok

    
    c) *Altere o cadastro para receber o tipo do usuário e criar o token com essa informação*
    
      ok

    d) *Altere o login para criar o token com o `role` do usuário*

      ok



   Exercicio 4



   Agora, vamos usar esse `role` no endpoint `/user/profile`. Somente o usuários "normais" podem acessar esse endpoint. 

   a) *Altere o endpoint para que retorne um erro de `Unauthorized` para os usuários que "não sejam normais" e tentem acessar esse endpoint*

   ok