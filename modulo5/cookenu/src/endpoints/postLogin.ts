import { Request, Response } from 'express';
import { connection } from "../data/connection"
import { Authenticator } from '../services/Authenticator';

export const postLogin = async (req: Request, res: Response) => {

   const { email, password } = req.body

   try {

      if (!password || !email) {
         throw new Error("Verifique os dados e tente novamente");
      }
      if (typeof password !== 'string' || typeof email !== 'string') {
         throw new Error("Erro de tipo");
      }
      if (email.includes("@") === false) {
         throw new Error("Insira um arroba");
      }

      const find = await connection("users")
         .where('email', email)

      if(!find[0]) {
         throw new Error("Usuario nao encontrado");
      }
      if(find[0].password != password) {

         throw new Error("Senha incorreta");
         
      }
      const token = new Authenticator().GenerateToken({ id: find[0].id })
      const ver = new Authenticator().GetTokenData(token)

      res.status(200).send({ message: "usuario logou", token: token , ver: ver!!.id});

   } catch (err: any) {

      res.status(400).send(err.message)
   }

}
