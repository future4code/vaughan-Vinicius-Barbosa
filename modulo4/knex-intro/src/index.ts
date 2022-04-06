import express, { Request, Response } from 'express';
import cors from 'cors';
import { connection } from './connection';
import { AddressInfo } from 'net'
import dotenv from 'dotenv'

const app = express();
app.use(express.json());
app.use(cors());



 

// get
app.get("/actor", async (req: Request, res: Response): Promise<any> => {

   try {

     const result  =  await connection.raw(`

      SELECT * FROM Actor WHERE name = "${req.body.name}"
    `)
      

      res.status(200).send(result);
   } catch (err: any) {

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

