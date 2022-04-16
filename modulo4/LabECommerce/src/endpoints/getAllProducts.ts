import { Request, Response } from 'express'; 
import { connection } from "../data/connection"

export const getAllProducts = async (req: Request,res: Response) => {

   try {

      const data = await connection('lab_ecommerce_products')

      res.status(200).send(data);
   } catch (err: any) {

      res.status(400).send(err.message)
   }

} 