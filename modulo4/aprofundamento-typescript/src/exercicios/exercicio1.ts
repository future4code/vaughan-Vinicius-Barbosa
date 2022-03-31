console.log('exercicio 1')
// a) Crie uma variável minhaString do tipo string e atribua um valor a ela. Tente atribuir um 
//número a esta variável. O que acontece?

let minhaString : string 
//minhaString = 9
minhaString = '9'

console.log(minhaString)


/* 
Acontece um erro pois a variavel declarada so aceita strings
*/







//b) Crie uma variável meuNumero do tipo number e atribua um valor numérico. 
//Como fazer para que essa variável também aceite strings? Ou seja, como criamos no 
//typescript uma variável que aceite mais de um tipo de valor?

let meuNumero : number | string

meuNumero = 'sss' 

console.log(meuNumero)







//c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:

//`nome`, que é uma string;

//`idade`, que é um número;

//`corFavorita`, que é uma string.

enum colors {
   RED = 'red',
   ORANGE = 'orange',
   YELLOW = 'yellow',
   GREEN = 'green',
   BLUE = 'blue',
   DARKBLUE = 'darkblue',
   VIOLET = 'violet',
   WHITE = 'white'
}

type personInfo = {
   name: string, age: number, favoriteColor: string
}

const person1: personInfo = {
   name: "littleJhon",
   age: 7,
   favoriteColor: colors.BLUE
}

const person2: personInfo = {
   name: "Meg",
   age: 47,
   favoriteColor: colors.WHITE
}


const person3: personInfo = {
   name: "jack",
   age: 46,
   favoriteColor: colors.WHITE
}

const person4: personInfo = {
   name: "jack",
   age: 18,
   favoriteColor: colors.DARKBLUE
}






