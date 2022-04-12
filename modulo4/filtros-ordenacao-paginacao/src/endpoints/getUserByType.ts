import { Request, Response } from 'express'; 
import { connection } from "../data/connection"

export const getUserByType = async (req: Request,res: Response) => {

   const {type} = req.params

   try {
      
      const data = await connection('aula48_exercicio')
      .select("*")
      .where('type','=',`${type}`)

      res.status(200).send(data);
   } catch (err: any) {

      res.status(400).send(err.message)
   }

}


