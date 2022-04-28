import { Request, Response } from 'express';
import { connection } from "../data/connection"

export const postUser = async (req: Request, res: Response) => {

   const { name, email, password } = req.body


   try {

      if (typeof name !== 'string' || typeof email !== 'string' || typeof password !== 'string') {
         throw new Error('type error')
      }
      if (!name || !email || !password) {
         throw new Error('any field not specified')
      }

      const data = await connection('lab_ecommerce_users')
         .insert(req.body)


      res.status(200).send(data);
   } catch (err: any) {

      res.status(400).send(err.message)
   }

}

