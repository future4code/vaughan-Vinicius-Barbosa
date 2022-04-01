console.log('Exercicio 5')

//Considerando o array de usuários abaixo, crie uma função que receba este array como
//parâmetro e retorne uma lista com apenas os emails dos usuários “admin”. 


type person = {
   name: string,
   email: string,
   role: string
}


  const users:person[] = [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 


//Saída esperada
//[ "ademir@email.com", "carina@email.com" ]

const getEmails = (x:person[]):any => {

   const result = x.filter((x)=>{    
      
      return x.role == 'admin'

   }).map((x)=> {

      return x.email
   } )

   return console.log(result)
}

getEmails(users)