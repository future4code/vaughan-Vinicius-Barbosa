import { Request, Response } from 'express';
import { connection } from "../data/connection"
import { Authenticator, ROLE } from '../services/Authenticator';
import { HashManager } from '../services/HashManager';
import { IdGenerator } from '../services/IdGenerator';

export const postUser = async (req: Request, res: Response) => {

   const { email, password, role } = req.body

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
      if (password.length < 6) {
         throw new Error("Sua senha precisa de 6 ou mais caracteres");

      }
      if (role.toUpperCase() !== "NORMAL" && role.toUpperCase() !== "ADMIN") {
         res.statusCode = 422
         throw new Error("Role inválido")
      }

      const id: string = new IdGenerator().generateId()
      let hashManager: HashManager = new HashManager()
      const cypherPassword: string = hashManager.createHash(password)


      const newObj = {
         id,
         email,
         password: cypherPassword,
         role: role
      }

      const find: object[] = await connection("users")
         .where('email', newObj.email)

      if (find[0]) {

         throw new Error("Usuario ja cadastrado!");

      }

      const data = await connection("users")
         .insert(newObj)


      const token = new Authenticator().GenerateToken({ id: id, role: role.toUpperCase() })

      res.status(200).send({ message: "usuario criado", obj: newObj, id: token });

   } catch (err: any) {

      res.status(400).send(err.message)
   }

}