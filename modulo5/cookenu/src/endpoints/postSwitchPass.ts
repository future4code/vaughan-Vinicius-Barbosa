import { Request, Response } from 'express';
import { connection } from "../data/connection";
import { Authenticator } from '../services/Authenticator';
import { HashManager } from '../services/HashManager';
import { IdGenerator } from '../services/IdGenerator';

export const postSwitchPass = async (req: Request, res: Response) => {
   const { token, newPassword } = req.body
   try {
      if (!newPassword || !token) {
         throw new Error("Verifique os campos password, email, nickname e tente novamente");
      }
      const verifyToken = new Authenticator().GetTokenData(token)
      if(!verifyToken) {
         throw new Error("token invalido");
      }
      if (typeof newPassword !== 'string' || typeof token !== 'string') {
         throw new Error("Erro de tipo");
      }
      if (newPassword.length < 6) {
         throw new Error("Sua senha precisa de ao menos 6 ou mais caracteres");
      }
      const verify = await connection("cookenu_users")
         .where("id", verifyToken.id);

      if (verify[0].id === verifyToken.id) {

         const idNew = new IdGenerator().generateId()
         const cypherPassword: string = new HashManager().createHash(newPassword)
         const obj = { id: idNew, password: cypherPassword }
         await connection("cookenu_users")
         .where({ id: verifyToken.id })
            .update(obj)
      }

      res.status(200).send({ message: "senha alterada com sucesso !!" });

   } catch (err: any) {

      res.status(400).send({message:err.message})
   }
}
