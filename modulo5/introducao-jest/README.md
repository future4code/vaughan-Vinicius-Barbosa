Para começar, você deve criar um programa que verifique se um usuário pode fazer uma compra ou não. Ele deve receber um objeto `user` (com nome e saldo) e um valor de compra. Caso o saldo seja maior ou igual ao valor de compra você deve retornar um novo usuário (com o mesmo nome e o saldo atualizado depois da compra). Caso contrário, retorne `undefined`

```tsx
function performPurchase(user: User, value: number): User | undefined 
```

a) *Crie uma interface para representar o usuário*
      ok
b) *Implemente  a função*
      ok

     

Agora vamos criar testes para essa função. Lembre-se de criar o arquivo com o padrão `<nome>.test.ts` na pasta  `tests`
    
a) *Faça um teste com um usuário com o saldo maior do que o valor de compra*
      ok
b) *Faça um teste com um usuário com o saldo igual ao valor de compra*
      ok
c) *Faça um teste com um usuário com o saldo menor do que o valor de compra*
      ok



- Exercício 3

Agora, vamos fazer uma função mais complexa. O contexto dela é o seguinte: fazer um sistema que identifique quais pessoas que estão em uma fila podem entrar em um cassino. A empresa que vai fazer isso quer ter filias nos EUA e no Brasil. Então, os `casino` devem possuir um nome e um lugar onde ficam (`EUA` ou `BRAZIL`).  Os usuários devem ser identificados pelo nome, pela nacionalidade (`AMERICAN` ou `BRAZILIAN`) e a idade. Se um usuário for entrar em um `casino` nos Estados Unidos, ele deve ter idade maior do que (idade igual a) 21 anos; se entrar em um no Brasil, ele deve ter idade maior do que (idade igual a) 18 anos.

O retorno da função deve separar os usuários em Brasileiros e Americanos e indicar os nomes dos que tem permissão de entrar e os nomes dos que não tem. Abaixo, estão as entradas da função, a saída e a assinatura dela:

a) *Leia os códigos fornecidos acima com calma. Veja se não ficou com nenhuma dúvida.*
      ok
b) *Implemente a função*
      ok
c) *O que foi mais difícil de fazer?*
      testes em andamento
