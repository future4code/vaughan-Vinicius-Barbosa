// -------- Exercicio 3 -------------//

const firstArgument = process.argv[2]


const objeto = {

   tarefas: ['varrer'],

}

const novoArr = objeto.tarefas.push(firstArgument)

const resul = objeto.tarefas.map((x)=> x)


console.table(resul)