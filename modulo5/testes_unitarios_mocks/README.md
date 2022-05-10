
   Exercicio 1

   O tema da aula de hoje vai ser um joguinho bem simples de luta. Em um exercício mais para frente, vamos implementar uma função que faça um personagem "bater" no outro. Antes disso, precisamos  fazer uma função que vai validar as informações de cada personagem. Ele deve possuir 4 parâmetros: nome, vida, defesa e força. 

   A força representa o quanto o personagem pode tirar de vida do outro. A defesa é um valor que representa o quanto o outro personagem consegue se defender, a conta é simples: quando um personagem ataca  o outro, ele perde o valor `(força - defesa)` da sua vida. Todos os personagens começam com a vida `1500` e, ao chegar no `0`, eles morrem.

*a. Crie uma interface para representar os personagens*
      ok
*b. Crie uma função `validateCharacter` que valide as informações de um personagem (devolvendo `true` se for válida ou `false` caso contrário). Nenhuma das propriedades pode ser vazia. Em relação a vida, defesa e força, elas só podem possuir valores maiores que 0.*
      ok

   Exercicio 2


   - Exercício 2
    
    Agora, vamos realizar o teste unitário da função `validateCharacter`
    
    *a. Crie um teste que verifique o comportamento da função com um personagem com o nome vazio, isto é, `""`.* 
            ok
    *b. Crie um teste que verifique o comportamento da função com um personagem com a vida igual a zero.* 
            ok
    *c. Crie um teste que verifique o comportamento da função com um personagem com a força igual a zero.* 
            ok
    *d. Crie um teste que verifique o comportamento da função com um personagem com a defesa igual a zero.* 
            ok
    *e. Crie um teste que verifique o comportamento da função com um personagem com a vida ou a força ou a defesa com um valor negativo*
            ok
    f*. Crie um teste que verifique o comportamento da função com um personagem com as informações validas*
            ok

      Exercicio 3

Agora, vamos implementar a função (`performAttack`) que represente o ataque de um personagem a outro. Ela deve receber dois parâmetros: `attacker` (atancante) e `defender` (defensor) que são do tipo `Character`. 

O comportamento dela deve ser:

- Caso algum dos personagens esteja inválido, a função deve indicar um erro: `Invalid Character`
- Ela deve retirar do `defender` o valor final do ataque (`(força do attacker) - (defesa do defender)`)
- Caso a defesa do `defender` seja maior do que a força do `attacker`, nenhuma vida do `defender` deve ser retirada
- Você deve fazer duas implementações dessas funções

*a. Implemente a função de tal forma que ela utilize a função de validação diretamente na implementação*
      ok
*b. Implemente a função utilizando inversão de dependências*
      ok
*c. Explique, com as suas palavras, as diferenças entre as duas implementações*
      A funçao de validaçao e responsavel por validar se os lutadores estao aptos para lutar, a segunda e reponsavel por inserir no parametro da funçao principal uma outra funçao que retorna um bolean 









- Exercício 4
    
    Antes de começar a criar os testes dessas funções, vamos nos relemebrar dos Mocks. 
    
    Eles são muito importantes quando vamos realizar testes unitários, pois permitem que realizemos o teste sem utilizar nenhuma implementação das dependências, garantindo que ele seja isolado e específico para a função/classe que estamos tentando testar.
    
    Para criar um  Mock no Jest, temos que usar a função `jest.fn`, como mostrado abaixo:
    

    ```ts
    test("Showing jest.fn", () => {
    	const mock = jest.fn(() => {
    		const user = {
    				name: "Astrodev",
    				age: 29
    		}
    		return user
    	})
    })
    ```

    Em um arquivo de teste feito só para esse treino:
    
    *a. De qual das duas funções (*`validateCharacter` ou `performAttack`)  deveremos criar um Mock nos próximos testes? Justifique.
    
    b. Crie um Mock dessa função que represente a saída de sucesso do seu comportamento
                  ok
    c. Crie um Mock dessa função que representa a saída de erro/falha do seu comportamento
                  ok



      - Exercício 5

Agora, vamos criar testes unitários da nossa função `performAttack`. Como ela utiliza a `validateCharacter`, vamos ter que criar um Mock dela (resposta do item a do exercício 4). 

*a. Faça um teste com dois personagens com valores válidos, em que o defensor perca 200 pontos de vida. Verifique o estado final das personagens. Sobre a função mockada, verifique se ela foi chamada, o número de vezes em que ela foi chamada, quantas vezes ela retornou.*
      retornou undefined pois a funçao nao retorna nada

*b. Faça um teste com um dos personagens com alguma informação inválida. Verifique a mensagem de erro. Sobre a função mockada, verifique se ela foi chamada, o número de vezes em que ela foi chamada, o que ela retornou e quantas vezes ela retornou.*
      E retornado um erro pois a funçao de validar personagem a chamada
      antes de realizar o teste


