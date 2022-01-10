// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {

    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
   return array.sort((a, b) => a - b)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {

    const pares = array.filter(item => item % 2 === 0)
    return pares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let pares = array.filter(item => item % 2 === 0)
    let resul = pares.map(item => item ** 2)
    return resul
}


// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maior = 0 
    for (let num of array) {
        if (num > maior) {
            maior = num
        }
    }  
    return maior
}


// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maior 
    let div 
    let diferença = num2 - num1
    if (num1 > num2) { div = false
    } else { div = true}
    if (num1 > num2) { maior = num1
    } else { maior = num2}
    let objeto = {
        maiorNumero: maior,
        maiorDivisivelPorMenor: div,
        diferenca: Math.abs(diferença)
    }
    return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let maior = []
    for (let i = 0; maior.length<n; i++) {
        if (i % 2 === 0) {
            maior.push(i)
        }
    } 
    return maior
}


// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    let esca = "Escaleno"
    let equi = "Equilátero"
    let iso = "Isósceles"
    if (ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC) {
        return esca
    } else if (ladoA === ladoB && ladoA === ladoC){
        return equi
    } else if (ladoA === ladoB && ladoA !== ladoC){
        return iso
    } else if (ladoA === ladoC && ladoA !== ladoB){
        return iso
    } else if (ladoA !== ladoB && ladoB === ladoC){
        return iso
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let maximo = array.sort(function(a, b){return b - a;}) [1];
    let lista = array.sort(function(a, b){return b - a;})
    let menor = lista[lista.length -2]
    array1 = [maximo, menor]
    
    return array1
}  

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    filme = {
        nome: 'O Diabo Veste Prada',
        ano: 2006,
        diretor: 'David Frankel',
        atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
     }
     return `Venha assistir ao filme ${filme.nome}, de 2006, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}   

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
 const objetoEspa = {...pessoa, nome:"ANÔNIMO"}
    return objetoEspa
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    const resul2 = pessoas.filter((nome) => nome.idade > 14 && nome.idade <=69 && nome.altura >= 1.5 )
    return resul2
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const resul2 = pessoas.filter((nome) => nome.idade <= 69 && nome.altura <= 1.8 )
    return resul2
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
        for (divida of contas) {
        for (compra of divida.compras) {
            divida.saldoTotal -= compra;
            divida.compras = [];
        }
    }
    return contas;
}


// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    const novoArray = consultas.sort((a, b) => {
        if (a.nome < b.nome)
            return - 1;
        if (a.nome > b.nome)
            return + 1;
        return 0
    })
    return novoArray
}


// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}
