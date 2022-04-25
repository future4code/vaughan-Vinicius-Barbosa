
EXERCICIO 1

```typescript
   class User {
  private id: string;
  private email: string;
  private name: string;
  private password: string;

  constructor(
		id: string,
		email: string,
		name: string,
		password: string
	){
		console.log("Chamando o construtor da classe User")
		this.id = id
		this.email = email
		this.name = name 
		this.password = password
	}

	public getId(): string {
		return this.id
	}

	public getEmail(): string {
		return this.email
	}

	public getName(): string {
		return this.name
	}
}
```


Analise a classe `User`. Perceba quais propriedades são públicas e quais são privadas. Copie esse código para o seu exercício de hoje; crie uma instância dessa classe (dê o nome, email, etc que você quiser) e imprima, no terminal, o id, o nome e o email desse usuário. 

a) *Seria possível imprimir a senha (`password`) atrelada a essa instância?*

   sim criando uma funçao get para ela

b) *Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal?*

   aparece uma unica vez



EXERCICIO 2

Analise a `Customer`. Perceba quais propriedades são públicas e quais são privadas. Copie esse código para o seu exercício de hoje e crie uma instância dessa classe (com as informações que você quiser). Atente-se ao fato de que o `Customer` é uma subclasse (ou classe filha) da classe `User`. Sabemos disso porque há a palavra `extends` na declaração da classe `Customer`; e, em seu construtor, foi usado o `super`.

a) *Quantas vezes a mensagem `"Chamando o construtor da classe Customer"` foi impressa no terminal?* 

   costumer so apareceu uma vez pois a classe Customer foi utilizada uma unica vez

b) *Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal? Por quê?*
   User apareceu duas vezes pois a classe user foi utilizada duas vezes. 


   EXERCICIO 3 


   Agora, imprima **todas as informações possíveis** da instância que você criou: o id, o nome, o email, o valor total de compra (`purchaseTotal`) e o cartão de crédito (`creditCard`). Perceba que as propriedades públicas da classe pai (`User`) foram "herdadas" pela classe filha (`Customer`).

a) *Seria possível imprimir a senha (`password`) atrelada a essa instância?* *Por quê?*


   seria possivel criando uma funçao pois e a unica maneira de acessar esse tipo de informaçao


   EXERCICIO 4 

   Adicione um método público à classe User. Esse método deve ter o nome de introduceYourself("apresente-se") e deve retornar a mensagem: "Olá, bom dia!". As classes filhas sempre têm acesso aos métodos públicos da classe pai. Então, para realizar o teste dessa sua função, faça com que a instância que você criou para a classe Customer chame esse método

   feito

   EXERCICIO 5

   feito

   /* ===========POLIMORFISMO */



   EXERCICIO 1


   Vamos começar analisando a interface Client. Ela possui 4 atributos explicados abaixo.


``` typescript
   export interface Client {
  name: string;
  // Refere-se ao nome do cliente

  registrationNumber: number;
  // Refere-se ao número de cadastro do cliente na concessionária
	// como se fosse um id

  consumedEnergy: number;
  // Refere-se à energia consumida pelo cliente no mês

  calculateBill(): number;
  // Retorna o valor da conta em reais
}
```



   Comece criando um objeto dessa interface, colocando a tipagem correta. Perceba que você terá que dar uma implementação para o método `calculateBill()`. Por enquanto, implemente de tal forma que sempre retorne `2` (ou qualquer outro número). Imprima todas as informações que forem possíveis no terminal.

a) *Quais propriedades você conseguiu imprimir? Teve alguma que não foi possível? Por que isso aconteceu?*

   consegui imprimir todas 




   EXERCICIO 2




   Agora, vamos ver a classe Place.

   ```typescript
         export abstract class Place {
  constructor(protected cep: string) {}

	public getCep(): string {
		return this.cep;
  }
}
   ```



   Essa classe é abstrata porque está representando um tipo de informação que simplesmente **abstrai** e **armazena** as características em comum de um conjunto de outras classes. Por ser abstrata, não podemos criar uma instância dela. Essa é uma regra da Programação Orientada a Objetos e válida para todas as linguagens.

   a) *Mesmo sabendo que não é possível, tente criar uma instância dessa classe (ou seja: `new Place(...)`). Qual foi o erro que o Typescript gerou?*

   Não é possível criar uma instância de uma classe abstrata.ts(2511)

   b) *Pense e responda: o que precisaríamos fazer para conseguir efetivamente criar uma instância dessa classe?*

   criar uma subclasse e usar os metodos contidos nela. 











   EXERCICIO 3












Será um pouco mais longo, mas esperamos que seja esclarecedor.

Vamos começar lendo três classes. 

A primeira representa uma casa residencial. Vamos armazenar nela uma variável para representar a quantidade de moradores (`residentsQuantity`)

```tsx
export class Residence extends Place {
  constructor(
    protected residentsQuantity: number,
    // Refere-se ao número de moradores da casa

    cep: string
  ) {
    super(cep);
  }
}
```

A segunda é para um comércio. Para ela, vamos adicionar uma propriedade para representar os andares desse lugar comercial (`floorsQuantity`)

```tsx
export class Commerce extends Place {
  constructor(
    protected floorsQuantity: number,
    // Refere-se à quantidade de andares do lugar

    cep: string
  ) {
    super(cep);
  }
}
```

A última é para uma indústria e adicionaremos uma propriedade para guardar a quantidade máquinas de lá (`machinesQuantity`)

```tsx
export class Industry extends Place {
  constructor(
    protected machinesQuantity: number, 
    // Refere-se à quantidade de máquinas do local 
    
    cep: string
		) {
	    super(cep);
  }
}
```

Agora, crie uma instância de cada uma das classes novas. Imprima no console o CEP de cada uma delas, através do método `getCep` herdado da classe `Place`. Devido à propriedade do **Polimorfismo**, uma classe filha de uma classe pai é também do mesmo **tipo** da pai. Ou seja, a `Residence`, a `Commerce` e a `Industry` são do tipo `Place`. Dessa forma, uma instância da `Residence` também é uma instância da classe `Place`. Uma instância da `Commerce` também é da classe `Place` (o mesmo se aplica para a `Industry`). **Isso responde à primeira pergunta**: para criar uma instância de uma classe abstrata precisamos declarar uma classe filha e criar uma instância dessa última.

As residências, os comércios e as indústrias são lugares muito diferentes. Tendem a ter arquiteturas muito distintas, porque são para propósitos diferentes. Quando estamos modelando e encontramos uma situação dessa - três "entidades" muito diferentes - **é um indício de que cada uma pode ter a sua própria classe;** assim, teremos mais liberdade para criar os métodos, as propriedades e os construtores para cada uma da melhor forma. Para exemplificar isso, criamos propriedades diferentes bem simples: quantidade de moradores, quantidade de andares e quantidade de máquinas. Só que há uma propriedade que todas elas possuem em comum: o CEP. Isso **sugere que criemos uma estrutura para armazenar esse dado: uma classe pai ou uma interface**. Qual escolher? Há vários motivos para a nossa escolha, mas aqui vamos explicar apenas um dos que a  justificam. As propriedades que uma classe herda de uma interface são **sempre públicas**. Logo, não temos a liberdade de modificar o acesso delas. No nosso caso, estamos representando lugares, certo? Um lugar é fixo, tem um endereço e um CEP que não mudam. Dessa forma, não vamos precisar modificar esse valor ao longo da nossa aplicação. Então o CEP deveria ser `protected` ou `private` para não darmos essa possibilidade. Não existe uma regra para escolher entre `protected` e `private`, mas deixamos `protected` só para facilitar o acesso a essa propriedade para as classes filhas, dado que é um dado importante e que **talvez** precise ser lido por elas. **Isso responde à segunda pergunta**: `Place` é uma classe porque precisa ter um acesso restrito a um dos seus atributos, o que é impossível de se fazer em interfaces.

Para exemplificar isso, criamos propriedades diferentes bem simples: quantidade de moradores, quantidade de andares e quantidade de máquinas. Só que há uma propriedade que todas elas possuem em comum: o CEP. Isso **sugere que criemos uma estrutura para armazenar esse dado: uma classe pai ou uma interface**. Qual escolher? Há vários motivos para a nossa escolha, mas aqui vamos explicar apenas um dos que a  justificam. As propriedades que uma classe herda de uma interface são **sempre públicas**. Logo, não temos a liberdade de modificar o acesso delas. No nosso caso, estamos representando lugares, certo? Um lugar é fixo, tem um endereço e um CEP que não mudam. Dessa forma, não vamos precisar modificar esse valor ao longo da nossa aplicação. Então o CEP deveria ser `protected` ou `private` para não darmos essa possibilidade. Não existe uma regra para escolher entre `protected` e `private`, mas deixamos `protected` só para facilitar o acesso a essa propriedade para as classes filhas, dado que é um dado importante e que **talvez** precise ser lido por elas. **Isso responde à segunda pergunta**: `Place` é uma classe porque precisa ter um acesso restrito a um dos seus atributos, o que é impossível de se fazer em interfaces.

Por fim, ela é abstrata por um motivo simples. O nosso sistema possui 3 tipos de lugares e preferimos criar uma classe para representar cada um deles. Então não há motivos para querermos instanciar um objeto do tipo `Place` porque, no nosso contexto, todos os casos deles já estão cobertos por outras classes. **Isso responde à terceira pergunta**: `Place` é abstrata porque não enxergamos uma situação em que seria necessário criar uma instância dessa classe.

Ufa! 😪 

Antes de prosseguir, veja se entendeu tudo e não ficou com alguma dúvida. Foi muita informação de uma vez só.  




   Esse exercício vai responder melhor a essas três perguntas: 

1) *O que precisaríamos fazer para conseguir efetivamente criar uma instância da classe Place? (última pergunta do exercício anterior)*

   Criar outras classes filhas 

2) *Por que a `Place` não é uma interface?*

  Porque precisa ter um acesso restrito a um dos seus atributos, o que é impossível de se fazer em interfaces.

3) *Por que a classe `Place` é uma Classe Abstrata?*

   Porque não enxergamos uma situação em que seria necessário criar uma instância dessa classe.

   A parte prática desse exercício é tranquila: crie os getters de cada uma das propriedades protegidas dessas três classes.


   export class Residence extends Place {
  constructor(
    private dwellersQuantity: number,

    cep: string
  ) {
    super(cep);
  }
  
  public getDwellersQuantity(): number {
    return this.dwellersQuantity
  }
}


export class Commerce extends Place {
  constructor(
    private floorsQuantity: number,
    // Refere-se à quantidade de andares do lugar

    cep: string
  ) {
    super(cep);
  }

  public getFloorsQuantity(): number {
    return this.floorsQuantity;
  }
}


export class Industry extends Place {
  constructor(
    private machinesQuantity: number,
    // Refere-se à quantidade de máquinas do local

    cep: string
  ) {
    super(cep);
  }

  public getMachinesQuantity(): number {
    return this.machinesQuantity;
  }
}























   EXERCICIO 4




Agora, você vai começar a colocar a mão na massa!

Crie uma classe para representar um Cliente Residencial (`ResidentialClient`). Ela deve possuir uma propriedade de CPF, que será privada, uma vez que o CPF não pode mudar e não teremos uma classe filha da `ResidentialClient` (assim, `protected` não faz sentido). Crie o getter também.

Essa classe deve ser **filha** da classe `Residence` e implementar a classe `Client`. Lembre-se que a classe deve implementar todos métodos e atribuir valores a todas as propriedades que herda da interface. No caso das residências, o valor da conta é **(quantidade de energia) x 0.75.**

a) *Que métodos e propriedades essa classe possui? Por quê?*

   ela tem name, registration name, consumedEnergy, cpf, cep, 
   tem as funcoes getcpf e calculatebill


   class ResidentialClient extends Residence implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private cpf: string,
    residentsQuantity: number,
    cep: string
  ) {
    super(residentsQuantity, cep);
  }

  public getCpf(): string {
    return this.cpf;
  }

  public calculateBill(): number {
    return this.consumedEnergy * 0.75;
  }
}


   Crie a classe `CommercialClient` para representar o Cliente Comercial. Ele deve possuir um CNPJ (privado). Crie os getter dela.

Essa classe deve ser **filha** da classe `Commerce` e implementar a interface `Client`. Nesse caso, o valor da conta é **(quantidade de energia) x 0.53.**

a) *Quais as semelhanças dessa classe com a `ResidentialClient`?*

  as duas possuem os mesmos metodos name,registrationNumber,consumedEnerg e a funcao calculateBill(): number 

b) *Quais as diferenças dessa classe com a `ResidentialClient`?*

   Oque for fora destas caracteriscas acima e oque diferem uma da outra









   EXERCICIO 6 



   - Exercício 6
    
    Agora, crie a classe `IndustrialClient` para representar o Cliente Industrial. Ele deve possuir um um número de registro industrial (privada). Crie somente os getters dela.
    
    a) *De* *qual classe a `IndustrialClient` deve ser filha? Por quê?*

      deve ser filha da classe Industry pois ela que tem os atributos nescessarios 

    b) *Que interface a `IndustrialClient` implementa? Por quê?*

    c) *Nós pedimos para criar somente os getters dessa classe. Pense num motivo para isso: por que só os getters?*
         Pois faz mais sentido so esse tipo de funcao na classe criadora. 








