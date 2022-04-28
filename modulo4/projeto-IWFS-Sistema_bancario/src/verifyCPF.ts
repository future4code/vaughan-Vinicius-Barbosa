
export const verificaCPF = (cpf: number) => {

   const arrayVer = cpf.toString().split('')

   let cpfNumber: number[] = []
   for (let i of arrayVer) {
      cpfNumber = [...cpfNumber, parseInt(i)]
   }

   const cpfArr1: number[] = [...cpfNumber]
   const cpfArr2: number[] = [...cpfNumber]

   if (arrayVer.length < 11 || arrayVer.length > 11) {
      return 'Cpf precisa ter 11 digitos'
   }

   let test1 = cpfArr1.splice(0, 9)
   let test2 = cpfArr2.splice(0, 10)

   switch (cpf) {
      case 11111111111:
      case 22222222222:
      case 33333333333:
      case 44444444444:
      case 55555555555:
      case 66666666666:
      case 77777777777:
      case 88888888888:
      case 99999999999:
         return false
   }


   // primeiro DV

   var numero = 10
   var resultado = 0
   for (var i of test1) {
      resultado = resultado + i-- * numero--
   }

   var firstDV = 11 - resultado % 11

   if (firstDV >= 10) {
      firstDV = 0
   }
   

   if (firstDV === cpfArr1[0]) {
      
   } else {
      return false
   }

   // Segundo DV

   var numero2: number = 11
   var resultado2: number = 0
   for (let i of test2) {
      resultado2 = resultado2 + i-- * numero2--
   }

   var secondDV = 11 - resultado2 % 11

   if (secondDV >= 10) {
      secondDV = 0
   }


   if (secondDV === cpfArr1[1]) {
     
   } else {
      return false
   }

   return true
}
