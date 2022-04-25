import { Request, Response } from 'express';
import { connection } from "../data/connection"
import { Authenticator } from '../services/Authenticator';
import { IdGenerator } from '../services/IdGenerator';

export const postUser = async (req: Request, res: Response) => {

   const { email, password } = req.body

   try {
      const id = new IdGenerator().generateId()
      const obj = { ...req.body, id: id }

      if (!password || !email) {
         throw new Error("Verifique os dados e tente novamente");
      }
      if (typeof password !== 'string' || typeof email !== 'string') {
         throw new Error("Erro de tipo");
      }
      if (email.includes("@") === false) {
         throw new Error("Insira um arroba");
      }
      if (password.length < 6) {
         throw new Error("Sua senha precisa de 6 ou mais caracteres");

      }

      const find = await connection("users")
         .where('email', obj.email)

      if (find[0]) {

         throw new Error("Usuario ja cadastrado!");

      }

      const data = await connection("users")
         .insert(obj)

      const token = new Authenticator().GenerateToken({ id: id })


      res.status(200).send({ message: "usuario criado", token: token });

   } catch (err: any) {

      res.status(400).send(err.message)
   }

}

