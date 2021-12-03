// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  let altura = Number(prompt(`Altura`))
  let largura = Number(prompt(`Altura`))
  return console.log(altura * largura)
}

// EXERCÍCIO 02
function imprimeIdade() {
  let anoAtual = Number(prompt(`Idade`))
  let anoNas = Number(prompt(`Nascimento`))
  return console.log(anoAtual - anoNas)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  let imc = peso / (altura * altura)
  return imc.toFixed(1)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  nome = prompt(`Nome`)
  idade = prompt(`Idade`)
  email = prompt(`Email`)
  return console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  cor1 = prompt(`Cor1`)
  cor2 = prompt(`Cor2`)
  cor3 = prompt(`Cor3`)
  res = [cor1, cor2, cor3]
  return console.log(res)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  string2 = string.toUpperCase()
  return string2

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {

  let pessoas = custo / valorIngresso

  return pessoas

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  numeroLetras1 = string1.length
  numeroLetras2 = string2.length
  comparacao = numeroLetras1 >= numeroLetras2
  return comparacao
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  resta = array[2, 0]
  return resta
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {

  return array.pop()
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  

  array2 = array.pop()
  array3 = array.splice(0,1)
  array.unshift(array3)
  array.push(array2)
  
  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  string3 = string1.toLowerCase()
  string4 = string2.toLowerCase()
  respos = string3 == string4
  return respos
  //console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}