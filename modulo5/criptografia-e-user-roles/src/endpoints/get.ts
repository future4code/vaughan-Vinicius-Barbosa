import { Request, Response } from 'express'; 
import { connection } from "../data/connection"

export const get = async (req: Request,res: Response) => {

  
   try {


      res.status(200).send('mudou');
   } catch (err: any) {

      res.status(400).send(err.message)
   }

}