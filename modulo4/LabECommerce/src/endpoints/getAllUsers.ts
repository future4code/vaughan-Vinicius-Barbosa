import { Request, Response } from 'express'; 
import { connection } from "../data/connection"

export const getAllUsers = async (req: Request,res: Response) => {

   try {

      const data = await connection('lab_ecommerce_users')

      res.status(200).send(data);
   } catch (err: any) {

      res.status(400).send(err.message)
   }

} 
