// -------- Exercicio 2 -------------//
 
const firstArgument = process.argv[2]

const secondArgument = Number(process.argv[3])

const thirtArgument = Number(process.argv[4])

if (firstArgument === "add") {

   console.table( `Esta e a soma das entradas ${secondArgument + thirtArgument}`)
   
} else if (firstArgument === "sub") {

   console.table( `Esta e a subtraçao das entradas ${secondArgument - thirtArgument}`)

}  else if(firstArgument === 'mult ') {

   console.table( `Esta e a multiplicaçao das entradas ${secondArgument * thirtArgument}`)

} else if(firstArgument === 'div') {

   console.table( `Esta e a divisao das entradas ${secondArgument / thirtArgument}`)
   
} 
