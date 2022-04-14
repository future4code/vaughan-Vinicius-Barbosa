import { Request, Response } from 'express'; 
import { connection } from "../data/connection"

export const postUser = async (req: Request,res: Response) => {

   const { id, name, email, password } = req.body


   try {

      const data = await connection('lab_ecommerce')
      .insert(req.body)

      res.status(200).send(data);
   } catch (err: any) {

      res.status(400).send(err.message)
   }

} 

