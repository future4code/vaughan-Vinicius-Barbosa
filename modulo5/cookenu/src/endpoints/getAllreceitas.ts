import { Request, Response } from 'express';
import { connection } from "../data/connection"
import { Authenticator } from '../services/Authenticator';

export const getAllreceitas = async (req: Request, res: Response) => {
   const token = req.headers.authorization as string

   try {
      if (!token) {
         throw new Error("Verifique os dados de headers e tente novamente");
      }
      const verify = new Authenticator().GetTokenData(token)
      if (!verify) {
         throw new Error("token invalido");
      }
      const data = await connection("cookenu_receitas")
      .where('id_user', verify.id)
      .select('id', 'title', 'descricao', 'data', 'id')

      if (data.length === 0) {
         throw new Error("usuario nao possui receitas ainda");
      }
      
      res.status(200).send({ receitas: data });
   } catch (err: any) {
      res.status(400).send(err.message)
   }
}
