
/*

//-------------------------------------------------

//Exercícios de interpretação de código 1

//-------------------------------------------------

const filme = {
    nome: "Auto da Compadecida", 
    ano: 2000, 
    elenco: [
        "Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
        "Virginia Cavendish"
        ], 
    transmissoesHoje: [
        {canal: "Telecine", horario: "21h"}, 
        {canal: "Canal Brasil", horario: "19h"}, 
        {canal: "Globo", horario: "14h"}
        ]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])



// A - Sera impresso matheus nachtergaele, virginia e globo 14h



//-------------------------------------------------

//Exercícios de interpretação de código 2

//-------------------------------------------------

const cachorro = {
    nome: "Juca", 
    idade: 3, 
    raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}


const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

// A - Sera impresso { nome: 'Juca', idade: 3, raca: 'SRD' }
//                   { nome: 'Juba', idade: 3, raca: 'SRD' }
//                   { nome: 'Jubo', idade: 3, raca: 'SRD' }
// B - Recebe todas as caracteristicas dos objetos anteriores, e apos a virgula
//      acrescenta se for o caso novas informaçoes. 


//-------------------------------------------------

//Exercícios de interpretação de código 3

//-------------------------------------------------


function minhaFuncao(objeto, propriedade) {
    return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

// - False e undefined 

// A - O primeiro aparece false pois back ender esta definido como false 
// o segundo aparece undefined pois nao existe esta propriedade no objeto



*/



//-------------------------------------------------

// Exercícios de escrita de código

//-------------------------------------------------


// 1 - Resolva os passos a seguir:


const objeto1 = {
    nome: "Joao",
    apelido: ["Pereba", "Ze", "Pitoco"]
}

function fraseBonita(nome, apelido) {
    return console.log(`Meu nome e ${nome} mas pode me chamar de ${apelido} `)
}

fraseBonita(objeto1.nome, objeto1.apelido)

/*

b) Agora, usando **o operador spread**, crie um novo objeto mantendo o 
valor da propriedade nome, mas com uma nova lista de três apelidos. 
    Depois, chame a função feita no item anterior passando como argumento 
    o novo objeto
*/

const objeto2 = {
    nome: "Nobrega",
    apelido: ["Pereba", "Ze", "Pitoco"]
}

const objetoHerdado = { ...objeto2, apelido: ["Pimpolho", "Xumbrega", "Barata"] }


function fraseBonita2(nome, apelido) {
    return console.log(`Meu nome e ${nome} mas pode me chamar de ${apelido} `)
}

fraseBonita2(objetoHerdado.nome, objetoHerdado.apelido)



// Resolva os passos a seguir 

//A

const objtPessoa1 = {
    nome: "Jorge",
    idade: 26,
    profissao: "Eletricista"
}
const objtPessoa2 = {
    nome: "Mateus",
    idade: 28,
    profissao: "Garçom"
}

//B 

function retornaValor(nome, nomeNum, idade, profissao, NumProf) {

    array = [nome, nomeNum, idade, profissao, NumProf]
    return console.log(array)


}

retornaValor(objtPessoa1.nome, objtPessoa1.nome.length, objtPessoa1.idade,
    objtPessoa1.profissao, objtPessoa1.profissao.length)

retornaValor(objtPessoa2.nome, objtPessoa2.nome.length, objtPessoa2.idade,
    objtPessoa2.profissao, objtPessoa2.profissao.length)



// 3 - Resolva os passos a seguir:

var carrinho = []

const frutaA = {
    nome: "Banana",
    disponivel: true
}

const frutaB = {
    nome: "Kiwi",
    disponivel: true
}

const frutaC = {
    nome: "Acerola",
    disponivel: true
}

function juntar(a, b, c) {

    carrinho = [a, b, c]
    return console.log(carrinho)
}

juntar(frutaA, frutaB, frutaC)


//DESAFIOOOOOOOHHHH


//DESAFIO 1 

function perNomeIdadEProf() {
    let perNome = prompt("Digite seu nome")
    let perIdade = Number(prompt("Digite sua idade"))
    let perProfissao = prompt("Digite sua profissao")
    const objetoX = {
        nome: perNome,
        idade: perIdade,
        profissao: perProfissao
    }
    return console.log(objetoX)
}


//DESAFIO 2

const film1 = {
    nome: "Matrix",
    anoLancamento: 1999
}

const film2 = {
    nome: "Ghost in the shell",
    anoLancamento: 2017
}

function doisObjetos(mov1, mov2) {

    if (mov1.anoLancamento > mov2.anoLancamento) {

        console.log(" O primeiro filme e mais antigo que o segundo ? true")

    } else {

        console.log("O primeiro filme e mais antigo que o segundo ? false")

    }

    return
}

doisObjetos(film1, film2)

//DESAFIO 3

var carrinhoDesa = []

const frutasA = {
    nome: "Banana",
    disponivel: true
}

const frutasB = {
    nome: "Kiwi",
    disponivel: true
}

const frutasC = {
    nome: "Acerola",
    disponivel: true
}

/*
function juntar(a, b, c) {

    carrinho = [a, b, c]
    return console.log(carrinho)
}

juntar(frutaAa, frutaBb, frutaCc)
*/


function removerFrutaEstoque(parm1, parm2, parm3) {
    parm1 = parm1.disponivel = false
    parm2 = parm2.disponivel = false
    parm3 = parm3.disponivel = false
    return parm1, parm2, parm3
}


removerFrutaEstoque(frutasA, frutasB, frutasC)

console.log(frutasA, frutasB, frutasC)