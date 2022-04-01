console.log('exercicio 2')

/*
==JS== 

function obterEstatisticas(numeros) {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

*/

//a) Quais são as entradas e saídas dessa função? Copie a função para um arquivo .ts e 
//faça a tipagem desses parâmetros
/* 
Resposta = a funçao recebe um array de numeros como parametro e devolve um objeto com 
o maior item deste array o menor e a media de todos os numeros
*/


function obterEstatisticas(numeros: number[]): Object {

   const numerosOrdenados: number[] = numeros.sort(
      (a, b) => a - b
   )
   let soma: number = 0
   for (let num of numeros) {
      soma += num
   }
   const estatisticas: { maior: number, menor: number, media: number } = {

      maior: numerosOrdenados[numeros.length - 1],
      menor: numerosOrdenados[0],
      media: soma / numeros.length
   }
   return estatisticas
}
console.log(obterEstatisticas([2, 6, 8]))


//b) Quais outras variáveis compõem essa função? Explicite a tipagem de todas elas 

/* 
Resposta = Nesta funçao nos temos a variavel constante numerosOrdenados que recebe um array de obejtos
temos a variavel que pode ter valor reatribuido soma onde ela recebe um numero e uma variavel const onde 
a mesma recebe um objeto com tres chaves de numeros dos resultados das funçoes acima. 
*/



//c) Crie um type chamado amostra de dados, isto é, um objeto com as propriedades numeros e 
//obterEstatisticas. Abaixo, temos um exemplo de objeto desse tipo, declarado em JavaScript:


const amostraDeDados:{dados: number[], obterEstatisticas: any} = {

   dados: [21, 18, 65, 44, 15, 18],

   obterEstatisticas: (numeros: number[]) => {
      const numerosOrdenados: number[] = numeros.sort(
         (a, b) => a - b
      )
      let soma: number = 0
      for (let num of numeros) {
         soma += num
      }
      const estatisticas: { maior: number, menor: number, media: number } = {

         maior: numerosOrdenados[numeros.length - 1],
         menor: numerosOrdenados[0],
         media: soma / numeros.length
      }
      return estatisticas
   }
}

console.log(amostraDeDados.obterEstatisticas(amostraDeDados.dados))
