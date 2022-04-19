import { Request, Response } from 'express';
import { connection } from "../data/connection"

export const postUser = async (req: Request, res: Response) => {

   const { name, nickname, email } = req.body

   try {

      const id = Date.now()

      if (typeof name !== 'string' || typeof nickname !== 'string' || typeof email !== 'string') {
         throw new Error('type error')
      }

      if (!name || !nickname || !email) {
         throw new Error('any field not specified')
      }
      const obj = {id,name,nickname,email}
      await connection('to_do_users')
      .insert(obj)

      
      res.status(200).send({ message: 'user created' });
   } catch (err: any) {

      res.status(400).send(err.message)
   }

};