import { Request, Response } from 'express';
import { connection } from "../data/connection"
import { Authenticator } from '../services/Authenticator';
import { IdGenerator } from '../services/IdGenerator';
import { dateNow } from '../utils/dateNow';

export const postReceitaUsuario = async (req: Request, res: Response) => {
   const { title, descricao } = req.body
   const token  = req.headers.authorization as string 
   try {
      const id = new IdGenerator().generateId()
      if (!title || !descricao) {
         throw new Error("Verifique os campos title, descricao e tente novamente !");
      }
      const verify = new Authenticator().GetTokenData(token)
      if(!verify) {
         throw new Error("token invalido");
      }
      if (typeof descricao !== 'string' || typeof title !== 'string') {
         throw new Error("Erro de tipo");
      }
      if (title.length > 255) {
         throw new Error("tamanha de title excedido o maximo de caracteres sao 255");
      }
      await connection("cookenu_receitas")
         .insert({ id, title, descricao, data:dateNow ,id_user: verify.id  })

      res.status(200).send({message: "Receita adicionada"});
   } catch (err: any) {
      res.status(400).send(err.message)
   }
}
