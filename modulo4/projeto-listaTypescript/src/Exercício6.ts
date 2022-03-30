console.log('Exercicio 6')

//Agora, pediram para você ajudar a fazer uma funcionalidade de um banco digital.
// Antes de explicar a sua tarefa, você precisa entender como eles guardam as contas
//  dos clientes. Basicamente, eles salvam o nome do clientes, o saldo total e uma
//   lista contendo todas os débitos realizados pelo cliente. Exemplo:

type clienteKey = {
   cliente: string,
   saldoTotal: number,
   debitos: number[]
}

const clientes:clienteKey[] = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]


//Pensando em aumentar seu lucros, o banco quer identificar possíveis clientes precisando
// de empréstimos. Dessa forma, a sua tarefa é criar uma função que receba este array como
//  parâmetro, atualize o saldo total descontando todos os débitos e retorne apenas os clientes
//   com saldo negativo.

const payDebt = (x:clienteKey[]) => {


    for(let divida of x) {
        for (let compra of divida.debitos) {
            divida.saldoTotal -= compra;
            divida.debitos = [];
        }
    }

    const newArr = x.filter(x=> x.saldoTotal < 0 )

   return newArr
}

console.log(payDebt(clientes))