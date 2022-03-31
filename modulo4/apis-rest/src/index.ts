import express, { Request, Response } from 'express';
import cors from 'cors';
import { users, userType, userTypeKey } from './data';
import { AddressInfo } from "net"


const app = express();

app.use(express.json());
app.use(cors());


// getAllUsers
// 1
// A. Qual método HTTP você deve utilizar para isso?
// Metodo Get
// B. Pelo que entendi uma entidade seria um caminho para 
// determinada sequencia de dados dentro de uma tabela de dados no servidor.


//2 a. Como você passou os parâmetros de type para a requisição? Por quê?
// passei por meio de query parameters pois e uma boa pratica
// B.Você consegue pensar em um jeito de garantir que apenas types válidos sejam utilizados?
// Por meio de enum e possivel restringir o tipo do dado a poucas opçoes.


//3 a.  Qual é o tipo de envio de parâmetro que costuma ser utilizado por aqui?
// E utilizado query parameters pois e uma pesquisa 
// B. b. Altere este endpoint para que ele devolva uma mensagem 
//de erro caso nenhum usuário tenha sido encontrado.
// Alterado a baixo

// 4 a. Mude o método do endpoint para PUT. O que mudou?
// Eu mudei a aconteceu um erro no postman
// b. Você considera o método PUT apropriado para esta transação? Por quê?
// Nao acho apropriado pois put colocar uma nova informaçao em um dado ja existente



app.get("/users", (req: Request, res: Response) => {

   res.status(200).send(users);
});



app.get("/users/typefind", (req: Request, res: Response) => {

   try {
      const type = req.query.type as string
      if (!type) {

         throw new Error('type not specified')
      }
      const filterData = users.filter((x) => x.type.toLowerCase().includes(String(type)
         .toLowerCase()))
      if (filterData.length === 0) {
         throw new Error('error ')
      }
      res.status(200).send(filterData);
   } catch (err: any) {
      res.status(400).send(err.message)
   }
});


app.get("/users/find", (req: Request, res: Response) => {

   try {
      const name = req.query.name as string
      if (!name) {

         throw new Error('name not specified')
      }
      const filterData = users.filter((x) => x.name.toLowerCase().includes(String(name)
         .toLowerCase()))
      if (filterData.length === 0) {
         throw new Error('error ')
      }
      res.status(200).send(filterData);
   } catch (err: any) {
      res.status(400).send(err.message)
   }
});

app.post("/user/add", (req, res) => {

    try {
      
       const body1 = {
         id: Date.now(),
         name: req.body.name,
         email: req.body.email,
         age: req.body.age,
      }

      let type = req.body.type
      type = type.toUpperCase()

      for(let i of users) {
         if(i.name.toUpperCase() === req.body.name.toUpperCase() && i.email.toUpperCase() === req.body.email.toUpperCase()) {
            throw new Error('name or email invalid')
         }
      }

      if(type === 'NORMAL') {
         
         let newObj = {...body1, type:userTypeKey.NORMAL }

         users.push(newObj)
      }  
      if(type === 'ADMIN') {
         let newObj = {...body1, type:userTypeKey.ADMIN }

         users.push(newObj)

         res.status(200).send(body1);
      }  


      res.status(200).send('User added');

   } catch (err:any) {
      res.status(400).send(err.message)
   }

});


const server = app.listen(process.env.PORT || 3001, () => {

   if (server) {
      const address = server.address() as AddressInfo
      console.log(`Running in : http://localhost:${address.port}`)

   } else {
      console.error("failure upon starting server !")
   }

});


