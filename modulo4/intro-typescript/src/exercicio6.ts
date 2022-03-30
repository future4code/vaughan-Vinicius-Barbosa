const minhaFuncaoExercicio = (a:number, b:number):object => {

   const soma:number = a + b 
   const sub:number = a - b 
   const mult:number = a * b
   if (a > b) {
       const maior:number = a
       return {soma, sub, mult, maior}
   } else if(b > a) {
       const maior:number = b
        return {soma, sub, mult, maior}
   }

}

console.log(minhaFuncaoExercicio(5, 10))



