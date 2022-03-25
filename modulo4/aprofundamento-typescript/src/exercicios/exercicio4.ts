console.log('exercicio 4')
//a) Crie um arquivo chamado exercicio-4.ts , cole o código abaixo e use comentários 
//para responder as questões.


//b) Como você faria, já com a extensão instalada, para transpilar(converter) esse 
//arquivo typescript em um arquivo javascript?

/* 
Eu iria executar um comando no terminal chamado tsc para transpilar todos os arquivos
*/


type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}


//b) E se este arquivo estivesse dentro de uma pasta chamada src. O processo seria 
//diferente? Se sim, descreva as diferenças.

/* 
So o comando em si ja iria transpilar todos os arquivos
*/



//c) Existe alguma maneira de transpilar múltilplos arquivos de uma vez só? Caso conheça,
// explique como fazer.

/* 
Sim existe uma maneira e esta maneira e utilizando o comando tsc sem nenhum parametro
*/