import { Request, Response } from 'express';
import { connection } from "../data/connection"

export const postTask = async (req: Request, res: Response) => {

   const { titulo, descricao, data_limite, user_id } = req.body


   try {

      const id = Date.now()

      if (typeof titulo !== 'string' || typeof descricao !== 'string'
       || typeof data_limite !== 'string'|| typeof user_id !== 'number') {
         throw new Error('type error')
      }

      if (!titulo || !descricao || !data_limite || !user_id) {
         throw new Error('any field not specified')
      }
      const obj = {id,titulo,descricao,data_limite,user_id}
      await connection('to_do_tasks')
      .insert(obj)

      
      res.status(200).send({ message: 'task created' });
   } catch (err: any) {

      res.status(400).send(err.message)
   }

};