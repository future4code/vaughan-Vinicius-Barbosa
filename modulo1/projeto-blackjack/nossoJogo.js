/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
*/

console.log("Bem-vindo(a) ao jogo de blackjack")



alert(`Abra o prompt`)

let jogo = confirm("Quer iniciar uma rodada?")

function jogarBlack() {


   var cartaUsuarioA = comprarCarta()
   var cartaUsuarioB = comprarCarta()
   var cartaPcA = comprarCarta()
   var cartaPcB = comprarCarta()

   if (jogo === true) {

      let pontuacaoUser = cartaUsuarioA.valor + cartaUsuarioB.valor
      let pontuacaoPc = cartaPcA.valor + cartaPcB.valor
      alert(`O jogo começou`)
      alert(`Cartas do usuario`)
      console.log(`A pontuaçao do usuario foi ${pontuacaoUser}, cartas ${cartaUsuarioA.texto} ${cartaUsuarioB.texto}`)
      alert(`Cartas do computador`)
      console.log(`A pontuaçao do computador foi ${pontuacaoPc}, cartas ${cartaPcA.texto} ${cartaPcB.texto}`)


      if (pontuacaoUser > pontuacaoPc) {
         alert(`Parabens voce ganhou!`)
      } else if (pontuacaoUser < pontuacaoPc) {
         alert("Voce perdeu :( tente novamente")
      } else if (pontuacaoUser === pontuacaoPc) {
         alert("Jogo empatou -_-")
      }
      let jogarNovamente = confirm("Jogar novamente ?")
      if (jogarNovamente === true) {
         jogarBlack()
      } else {
         alert("Ate mais !")
      }


   } else {

      alert(`O jogo acabou`)
   }

}

jogarBlack() 
