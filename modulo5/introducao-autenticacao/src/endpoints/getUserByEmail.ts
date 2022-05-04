import { Request, Response } from 'express'; 
import { connection } from "../data/connection"

export const getUser = async (req: Request,res: Response) => {

  const { email } = req.body

   try {
      const obj = {...req.body}
      if( !email) {
         throw new Error("Verifique os dados e tente novamente");
      }
      if(typeof email !== 'string') {
         throw new Error("Erro de tipo");
      }
      if(email.includes("@") === false) {
         throw new Error("Insira um arroba");
      }
       const data = await connection("users")
      .where('email', obj.email)

      if(!data[0]) {
         throw new Error("usuario nao encontrado");
      }

      res.status(200).send({message:"usuario encontrado", body: data[0]});

   } catch (err: any) {

      res.status(400).send(err.message)
   }

}