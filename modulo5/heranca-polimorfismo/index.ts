
//EXERCICIO 1

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
   ) {
      console.log("Chamando o construtor da classe User")
      this.id = id
      this.email = email
      this.name = name
      this.password = password
   }
   public interoduceYourself(): string {
      return `Olá sou ${this.name} , bom dia! `
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
   public getPassword(): string {
      return this.password
   }
}



//let vinicius: User = new User('12341234', 'vini@email.com', 'vinicius', '26')

//EXERCICIO 2

class Customer extends User {
   public purchaseTotal: number = 0;
   private creditCard: string;

   constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      creditCard: string
   ) {
      super(id, email, name, password);
      console.log("Chamando o construtor da classe Customer");
      this.creditCard = creditCard;
   }

   public getCreditCard(): string {
      return this.creditCard;
   }
}

let joao: Customer = new Customer('12341234', 'jota@email.com', 'joao', '26', 'credito')




// EXERCICIO 4


joao.interoduceYourself()



/* ===========POLIMORFISMO */



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


const client: Client = {
   name: "Goli",
   registrationNumber: 1,
   consumedEnergy: 100,

   calculateBill: () => {
      return 2;
   }
}

console.log(client.calculateBill(), client)



export abstract class Place {
   constructor(protected cep: string) {

   }
   public getCep(): string {
      return this.cep;
   }
}

class meu extends Place {

   nome:string

   constructor(
      nome:string,
      banana:string
   ) {
    
      super(banana);
      this.nome = nome
      this.cep = banana
   }

}

let mamao: meu = new meu('mamao', '93789-987')

console.log(mamao)
console.log('')
console.log(mamao.getCep())

