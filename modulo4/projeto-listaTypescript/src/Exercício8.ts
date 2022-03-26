console.log('Exercicio 8')


function checaRenovacaoRG_BR(anoNascimento: string, anoEmissao: string):boolean {

   const anoNas:string[] = anoNascimento.split('/')
   const anoEmi:string[] = anoEmissao.split('/')
   const anoAtual: number = new Date().getFullYear()

   let idade:number = anoAtual - parseInt(anoNas[2])
   let tempoCarteira:number = anoAtual - parseInt(anoEmi[2])

   if (idade <= 20) {
      return tempoCarteira >= 5 ? true : false

   } else if (idade >= 20 || idade <= 50) {
      return tempoCarteira >= 10 ? true : false

   } else if (idade > 50) {
      return tempoCarteira >= 15 ? true : false

   } else {
      return false
   }
}

console.log(checaRenovacaoRG_BR("27/07/1995", "18/03/2012"))

