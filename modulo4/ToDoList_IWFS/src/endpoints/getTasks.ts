import { Request, Response } from 'express';
import { connection } from "../data/connection"

export const getTasks = async (req: Request, res: Response) => {

   const id = req.params.id

   try {

      const data = await connection("to_do_users")
         .select('to_do_tasks.id', 'to_do_users.nickname', 'to_do_tasks.titulo',
            'to_do_tasks.descricao', 'to_do_tasks.data_limite', 'to_do_tasks.status')
         .join('to_do_tasks', 'to_do_users', '=', id)
         .where('to_do_users.id', id)

      res.status(200).send(data);

   } catch (err: any) {

      res.status(400).send(err.message)
   }

};