export const data = {
   
//Exercício 6

//Crie um array de posts para incrementar a base de dados da nossa API. 

//Você acha melhor criá-los dentro ou fora do array de usuários? Justifique com comentários no código.

//Não se esqueça de fazer a tipagem correta desse array.



/* 
Achei mais simples criar na mesma arvore pois e mais facil de ser acessado
*/
   users: [
      {
         id: 1,
         name: 'joaozinho',
         phone: '11-3733-3333',
         email: 'jbola@hmail.com',
         site: 'www.jb.com',
         posts: [
            {
               id: 1,
               title: 'frase de impacto',
               body: 'frase de impacto que fara voce pensar',
               userId: 1
            },
            {
               id: 2,
               title: 'frase matinal',
               body: 'frase que ira fazer voce se sentir animado para começar o dia bem',
               userId: 1
            }
         ]
      },
      {
         id: 2,
         name: 'mariazinha',
         phone: '11-3533-3333',
         email: 'opa@hmail.com',
         site: 'www.pais.com',
         posts: [
            {
               id: 1,
               title: 'rasef amatinl',
               body: 'frasquse rasque ira fazer voce sezer sentir animntiado para caomeçar o dia bem',
               userId: 2
            }
         ]
      },
      {
         id: 3,
         name: 'ronaldo',
         phone: '11-3533-3333',
         email: 'bomba@hmail.com',
         site: 'www.volta.com',
         posts: [
            {
               id: 1,
               title: 'usuario3',
               body: 'usuario3 comentario',
               userId: 3
            }
         ]
      },
      {
         id: 4,
         name: 'marilene',
         phone: '11-3533-3333',
         email: 'marli@maildopovo.com',
         site: 'www.marli.com',
         posts: [
            {
               id: 1,
               title: 'usuario3',
               body: 'usuario3 comentario',
               userId: 4
            }
         ]
      }
   ]

}

