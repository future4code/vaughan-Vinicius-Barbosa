import { Request, Response } from "express";
import { connection } from "../data/connection";

export const getUserPurchases = async (req: Request, res: Response) => {
    try {

        const {userId} = req.params

      const userPurchases = await connection("lab_ecommerce_users")
      .select('lab_ecommerce_purchases.user_id', 'lab_ecommerce_users.name as username',
      'lab_ecommerce_products.name as product_name',
      'lab_ecommerce_purchases.product_id',
      'lab_ecommerce_purchases.quantity',
      'lab_ecommerce_purchases.total_price')
      .join('lab_ecommerce_purchases', 'lab_ecommerce_users.id', 'lab_ecommerce_purchases.user_id')
      .where('lab_ecommerce_users.id', userId)
      .join('lab_ecommerce_products', 'lab_ecommerce_purchases.product_id', 'lab_ecommerce_products.id');

        res.status(200).send(userPurchases);

    } catch (error: any) {
        res.status(400).send({message: error.message})

    }
}; 