import { Request, Response } from 'express'; 
import { connection } from "../data/connection"

export const updateUser = async (req: Request,res: Response) => {

   const {name, nickname} = req.body
   const id = req.params.id

   try {

      if (typeof name !== 'string' || typeof nickname !== 'string') {
         throw new Error('type error')
      }

      if (!name || !nickname) {
         throw new Error('any field not specified')
      }
       const data = await connection("to_do_users")
       .update({name,nickname})
       .where({id: id})

      res.status(200).send(data);
   } catch (err: any) {

      res.status(400).send(err.message)
   }

};