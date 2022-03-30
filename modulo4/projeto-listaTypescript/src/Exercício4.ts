console.log('Exercicio 4')

//O seguinte array traz as pessoas colaboradoras de uma empresa, com seus
 //salários, setores e se trabalham presencialmente ou por home office:

const empresa:pessoas[] = [
	{ nome: "Marcos", salario: 2500, setor: "marketing", presencial: true },
	{ nome: "Maria" ,salario: 1500, setor: "vendas", presencial: false},
	{ nome: "Salete" ,salario: 2200, setor: "financeiro", presencial: true},
	{ nome: "João" ,salario: 2800, setor: "marketing", presencial: false},
	{ nome: "Josué" ,salario: 5500, setor: "financeiro", presencial: true},
	{ nome: "Natalia" ,salario: 4700, setor: "vendas", presencial: true},
	{ nome: "Paola" ,salario: 3500, setor: "marketing", presencial: true }
]

//Considerando o arrayacima, crie um ENUM para os setores e um type para as pessoas
// colaboradoras. Em seguida, crie uma função que receba este arraycomo parâmetro e
//  retorne apenas as pessoas do setor de marketing que trabalham presencialmente. 


enum setor {
   MARKETING = 'marketing',
   VENDAS = 'vendas',
   FINANCEIRO = 'financeiro',
}

type pessoas = {
   nome: string,
   salario: number,
   setor: string,
   presencial: boolean,
}

const selectDepartment = (x:pessoas[], y:string) => {

   const filter = x.filter(x=> x.setor === y)

   return console.log(filter)
}

selectDepartment(empresa, 'marketing')

