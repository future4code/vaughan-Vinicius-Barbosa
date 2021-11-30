
    //Exercícios de interpretação de código
   
   //Exercicio 1

     //   let a = 10
     //   let b = 10

     //   console.log(b)   // mostrara 10

     //   b = 5
     //   console.log(a, b)  // mostrara 10 e 5



    // Exercicio 2

    /*        let a = 10
            let b = 20
            c = a
            b = c
            a = b
            
            console.log(a, b, c) 

            resposta 10, 10, 10 
*/


    //Exercicio 3 

    let horas_por_dia = prompt("Quantas horas você trabalha por dia?")
    let valorDiaTrabalho = prompt("Quanto você recebe por dia?")
    alert(`Voce recebe ${valorDiaTrabalho/horas_por_dia} por hora`)


    // Exercicio escrita de codigo 

    //a- 
    let nome    
    
    //b
    let idade
    
    //c
    console.log(typeof(nome)) //undefined
    console.log(typeof(idade))  //undefined
    
    //d Este resultado deu indefinido pois nao atribui nenhum valor a ela. 

    //e

    nome = prompt("Digite aqui seu nome")
    
    idade = prompt("Digite aqui sua idade")
    //f

    console.log(typeof(nome))
    console.log(typeof(idade))

    //notei que o tipo destas variaveis sao string


    //G -
    alert(`Ola ${nome} voce tem a idade de ${idade} anos`)
    
    // EXERCICIO 2 
    

    let resposta1 = "sim"     
    let resposta2 = "sim"
    let resposta3 = "sim"
    alert(`Voce esta usando uma bermuda cinza ? ${resposta1}`)
    alert(`Voce esta sem chinelo ? ${resposta2}`)
    alert(`Esta sol ? ${resposta3}`)

    //EXERCICIO 3

  

    alert("oi")
    let a = 10
    let b = 25
    

    a = b
    alert(`O novo valor de a é, ${a}`) // O novo valor de a é 25
    b = 10
    alert(`O novo valor de b é, ${b}`) // O novo valor de b é 10


    //DESAFIO 
    alert("Desafio")
    let numero1 = Number(prompt("Digite aqui o primeiro numero"))
    
    let numero2 = Number(prompt("Digite aqui o segundo numero"))
    let soma = numero1 + numero2
    let mult = numero2 * numero2
    alert(`O primeiro numero somado ao segundo numero da ${soma}`)
    alert(`O primeiro número multiplicado pelo segundo número resulta em: ${mult}`)
