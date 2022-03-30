console.log('Exercicio 9')

//A quantidade de anagramas de uma palavra sem nenhuma letra repetida é o fatorial da 
//quantidade de letras. Para `mesa`, a quantidade é `4! = 24`

//Considerando tudo o que foi mencionado, escreva uma função que receba uma `palavra` 
//(sem letras repetidas) e devolva a quantidade de anagramas que ela possui.



const retornAnagrams = (phrase: string): number => {
   let total: number = 1

   for (let i: number = 1; i <= phrase.length; i++) {
       total = total * i
   }

   return total
} 

console.log(retornAnagrams('gato'))



