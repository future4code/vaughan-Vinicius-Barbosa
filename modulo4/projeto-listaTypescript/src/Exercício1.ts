console.log('Exercicio 1')


//Crie um função que receba uma string com o nome e outra string com uma data de nascimento 
//(ex.: “24/04/1993”). A função deve separar o dia, o mês e ano e retornar uma string no 
//seguinte formato: 

//"Olá me chamo {NOME}, nasci no dia {DIA} do mês de {MÊS} do ano de {ANO}" 

const printPhrase = (name:string, birth:string):string => {
   const birthData = birth.split('/')
   return `Ola me chamo ${name}, nasci no dia ${birthData[0]} do mes ${birthData[1]} do ano de ${birthData[2]}`
}

console.log(printPhrase('Vinicius','27/07/1995'))

