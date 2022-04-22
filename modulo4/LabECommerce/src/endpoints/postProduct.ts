import { Request, Response } from 'express'; 
import { connection } from "../data/connection"

export const postProduct = async (req: Request,res: Response) => {

   const { id, name, price, image_url } = req.body

   try {

      const data1 = {
         id : req.body.id
      }

      if(typeof name  !== 'string' || typeof price  !== 'number' || typeof image_url !== 'string' ){
         throw new Error('type error')
      }

      if (!name || !price || !image_url) {
         throw new Error('any field not specified')
     }

      const data = await connection('lab_ecommerce_products')
      .insert(req.body)

      res.status(200).send({message: "produto adicionado!!"});
   } catch (err: any) {

      res.status(400).send(err.message)
   }
} 

