
        
        //Exercícios de interpretação de código
   
   /*
    let array
    console.log('a. ', array) //Undefined 

    array = null   
    console.log('b. ', array) //null

    array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    console.log('c. ', array.length) //  11 numeros 

    let i = 0 
    console.log('d. ', array[i]) // 3

    array[i+1] = 19 
    console.log('e. ', array) /*[
        3, 19,  5,  6,  7,
        8,  9, 10, 11, 12,
       13
*/
    //const valor = array[i+6]
    //console.log('f. ', valor) // 9 


        //Exercicio de interpretação de texto 2

        //const frase = prompt("Digite uma frase")

        //console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

        //A frase ficara caixa alta, todas as letras A serao trocadas por I e sera 
        //contada todas as letras.
        // SUBI NUM ÔNIBUS EM MIRROCOS 23


        //Exercícios de escrita de código
   alert('Exercicio 1')
    let nome = prompt(`Digite o nome de usuario`)
    let email = prompt(`Ola! ${nome} digite o seu email `)

    alert(`${nome} seu email: ${email} foi cadastrado com sucesso !`)

  //  alert('Exercicio 2')

    let comidaFavorita = ["Frango","Carne","Ovos","Batata doce","Feijao"]
    console.log(comidaFavorita)
    console.log()
    console.log(`Essas sao minhas comidas favoritas : `)
    console.log(comidaFavorita[0])
    console.log(comidaFavorita[1])
    console.log(comidaFavorita[2])
    console.log(comidaFavorita[3])
    console.log(comidaFavorita[4])
    console.log()
        //Desafio C
    let usuarioComida = prompt(`Digite aqui uma comida que voce goste!`)
    comidaFavorita[1] = usuarioComida
    console.log(comidaFavorita)

    alert('Exercicio 3')

    let listaDeTarefas = [] //A
    
    listaDeTarefas.push(prompt(`Digite aqui uma tarefa do seu dia.`))

    listaDeTarefas.push(prompt(`Digite novamente uma tarefa do seu dia.`))

    listaDeTarefas.push(prompt(`Digite novamente uma tarefa do seu dia.`)) // B
    
    console.log(listaDeTarefas) //C
    
    let numeroDaPosicao = prompt("Digite um numero de um a 3 de suas tarefas para remove-las!")

    let saida = listaDeTarefas.splice(numeroDaPosicao-1,1)

    alert(`A removida foi ${saida}`) 

    alert(`Sua lista agora esta com as seguintes tarefas: ${listaDeTarefas}`)
    
    //fim
    




