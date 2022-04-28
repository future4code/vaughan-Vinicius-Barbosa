
type Transaction = {
   nome: 'nomequalquer'
}

class UserAccount {
   private cpf: string;
   private name: string;
   private age: number;
   private balance: number = 0;
   private transactions: Transaction[] = [];

   constructor(
      cpf: string,
      name: string,
      age: number,
   ) {
      console.log("Chamando o construtor da classe UserAccount")
      this.cpf = cpf;
      this.name = name;
      this.age = age;
   }

}


let banana: UserAccount = new UserAccount('12341234', 'vini', 26)

console.log(banana)


class Transaction2 {
   private description: string;
   private value: number;
   private date: string

   // SO ACEITÁVEL PONTO E VIRGULA ACIMA

   constructor(date: string, value: number, description: string) {
      this.date = date;
      this.value = value;
      this.description = description
   }
}

console.log(Transaction2)