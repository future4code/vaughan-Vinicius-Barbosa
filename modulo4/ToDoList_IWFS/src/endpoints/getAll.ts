import { Request, Response } from 'express'; 
import { connection } from "../data/connection"

export const getAll = async (req: Request,res: Response) => {


   try {

      const data = await connection('to_do_users')

      res.status(200).send(data[0]);
   } catch (err: any) {

      res.status(400).send(err.message)
   }

};