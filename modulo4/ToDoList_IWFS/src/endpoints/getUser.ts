import { Request, Response } from 'express'; 
import { connection } from "../data/connection"

export const getUser = async (req: Request,res: Response) => {

   const id = req.params.id

   try {

      const data = await connection('to_do_users')
      .where('id','=', id)

      res.status(200).send(data);
   } catch (err: any) {

      res.status(400).send(err.message)
   }

};