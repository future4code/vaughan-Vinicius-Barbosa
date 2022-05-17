import { Request, Response } from 'express';
import { connection } from "../data/connection"
import { Authenticator } from '../services/Authenticator';

export const getAllUsers = async (req: Request, res: Response) => {
   const token = req.headers.authorization as string
   try {
      if (!token) {
         throw new Error("Verifique os dados de headers e tente novamente");
      }
      const verify = new Authenticator().GetTokenData(token)
      if (!verify) {
         throw new Error("token invalido");
      }
      const data = await connection("cookenu_users")
      .select('id', 'email', 'nickname', 'bio', 'lema')

      if (data.length === 0) {
         throw new Error("error");
      }

      res.status(200).send({ users: data });
   } catch (err: any) {
      res.status(400).send({message : err.message})
   }
}
