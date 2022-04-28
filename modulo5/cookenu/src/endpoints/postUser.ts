import { Request, Response } from 'express';
import { connection } from "../data/connection"
import { Authenticator } from '../services/Authenticator';
import { HashManager } from '../services/HashManager';
import { IdGenerator } from '../services/IdGenerator';

export const postUser = async (req: Request, res: Response) => {
   const { email, password, nickname, bio, lema } = req.body
   try {
      if (!password || !email || !nickname) {
         throw new Error("Verifique os campos password, email, nickname e tente novamente");
      }
      if (typeof password !== 'string' || typeof email !== 'string') {
         throw new Error("Erro de tipo");
      }
      if (bio || lema) {
         if (typeof bio !== 'string' || typeof lema !== 'string') {
            throw new Error("Erro de tipo");
         }
      }
      if (email.includes("@") === false) {
         throw new Error("Insira um arroba");
      }
      if (password.length < 6) {
         throw new Error("Sua senha precisa de ao menos 6 ou mais caracteres");
      }
      if (nickname.length > 16) {
         throw new Error("Seu nick name excedeu 16 os caracteres permitidos");
      }
      const id = new IdGenerator().generateId()
      let hashManager: HashManager = new HashManager()
      const cypherPassword: string = hashManager.createHash(password)

      const obj = { ...req.body, id: id, password: cypherPassword }

      const find = await connection("cookenu_users")
         .where('email', obj.email)
      if (find[0]) {
         throw new Error("Usuario ja cadastrado!");
      }
      const data = await connection("cookenu_users")
         .insert(obj)

      const token = new Authenticator().GenerateToken({ id: id })
      res.status(200).send({ message: "usuario criado", token: token });

   } catch (err: any) {

      res.status(400).send(err.message)
   }
}

