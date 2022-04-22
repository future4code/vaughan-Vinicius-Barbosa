import { Request, Response } from 'express';
import { connection } from "../data/connection"

export const getOrderOrMail = async (req: Request, res: Response) => {
   const { type } = req.query
   const { name } = req.query
   let newtype = String(type).toLowerCase()
   let newName = String(name).toLowerCase()
   try {

      let data
      data = await connection('aula48_exercicio')
         .orderBy('email')

      if (newtype == 'tipo') {
          data = await connection('aula48_exercicio')
            .orderBy('type')
      }
      if (newName == 'nome') {
          data = await connection('aula48_exercicio')
            .orderBy('name')
      }

      res.status(200).send(data);

   } catch (err: any) {

      res.status(400).send(err.message)
   }


}

