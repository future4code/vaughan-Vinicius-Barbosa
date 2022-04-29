import { Request, Response } from 'express';
import { connection } from "../data/connection"
import { Authenticator } from '../services/Authenticator';
import { dateNow } from '../utils/dateNow';
export const putAlteraReceita = async (req: Request, res: Response) => {
   const { Idreceita, title, descricao } = req.body
   const token = req.headers.authorization as string
   try {
      
      if (!Idreceita) {
         throw new Error("Verifique os campo id e tente novamente !");
      }
      const verify = new Authenticator().GetTokenData(token)
      if (!verify) {
         throw new Error("token invalido");
      }
      if (typeof Idreceita !== 'string') {
         throw new Error("Erro de tipo");
      }
      const findUser = await connection("cookenu_receitas")
         .where({ id_user: verify.id })
      const verifyUser: any[] = findUser.filter((x: { id: any; }) => x.id === Idreceita)


      if (verifyUser.length === 0) {
         throw new Error("receita nao existe ou nao pertence a este usuario");
      }
      await connection("cookenu_receitas")
         .where({ id: verifyUser[0].id })
         .update({title, descricao,id_user: verify.id,data:dateNow })

      res.status(200).send({ message: "receita alterada" });

   } catch (err: any) {
      res.status(400).send(err.message)
   }
}
