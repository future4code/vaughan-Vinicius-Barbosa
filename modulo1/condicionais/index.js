


//-------------------------------------------------

//Exercícios de interpretação de código 1

//-------------------------------------------------

const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero1 = Number(respostaDoUsuario)

if (numero1 % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

// A - o exercicio testa o numero se e par ou impar 

// B - Para todos os numeros pares 

// C - Para todos os numeros impares 


//-------------------------------------------------

//Exercícios de interpretação de código 2

//-------------------------------------------------

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// A - para mostrar ao usuario o preço da fruta no estoque

// B - para a fruta maça sera mostrado o valor de 2.25

// C - O preço a ser mostrado seria o default pois o computador iria
// ignorar o item pera 

//-------------------------------------------------

//Exercícios de interpretação de código 3 

//-------------------------------------------------
/*
const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
    let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)
*/
//A - A primeira linha solicita um numero ao usuario e o colocar em
// uma constante 

//B - Nao iria acontecer nada pois nao foi definida uma condicao se nao no codigo

//C - Havera sim pois a variavel com string iria funcionar fora so se fosse 
// uma variavel global como var




// ********************************************

// Exercícios de escrita de código 1

// ********************************************



const idade = Number(prompt("Digite sua idade !"))

function verificarIdade(idade) {

    if (idade >= 18) {

        alert("Usuario pode dirigir !")

    } else {

        alert("Usuario nao pode dirigir !")
    }

}
verificarIdade(idade)




// ********************************************

// Exercícios de escrita de código 2

// ********************************************


const alunoJoao = {
    nome:"",
    turno: undefined
}


function preencherNomeTurno(valor) {

    valor.nome = prompt("Digite seu nome")
    valor.turno = prompt("Digite o periodo do seu curso")
    valor.turno = valor.turno.toLowerCase()

    if (valor.turno == "matutino") {

        alert(`Bom dia ! ${valor.nome}`)

    } else if (valor.turno == "vespertino") {

        alert(`Boa tarde ! ${valor.nome}`)

    } else if (valor.turno == "noturno") {

        alert(`Boa noite ! ${valor.nome}`)

    } else {
        alert("Verifique a informacao digitada do turno novamente")
    }
    valor.nome = valor.nome.toLowerCase()
} 

preencherNomeTurno(alunoJoao)





// ********************************************

// Exercícios de escrita de código 3

// ********************************************


const alunoJoao2 = {
    nome:"",
    turno: undefined
}

function preencherNomeTurno2(valor) {

    valor.nome = prompt("Digite seu nome")
    valor.turno = prompt("Digite o periodo do seu curso")
    valor.turno = valor.turno.toLowerCase()

    switch (valor.turno) {        
        case 'matutino' : alert(`Bom dia ! ${valor.nome}`)
        break 
        case 'vespertino' : alert(`Boa tarde ! ${valor.nome}`)
        break
        case 'noturno' : alert(`Boa noite ! ${valor.nome}`)
        break
        default : alert("Verifique os dados do periodo novamente")
}
    valor.nome = valor.nome.toLowerCase()
} 

preencherNomeTurno2(alunoJoao2)



// ********************************************

// Exercícios de escrita de código 4

// ********************************************


const filme1 = {
    nome: "Matrix",
    genero: "Fantasia",
    preço: 20
}
const filme2 = {
    nome: "Todos bebados 3",
    genero: "comedia",
    preço: 30
}
const filme3 = {
    nome: "Mega mundo",
    genero: "desenho",
    preço: 30
}
const filme4 = {
    nome: "O Hobbit",
    genero: "Fantasia",
    preço: 10
}


function perguntarFilme() {
    let genero = prompt("Digite aqui o genero que voce ira assistir")
    genero = genero.toLowerCase().trim().replace(" ", "")

    if (genero == "fantasia") {
        alert(`Os filmes do genero fantasia disponiveis em cartas: 
        ${filme1.nome} 
        Genero : ${filme1.genero} 
        Preço ${filme1.preço} Reais 
        ${filme4.nome} 
        Genero : ${filme4.genero} 
        Preço ${filme1.preço} Reais`)
    } else {
        alert(`Todos filmes disponiveis em cartas : ${filme1.nome}, ${filme2.nome}, ${filme3.nome}, ${filme4.nome}`)
    }

}

perguntarFilme()

let assistir = prompt("Voces irao assistir um destes filmes ?")
assistir = assistir.toLowerCase().trim().replace(" ", "")
if (assistir == "sim") {
    alert("Otimo filme")
} else {
    alert("Escolha outro filme :(")
}
