//-------------------------------------------------

//Exercícios de interpretação de código 1

//-------------------------------------------------

console.log("Exercicio 1")
const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
]

usuarios.map((item, index, array) => { console.log(item, index, array) })

// A esse codigo mostra de acordo com a funçao map mostra de acordo com o loop 
// o item o index e o array todo em si


//-------------------------------------------------

//Exercícios de interpretação de código 2

//-------------------------------------------------
console.log()
console.log("Exercicio 2")
const usuarios1 = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
]

const novoArrayB = usuarios1.map((item, index, array) => {
    return item.nome
})

console.log(novoArrayB)
console.log()
console.log()
// A constante mostra os primeiros itens de acordo com a posicao no array. 


//-------------------------------------------------

//Exercícios de interpretação de código 3

//-------------------------------------------------
console.log("Exercicio 3")
console.log()
console.log()
const usuarios2 = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
]

const novoArrayC = usuarios2.filter((item, index, array) => {
    return item.apelido !== "Chijo"
})

console.log(novoArrayC)
console.log()
console.log()
// essa constante filtra e mostra todos os objetos dentro do array com exceçao 
// de objetos com o final chijo.


//-------------------------------------------------

//Exercícios de escrita de codigo 1 

//-------------------------------------------------


const pets = [
    { nome: "Lupin", raca: "Salsicha" },
    { nome: "Polly", raca: "Lhasa Apso" },
    { nome: "Madame", raca: "Poodle" },
    { nome: "Quentinho", raca: "Salsicha" },
    { nome: "Fluffy", raca: "Poodle" },
    { nome: "Caramelo", raca: "Vira-lata" }]




// A
const dogs = pets.map((item, index, array) => {
    return item.nome
})

console.log(dogs)


// B
const dogsB = pets.filter((item, index, array) => {
    return item.raca === "Salsicha"
})

console.log(dogsB)

// C

const dogsC = pets.filter((item, index, array) => {
    return item.raca === "Poodle"
})

const filtro = dogsC.map((item, index, array) => {
    return item.nome
})

console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${filtro[0]}`)
console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${filtro[1]}`)




//-------------------------------------------------

//Exercícios de escrita de codigo 2

//-------------------------------------------------


const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }]


    // A  --------


    const loja = produtos.map((item, index, array) => {
        return item.nome
    })
    
    console.log(loja)

    //   B

    const loja2 = produtos.map((item, index, array) => {
        
        return {nome : item.nome , preco:  Math.round(item.preco * (1-0.05) *100 /100)}
    })

    console.log(loja2)


    // C ---------

    const loja3 = produtos.filter((item, index, array) => {
        return item.categoria == "Bebidas"
    })

    console.log(loja3)

    // D

    
    const loja4 = produtos.filter((item, index, array) => {
        return item.nome.includes("Ypê")
    })

    console.log(loja4)

    // E 

    const preço = loja4.map((item, index, array) => {
        return item.preco
    })

    const nome = loja4.map((item, index, array) => {
        return item.nome
    })
    
    console.log(`Compre ${nome[0]} por apenas ${preço[0]}`)
    console.log(`Compre ${nome[1]} por apenas ${preço[1]}`)


