//Exercicio de interpretaçao de codigo 1

function minhaFuncao(variavel) {
    return variavel * 5
}

console.log(minhaFuncao(2))           // A-       10, 50   
console.log(minhaFuncao(10))
minhaFuncao(2)
minhaFuncao(10)
//B-    nao apareceria nada. 

//Exercicio de interpretaçao de codigo 2



let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
    return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)
//   A -  Essa funcao passa uma string para letras minusculas 
// e busca na string a palavra cenoura se houver essa palavra 
// ela devolve a resposta em boolean 

/* B - I - true 
       II - true 
       III - true

*/

// Exercicios de escrita

// Exercicio 1

//A
//Questao 1  
   alert(`Exercicio A`)

   function perguntarInfo() {
      let nome = prompt(`Digite seu nome`)
      let idade = prompt(`Qual sua idade`)
      let estado = prompt(`Qual seu estado`)
      let estuda = prompt(`Estuda ?`)
      return alert(`Ola! ${nome}, sua idade e ${idade}, seu estado e ${estado},
      voce estuda atualmente ? Sua resposta e: ${estuda}`)

   }

   perguntarInfo()

   //B

   /*
   alert(`Exercicio B`)

   function perguntarInfo2(nome, idade, estado, estuda) {
       nome = prompt(`Digite seu nome !`)
       idade = Number(prompt(`Digite sua idade !`))
       estado = prompt(`Digite seu estado !`)
       estuda = prompt(`Estuda ?`)
       return alert(`Ola ${nome}, sua idade e ${Integer.toString(idade)}, voce mora no estado de ${estado},
       esta atualmente estudando ? ${estuda}.`)
   }

   perguntarInfo2()


*/
alert(`Exercicio A`)

function somar(num1, num2) {
    let res = num1 + num2
    return console.log(res)
}
alert(`Digite um numero para somar`)

somar(Number(prompt(`Numero 1`)), Number(prompt(`Numero 2`)))


alert(`Exercicio B`)


function somarx(num1, num2) {
    let res = num1 >= num2
    return console.log(res)
}
alert(`Verificar se o primeiro e maior ou igual o segundo numero`)

somarx(Number(prompt(`Numero 1`)), Number(prompt(`Numero 2`)))



alert(`Exercicio C`)


function somarj() {
    let num1 = Number(prompt(`Digite um numero !`))
    let num2 = num1 % 2
    let num3 = num2 > 0 
    return alert(`Seu numero e impar ? ${num3}`)
}

somarj()



alert(`Exercicio D`)


function caixaAltaENumeros(letras) {
    alert("Veja o console com a palavra maiuscula com a quantidade de letras")
    return console.log(letras.toUpperCase(), letras.length)
}

caixaAltaENumeros(prompt(`Digite seu nome`))



// Questao 3 

function opeBasicas (num1, num2) {
    let res1 = num1+num2
    let res2 = num1-num2
    let res3 = num1*num2
    let res4 = num1/num2
    return alert(`  Numeros inseridos : ${num1} e ${num2}
                    Soma: ${res1}
                    Diferença: ${res2}
                    Multiplicação:${res3}
                    Divisão: ${res4}`)

        }
opeBasicas(Number(prompt(`Digite o primeiro numero`)),Number(prompt(`Digite o segundo numero`)))
               



                //Desafio 
        //A
    imprimir = (nome) => {
        return alert(`Isso e uma arrow function ${nome}`)
    } 

        //B
    doisValores = (valor1, valor2) => {
        let pode = valor1 + valor2
        imprimir(pode)        
    }

doisValores(10, 10)


    pitaGora = (numero2, numero3) => {
        let cateto1 = numero2**2
        let cateto2 = numero3**2
        let resul = cateto1+cateto2
        return alert(`O resultado da hipotenusa e ${resul}`)
    }


    pitaGora(Number(prompt(`Cateto 1`)), Number(prompt(`Cateto 2`)))

