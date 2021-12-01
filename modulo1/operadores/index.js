
/*
// Exercicio 1

    const bool1 = true
    const bool2 = false
    const bool3 = !bool2  // contrario de false e True

    let resultado = bool1 && bool2 // false     
    console.log("a. ", resultado) // false

    resultado = bool1 && bool2 && bool3  // false   
    console.log("b. ", resultado) // false 

    resultado = !resultado && (bool1 || bool2) // false 
    console.log("c. ", resultado) // false 

    console.log("d. ", typeof resultado) // boleano

// Exercicio 2 

    let primeiroNumero = prompt("Digite um numero!")
    let segundoNumero = prompt("Digite outro numero!")

    const soma = primeiroNumero + segundoNumero

    console.log(soma)

    // O programa vai concatenar as informações passadas no prompt

// Exercicio 3

    let primeiroNumero = Number(prompt("Digite um numero!"))
    let segundoNumero = Number(prompt("Digite outro numero!"))

    const soma = primeiroNumero + segundoNumero

    console.log(soma) 

    // Pronto 
*/

// Exercicio de escrita de codigo 1 

alert("Exercicio 1")

let idadeUsuario = Number(prompt(`Digite aqui sua idade !`))
let idadeAmigo = Number(prompt(`Agora digite aqui a idade de seu melhor amigo !`))

let soma = idadeUsuario > idadeAmigo

console.log(`Sua idade e maior de seu amigo ? ${soma}`)

let difer = idadeUsuario - idadeAmigo 

console.log(`Diferença de idade e ${difer}`)


// Exercicio de escrita de codigo 2
alert("Exercicio 2")

let numeroUsuario = Number(prompt(`Ola usuario insira um numero par`))

let resto = numeroUsuario % 2

console.log(`O resto da divisao deste numero por 2 foi ${resto}`)

//Se o usuario colocar um numero impar ira sobrar um resultado na divisao por 2
// oque indicara que esse numero e impar 

// Exercicio de escrita de codigo 3
alert("Exercicio 3")
let IdadeEmAnos = Number(prompt(`Digite aqui sua idade em anos`))

let idadeEmMeses = IdadeEmAnos * 12 

alert(`Sua idade em meses e ${idadeEmMeses}`)

let idadeEmDias = idadeEmMeses * 365

alert(`Sua idade em dias e ${idadeEmDias}`)

let idadeEmHoras = idadeEmDias * 24

alert(`Sua idade em horas e ${idadeEmHoras}`)


//Exercicio de escrita de codigo 4
alert("Exercicio 4")

let exNumero1 = parseInt(prompt(`Digite um numero !`)) 

let exNumero2 = parseInt(prompt(`Digite outro numero !`)) 

let resul1 = exNumero1 > exNumero2

alert(`O primeiro numero é maior que segundo? ${resul1}`)

let resul2 = exNumero1 === exNumero2

alert(`O primeiro numero é igual ao segundo? ${resul2}`)

let resul3 = exNumero1 % exNumero2 === 0

alert(`O primeiro numero é divisível pelo segundo? ${resul3}`)

let resul4 = exNumero2 % exNumero1 === 0

alert(`O segundo numero é divisível pelo primeiro? ${resul4}`)

