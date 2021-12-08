//-------------------------------------------------

//Exercícios de interpretação de código 1

//-------------------------------------------------


//O que o código abaixo está fazendo? Qual o resultado impresso no console?

let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)
 
//Ele ira somar o valor apos realizar o loop e o ultimo valor sera 10

//-------------------------------------------------

//Exercícios de interpretação de código 2

//-------------------------------------------------

 const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
        console.log(numero)
    }
} 

//Ira mostrar no console todos os numeros da lista maiores que 18 em ordem crescente

//B - sim para acessar cada um dos elementos seria necessario alterar o valor 
//dentro da condiçao

//-------------------------------------------------

//Exercícios de interpretação de código 3

//-------------------------------------------------



const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}
 
// 3 - Se o usuario digita-se 4 o programa iria imprimir quatro linhas 
// e para cada linha haveria o numeros de asteriscos 



//-------------------------------------------------

// Exercícios de escrita de código 1

//-------------------------------------------------


const bichos = Number(prompt(`Quantos animais voce possui ?`))
const array = []

if (bichos > 0) {

    
        while (bichos >= array.length+1) {
            array.push(prompt("Usuário digite os nomes deles, um por um"))
            
        }   
        alert(`Os seu animais sao ${array}`)

} 

else {

    alert("Que pena.. Voce pode adotar um pet :) !")

} 



//-------------------------------------------------

// Exercícios de escrita de código 2

//-------------------------------------------------



// A -

const original = [100, 200, 300, 400, 500, 600, 700]


function mostrarCont() {
    let tamanhoArray = original.length
    let i = 0
    console.log(`Os itens da lista sao`)
    while (i < tamanhoArray) {
        console.log(original[i++])
    }
}

mostrarCont()


//B -


const original2 = [100, 200, 300, 400, 500, 600, 700]

function mostrarContEDividir() {
    let tamanhoArray2 = original2.length
    let ii = 0
    
    console.log(`Os itens da lista divididos ficam`)
    while (ii < tamanhoArray2) {
        
        console.log(original2[ii++]/10)
    }
}
mostrarContEDividir()


// C - 

const original4 = [11, 22, 33, 44, 55, 66, 77]


function mostrarDiv() {

    let arrayPares = 0
    console.log(`Os itens da lista sao`)
    for (arrayPares of original4) {
        if (arrayPares % 2 === 0)
            console.log(arrayPares)
    }
}

mostrarDiv()




// D -

const original3 = [100, 200, 300, 400, 500, 600, 700]

function mostrarFrase() {
    let tamanhoArray3 = original3.length
    let iii = 0
    let xx = 1
    while (iii < tamanhoArray3) {
        console.log(`item na posicao ${xx++} fica ${original2[iii++]}`)
    
    }
}
mostrarFrase()

//E -

const original5 = [11, 22, 33, 44, 55, 66, 77]


function mostrarPrimeiroUltimo(caixa) {

   let ultimo = caixa.pop()
   let primeiro = caixa[0]
   return console.log(`O maior número é ${ultimo} e o menor é ${primeiro}`)
}

mostrarPrimeiroUltimo(original5)

