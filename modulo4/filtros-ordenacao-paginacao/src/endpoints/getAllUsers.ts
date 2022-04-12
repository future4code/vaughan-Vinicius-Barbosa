import { Request, Response } from 'express'; 
import { connection } from "../data/connection"

export async function getAllUsers(req: Request,res: Response) {

   const {nome} = req.query

   try {
      
      const data = await connection('aula48_exercicio')
      .select("*")
      .where('name','like',`%${nome}%`)

      if(!nome){
         throw new Error(`Nao foi possivel achar o nome`)
      }
      
      res.status(200).send(data);
   } catch (err: any) {

      res.status(400).send(err.message)
   }

}