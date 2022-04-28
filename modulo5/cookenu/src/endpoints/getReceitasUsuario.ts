import { Request, Response } from 'express';
import { connection } from "../data/connection"
import { Authenticator } from '../services/Authenticator';

export const getReceitasUsuario = async (req: Request, res: Response) => {

   const { email } = req.body
   const token  = req.headers.authorization as string 

   try {
      const obj = { ...req.body }
      if (!email) {
         throw new Error("Verifique os dados e tente novamente");
      }
      const verify = new Authenticator().GetTokenData(token)
      if(!verify) {
         throw new Error("token invalido");
      }
      if (typeof email !== 'string') {
         throw new Error("Erro de tipo");
      }
      if (email.includes("@") === false) {
         throw new Error("Insira um arroba");
      }
      const data = await connection("cookenu_receitas")
         .where('email', verify.id)
      if (!data[0]) {
         throw new Error("usuario nao encontrado");
      }
      res.status(200).send({ message: "usuario encontrado", body: data[0] });
   } catch (err: any) {
      res.status(400).send(err.message)
   }
}