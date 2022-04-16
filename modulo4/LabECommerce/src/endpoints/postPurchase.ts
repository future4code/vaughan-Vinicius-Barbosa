import { Request, Response } from 'express';
import { connection } from "../data/connection"

export const postPurchase = async (req: Request, res: Response) => {


   const { user_id, product_id, quantity } = req.body;

   try {

      if (typeof user_id !== 'number' || typeof product_id !== 'number' || typeof quantity !== 'number') {
         throw new Error('type error')
      }

      if (!user_id || !product_id || !quantity) {
         throw new Error('any field not specified')
      }
      if (quantity < 1) {
         throw new Error('quantity not specified')
      }

      const price = await connection("lab_ecommerce_products")
      .where("id", product_id)
      const total_price = price[0].price * quantity;
      const id: string = Date.now().toString();

      await connection("lab_ecommerce_purchases")
         .insert({ id, user_id, product_id, quantity, total_price })

      res.status(200).send("Compra feita com sucesso.")


   } catch (err: any) {

      res.status(400).send(err.message)
   }

} 